import * as THREE from 'three';
import earcut from 'earcut';
import { OperaHouse } from '../types/opera';
import { latLongToVector3 } from './globeCoordinates';

export const ORIENTING_LAKE_NAMES = [
  'superior',
  'huron',
  'michigan',
  'erie',
  'ontario',
  'geneva',
  'léman',
  'constance',
  'bodensee',
  'victoria',
  'baikal',
];

export function isMajorOrientingLake(feature: any): boolean {
  const name = (feature.properties?.name || feature.properties?.name_en || '').toLowerCase();
  const fcla = feature.properties?.featurecla;
  if (fcla === 'Reservoir' || name.includes('reservoir')) return false;
  return ORIENTING_LAKE_NAMES.some((target) => name.includes(target));
}

/**
 * Point-in-polygon raycasting test in lon/lat coordinates
 */
export function pointInPoly(pt: [number, number], ring: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0];
    const yi = ring[i][1];
    const xj = ring[j][0];
    const yj = ring[j][1];
    const intersect =
      yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

/**
 * Extracts outer perimeter rings of all major orienting lakes
 */
export function getMajorLakesRings(lakesGeojson: any): [number, number][][] {
  const rings: [number, number][][] = [];
  if (!lakesGeojson?.features) return rings;

  lakesGeojson.features.forEach((feature: any) => {
    if (!isMajorOrientingLake(feature)) return;
    const geom = feature.geometry;
    if (!geom) return;

    const polyList =
      geom.type === 'Polygon'
        ? [geom.coordinates]
        : geom.type === 'MultiPolygon'
        ? geom.coordinates
        : [];

    polyList.forEach((poly: any) => {
      const outerRing = poly[0];
      if (outerRing && outerRing.length >= 3) {
        rings.push(outerRing);
      }
    });
  });

  return rings;
}

/**
 * Checks if a lon/lat point lies inside any major orienting lake
 */
export function isPointInsideAnyMajorLake(
  lng: number,
  lat: number,
  lakeRings: [number, number][][]
): boolean {
  for (let i = 0; i < lakeRings.length; i++) {
    if (pointInPoly([lng, lat], lakeRings[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Filter out sub-degree clutter islands (Dalmatian slivers, Aegean rocks, Norwegian skerries)
 * while strictly preserving all islands that host an opera house or festival venue.
 */
export function shouldKeepPolygon(outerRing: [number, number][], houses: OperaHouse[]): boolean {
  if (!outerRing || outerRing.length < 3) return false;

  let minLng = Infinity;
  let maxLng = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;

  for (let i = 0; i < outerRing.length; i++) {
    const [lng, lat] = outerRing[i];
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  }

  const spanLng = maxLng - minLng;
  const spanLat = maxLat - minLat;
  const bboxArea = spanLng * spanLat;

  // If polygon is larger than sub-degree threshold, always keep
  if (bboxArea >= 0.15 || spanLng >= 0.5 || spanLat >= 0.5) {
    return true;
  }

  // If sub-degree polygon hosts an opera house, strictly preserve it (e.g. Valletta/Malta)
  const hasHouse = houses.some(
    (h) =>
      h.latitude >= minLat - 0.06 &&
      h.latitude <= maxLat + 0.06 &&
      h.longitude >= minLng - 0.06 &&
      h.longitude <= maxLng + 0.06
  );

  return hasHouse;
}

/**
 * Conforming 3D geodetic triangle mesh refinement with zero T-junctions.
 * Every shared edge is split at identical midpoint vertices cached per polygon,
 * ensuring adjacent triangles match perfectly without cracks or sagging into the sphere.
 */
function refineConformingMesh(
  coords: [number, number][],
  triangles: [number, number, number][],
  maxDegreeLen: number = 2.5,
  maxPasses: number = 8
): [number, number, number][] {
  let curTriangles = triangles;

  for (let pass = 0; pass < maxPasses; pass++) {
    const edgeMap = new Map<string, number>();
    let splitCount = 0;

    for (const [v0, v1, v2] of curTriangles) {
      const edges: [number, number][] = [
        [v0, v1],
        [v1, v2],
        [v2, v0],
      ];
      for (const [a, b] of edges) {
        const k = a < b ? `${a}_${b}` : `${b}_${a}`;
        if (!edgeMap.has(k)) {
          const dx = coords[a][0] - coords[b][0];
          const dy = coords[a][1] - coords[b][1];
          if (Math.hypot(dx, dy) > maxDegreeLen) {
            const mid: [number, number] = [
              (coords[a][0] + coords[b][0]) / 2,
              (coords[a][1] + coords[b][1]) / 2,
            ];
            coords.push(mid);
            edgeMap.set(k, coords.length - 1);
            splitCount++;
          }
        }
      }
    }

    if (splitCount === 0) break;

    const nextTriangles: [number, number, number][] = [];
    for (const [v0, v1, v2] of curTriangles) {
      const k0 = v0 < v1 ? `${v0}_${v1}` : `${v1}_${v0}`;
      const k1 = v1 < v2 ? `${v1}_${v2}` : `${v2}_${v1}`;
      const k2 = v2 < v0 ? `${v2}_${v0}` : `${v0}_${v2}`;

      const m0 = edgeMap.get(k0);
      const m1 = edgeMap.get(k1);
      const m2 = edgeMap.get(k2);

      const s0 = m0 !== undefined;
      const s1 = m1 !== undefined;
      const s2 = m2 !== undefined;
      const count = (s0 ? 1 : 0) + (s1 ? 1 : 0) + (s2 ? 1 : 0);

      if (count === 3 && m0 !== undefined && m1 !== undefined && m2 !== undefined) {
        nextTriangles.push([v0, m0, m2], [m0, v1, m1], [m2, m1, v2], [m0, m1, m2]);
      } else if (count === 2) {
        if (s0 && s1 && m0 !== undefined && m1 !== undefined) {
          nextTriangles.push([v0, m0, v2], [m0, m1, v2], [m0, v1, m1]);
        } else if (s1 && s2 && m1 !== undefined && m2 !== undefined) {
          nextTriangles.push([v1, m1, v0], [m1, m2, v0], [m1, v2, m2]);
        } else if (m0 !== undefined && m2 !== undefined) {
          nextTriangles.push([v2, m2, v1], [m2, m0, v1], [m2, v0, m0]);
        }
      } else if (count === 1) {
        if (s0 && m0 !== undefined) {
          nextTriangles.push([v0, m0, v2], [m0, v1, v2]);
        } else if (s1 && m1 !== undefined) {
          nextTriangles.push([v1, m1, v0], [m1, v2, v0]);
        } else if (m2 !== undefined) {
          nextTriangles.push([v2, m2, v1], [m2, v0, v1]);
        }
      } else {
        nextTriangles.push([v0, v1, v2]);
      }
    }
    curTriangles = nextTriangles;
  }

  return curTriangles;
}

/**
 * Builds 3D spherical mesh for Antarctica's continental ice sheet and the South Pole.
 * Uses South Polar stereographic projection to avoid equirectangular polar singularities
 * and antimeridian tearing, conforming tightly to the sphere via geodetic refinement.
 */
function buildAntarcticaPolarCap(
  outerRing: [number, number][],
  radius: number,
  positions: number[],
  normals: number[],
  uvs: number[]
) {
  // 1. Extract the continuous 360-degree coastline loop, omitting the artificial GIS slit to the South Pole
  const coast: [number, number][] = [];
  for (let i = 0; i < outerRing.length; i++) {
    const [lng, lat] = outerRing[i];
    if (lat < -88) continue;
    if (Math.abs(lng) >= 179.9 && lat <= -84.35) continue;
    coast.push([lng, lat]);
  }

  if (coast.length < 3) return;

  // 2. Polar Stereographic Projection centered at South Pole (lat = -90 -> origin (0,0))
  const PI = Math.PI;
  const toStereo = (lat: number, lng: number): [number, number] => {
    const colatRad = (90 + lat) * (PI / 180);
    const r = 2 * Math.tan(colatRad / 2);
    const theta = lng * (PI / 180);
    return [r * Math.sin(theta), r * Math.cos(theta)];
  };

  const fromStereo = (x: number, y: number): [number, number] => {
    const r = Math.hypot(x, y);
    const colatRad = 2 * Math.atan(r / 2);
    const lat = colatRad * (180 / PI) - 90;
    const theta = Math.atan2(x, y);
    const lng = theta * (180 / PI);
    return [lng, lat];
  };

  const flat2D: number[] = [];
  const coords2D: [number, number][] = [];
  for (let i = 0; i < coast.length; i++) {
    const [x, y] = toStereo(coast[i][1], coast[i][0]);
    flat2D.push(x, y);
    coords2D.push([x, y]);
  }

  try {
    const indices = earcut(flat2D, [], 2);
    const rawTriangles: [number, number, number][] = [];
    for (let i = 0; i < indices.length; i += 3) {
      rawTriangles.push([indices[i], indices[i + 1], indices[i + 2]]);
    }

    // Refine conforming mesh in stereographic space (maxLen = 0.04 ~= 2.3 deg)
    // Ensures all interior triangles conform to the sphere curvature and stay above the ocean surface
    const refinedTriangles = refineConformingMesh(coords2D, rawTriangles, 0.04, 8);

    for (let i = 0; i < refinedTriangles.length; i++) {
      const [i1, i2, i3] = refinedTriangles[i];
      const [lng1, lat1] = fromStereo(coords2D[i1][0], coords2D[i1][1]);
      const [lng2, lat2] = fromStereo(coords2D[i2][0], coords2D[i2][1]);
      const [lng3, lat3] = fromStereo(coords2D[i3][0], coords2D[i3][1]);

      const p1 = latLongToVector3(lat1, lng1, radius);
      const p2 = latLongToVector3(lat2, lng2, radius);
      const p3 = latLongToVector3(lat3, lng3, radius);

      positions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);

      const n1 = p1.clone().normalize();
      const n2 = p2.clone().normalize();
      const n3 = p3.clone().normalize();
      normals.push(n1.x, n1.y, n1.z, n2.x, n2.y, n2.z, n3.x, n3.y, n3.z);

      const u1 = 0.5 + Math.atan2(n1.x, n1.z) / (2 * Math.PI);
      const v1 = 0.5 + Math.asin(Math.max(-1, Math.min(1, n1.y))) / Math.PI;
      const u2 = 0.5 + Math.atan2(n2.x, n2.z) / (2 * Math.PI);
      const v2 = 0.5 + Math.asin(Math.max(-1, Math.min(1, n2.y))) / Math.PI;
      const u3 = 0.5 + Math.atan2(n3.x, n3.z) / (2 * Math.PI);
      const v3 = 0.5 + Math.asin(Math.max(-1, Math.min(1, n3.y))) / Math.PI;
      uvs.push(u1, v1, u2, v2, u3, v3);
    }
  } catch (err) {
    // Silently skip on error
  }
}

/**
 * Builds 3D spherical continent geometry with clean triangulation and geodetic subdivision.
 * Subdividing triangles ensures the 3D mesh tightly conforms to the sphere surface without sagitta clipping.
 */
export function buildContinentsGeometry(
  countriesGeojson: any,
  houses: OperaHouse[],
  radius: number
): THREE.BufferGeometry {
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];

  if (!countriesGeojson?.features) {
    return new THREE.BufferGeometry();
  }

  countriesGeojson.features.forEach((feature: any) => {
    const geom = feature.geometry;
    if (!geom) return;

    const polyList =
      geom.type === 'Polygon'
        ? [geom.coordinates]
        : geom.type === 'MultiPolygon'
        ? geom.coordinates
        : [];

    polyList.forEach((poly: any) => {
      const outerRing = poly[0];
      if (!outerRing || outerRing.length < 3) return;

      // Special handling for Antarctica's continental ice sheet covering the South Pole
      if (
        (feature.properties?.ADMIN === 'Antarctica' ||
          feature.properties?.NAME === 'Antarctica') &&
        outerRing.some((pt: any) => pt[1] < -85)
      ) {
        buildAntarcticaPolarCap(outerRing, radius, positions, normals, uvs);
        return;
      }

      if (!shouldKeepPolygon(outerRing, houses)) {
        return;
      }

      // Check for antimeridian wrap (e.g. Chukotka/Russia, Fiji)
      let hasFarWest = false;
      let hasFarEast = false;
      for (let i = 0; i < outerRing.length; i++) {
        const lng = outerRing[i][0];
        if (lng < -90) hasFarWest = true;
        if (lng > 90) hasFarEast = true;
      }
      const crossesAntimeridian = hasFarWest && hasFarEast;

      const flatCoords: number[] = [];
      const transformLng = (lng: number) => (crossesAntimeridian && lng < 0 ? lng + 360 : lng);
      const untransformLng = (lng: number) => (crossesAntimeridian && lng > 180 ? lng - 360 : lng);

      for (let i = 0; i < outerRing.length; i++) {
        flatCoords.push(transformLng(outerRing[i][0]), outerRing[i][1]);
      }

      try {
        const coords: [number, number][] = [];
        for (let i = 0; i < flatCoords.length; i += 2) {
          coords.push([flatCoords[i], flatCoords[i + 1]]);
        }

        const indices = earcut(flatCoords, [], 2);
        const rawTriangles: [number, number, number][] = [];
        for (let i = 0; i < indices.length; i += 3) {
          rawTriangles.push([indices[i], indices[i + 1], indices[i + 2]]);
        }

        const refinedTriangles = refineConformingMesh(coords, rawTriangles, 2.5, 8);

        for (let i = 0; i < refinedTriangles.length; i++) {
          const [i1, i2, i3] = refinedTriangles[i];
          const [l1, a1] = coords[i1];
          const [l2, a2] = coords[i2];
          const [l3, a3] = coords[i3];

          const p1 = latLongToVector3(a1, untransformLng(l1), radius);
          const p2 = latLongToVector3(a2, untransformLng(l2), radius);
          const p3 = latLongToVector3(a3, untransformLng(l3), radius);

          positions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);

          const n1 = p1.clone().normalize();
          const n2 = p2.clone().normalize();
          const n3 = p3.clone().normalize();
          normals.push(n1.x, n1.y, n1.z, n2.x, n2.y, n2.z, n3.x, n3.y, n3.z);

          const u1 = 0.5 + Math.atan2(n1.x, n1.z) / (2 * Math.PI);
          const v1 = 0.5 + Math.asin(Math.max(-1, Math.min(1, n1.y))) / Math.PI;
          const u2 = 0.5 + Math.atan2(n2.x, n2.z) / (2 * Math.PI);
          const v2 = 0.5 + Math.asin(Math.max(-1, Math.min(1, n2.y))) / Math.PI;
          const u3 = 0.5 + Math.atan2(n3.x, n3.z) / (2 * Math.PI);
          const v3 = 0.5 + Math.asin(Math.max(-1, Math.min(1, n3.y))) / Math.PI;
          uvs.push(u1, v1, u2, v2, u3, v3);
        }
      } catch (err) {
        // Silently skip malformed polygon geometries
      }
    });
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  return geometry;
}

/**
 * Builds 3D spherical mesh for major orienting lakes (Great Lakes, Lake Geneva, etc.)
 */
export function buildLakesGeometry(lakesGeojson: any, radius: number): THREE.BufferGeometry {
  const positions: number[] = [];
  const normals: number[] = [];

  if (!lakesGeojson?.features) {
    return new THREE.BufferGeometry();
  }

  lakesGeojson.features.forEach((feature: any) => {
    if (!isMajorOrientingLake(feature)) return;
    const geom = feature.geometry;
    if (!geom) return;

    const polyList =
      geom.type === 'Polygon'
        ? [geom.coordinates]
        : geom.type === 'MultiPolygon'
        ? geom.coordinates
        : [];

    polyList.forEach((poly: any) => {
      const outerRing = poly[0];
      if (!outerRing || outerRing.length < 3) return;

      const flatCoords: number[] = [];
      for (let i = 0; i < outerRing.length; i++) {
        flatCoords.push(outerRing[i][0], outerRing[i][1]);
      }

      try {
        const indices = earcut(flatCoords, [], 2);

        const addTriangle = (
          l1: number,
          a1: number,
          l2: number,
          a2: number,
          l3: number,
          a3: number
        ) => {
          const d12 = Math.hypot(l2 - l1, a2 - a1);
          const d23 = Math.hypot(l3 - l2, a3 - a2);
          const d31 = Math.hypot(l1 - l3, a1 - a3);
          const maxD = Math.max(d12, d23, d31);

          if (maxD > 0.5) {
            const lm12 = (l1 + l2) / 2;
            const am12 = (a1 + a2) / 2;
            const lm23 = (l2 + l3) / 2;
            const am23 = (a2 + a3) / 2;
            const lm31 = (l3 + l1) / 2;
            const am31 = (a3 + a1) / 2;

            addTriangle(l1, a1, lm12, am12, lm31, am31);
            addTriangle(lm12, am12, l2, a2, lm23, am23);
            addTriangle(lm31, am31, lm23, am23, l3, a3);
            addTriangle(lm12, am12, lm23, am23, lm31, am31);
          } else {
            const p1 = latLongToVector3(a1, l1, radius);
            const p2 = latLongToVector3(a2, l2, radius);
            const p3 = latLongToVector3(a3, l3, radius);

            positions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);

            const n1 = p1.clone().normalize();
            const n2 = p2.clone().normalize();
            const n3 = p3.clone().normalize();
            normals.push(n1.x, n1.y, n1.z, n2.x, n2.y, n2.z, n3.x, n3.y, n3.z);
          }
        };

        for (let i = 0; i < indices.length; i += 3) {
          const i1 = indices[i];
          const i2 = indices[i + 1];
          const i3 = indices[i + 2];
          addTriangle(
            flatCoords[2 * i1],
            flatCoords[2 * i1 + 1],
            flatCoords[2 * i2],
            flatCoords[2 * i2 + 1],
            flatCoords[2 * i3],
            flatCoords[2 * i3 + 1]
          );
        }
      } catch (err) {}
    });
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  return geometry;
}
