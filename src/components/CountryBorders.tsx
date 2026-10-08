import React, { useEffect, useState, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { LineSegments2, LineMaterial, LineSegmentsGeometry } from 'three-stdlib';
import { latLongToVector3 } from './GlobeLandmark';
import { useOperaStore } from '../store/useOperaStore';
import {
  shouldKeepPolygon,
  isMajorOrientingLake,
  getMajorLakesRings,
  isPointInsideAnyMajorLake,
} from '../utils/globeVectorGeometry';

interface CountryBordersProps {
  globeRadius: number;
}

export const CountryBorders: React.FC<CountryBordersProps> = ({ globeRadius }) => {
  const { size } = useThree();
  const houses = useOperaStore((state) => state.houses);

  // Mesh states
  // Unified boundary line: EXACT SAME crisp line for national borders, ocean coastlines, and Great Lakes shorelines
  const [boundaryMesh, setBoundaryMesh] = useState<LineSegments2 | null>(null);
  const [stateMesh, setStateMesh] = useState<LineSegments2 | null>(null);

  // Material refs for dynamic screen resolution synchronization
  const boundaryMatRef = useRef<LineMaterial | null>(null);
  const stateMatRef = useRef<LineMaterial | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Segment deduplication key
    const segKey = (lng1: number, lat1: number, lng2: number, lat2: number) => {
      const k1 = `${lng1.toFixed(3)},${lat1.toFixed(3)}`;
      const k2 = `${lng2.toFixed(3)},${lat2.toFixed(3)}`;
      return k1 < k2 ? `${k1}_${k2}` : `${k2}_${k1}`;
    };

    // Radii: cleanly on top of 3D continent & lake geometries, eliminating parallax offset & z-fighting
    const rBoundary = globeRadius + 0.0026;
    const rState = globeRadius + 0.0024;

    // ─────────────────────────────────────────────────────────────
    // 1. UNIFIED CRISP BOUNDARY LINE (Country Borders + Ocean Coastlines + Great Lakes)
    // Both land borders and water boundaries use the EXACT SAME crisp vector line
    // ─────────────────────────────────────────────────────────────
    Promise.all([
      fetch('/data/ne_50m_countries.geojson').then((res) => res.json()).catch(() => null),
      fetch('/data/ne_50m_lakes.geojson').then((res) => res.json()).catch(() => null),
    ])
      .then(([countriesGeojson, lakesGeojson]) => {
        if (!isMounted) return;

        const lakeRings = getMajorLakesRings(lakesGeojson);

        const segmentSet = new Set<string>();
        const positions: number[] = [];

        const addSegment = (lng1: number, lat1: number, lng2: number, lat2: number) => {
          const k = segKey(lng1, lat1, lng2, lat2);
          if (!segmentSet.has(k)) {
            segmentSet.add(k);
            const p1 = latLongToVector3(lat1, lng1, rBoundary);
            const p2 = latLongToVector3(lat2, lng2, rBoundary);
            positions.push(p1.x, p1.y, p1.z);
            positions.push(p2.x, p2.y, p2.z);
          }
        };

        // 1a. National Country Borders & Ocean Coastlines (Excludes clutter islands & internal lake cuts)
        if (countriesGeojson?.features) {
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
              if (!shouldKeepPolygon(outerRing, houses)) return;

              poly.forEach((ring: any) => {
                if (!ring || ring.length < 2) return;
                for (let i = 0; i < ring.length - 1; i++) {
                  const lng1 = ring[i][0];
                  const lat1 = ring[i][1];
                  const lng2 = ring[i + 1][0];
                  const lat2 = ring[i + 1][1];

                  // Skip artificial GIS antimeridian/polar cut lines (specifically in Antarctica where the polygon was slit to the South Pole)
                  if (lat1 < -88 && lat2 < -88) continue;
                  if (
                    Math.abs(lng1) >= 179.9 &&
                    Math.abs(lng2) >= 179.9 &&
                    (lat1 <= -84.3 || lat2 <= -84.3)
                  ) {
                    continue;
                  }

                  // Filter out boundary segments that fall strictly inside major lakes
                  // (e.g. US-Canada border slicing across Lake Superior, Huron, Erie, Ontario, or Swiss borders in Lake Geneva/Constance)
                  const midLng = (lng1 + lng2) / 2;
                  const midLat = (lat1 + lat2) / 2;
                  if (isPointInsideAnyMajorLake(midLng, midLat, lakeRings)) {
                    continue;
                  }

                  addSegment(lng1, lat1, lng2, lat2);
                }
              });
            });
          });
        }

        // 1b. Major Orienting Lakes (Great Lakes, Lake Geneva, etc.) - Clean Outer Perimeters ONLY
        // We strictly draw ring[0] (outer shoreline) to eliminate all weird squiggly interior islet/canal lines
        if (lakesGeojson?.features) {
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
              // ONLY outer perimeter ring[0] - skips all interior hole rings to keep water pristine
              const outerRing = poly[0];
              if (!outerRing || outerRing.length < 2) return;
              for (let i = 0; i < outerRing.length - 1; i++) {
                addSegment(outerRing[i][0], outerRing[i][1], outerRing[i + 1][0], outerRing[i + 1][1]);
              }
            });
          });
        }

        // Core Dark Antique Bistre Bronze Ink Line
        const geoDark = new LineSegmentsGeometry();
        geoDark.setPositions(positions);
        const matDark = new LineMaterial({
          color: 0x342312, // Deep antique bistre bronze cartographic ink
          linewidth: 1.4,
          transparent: true,
          opacity: 0.95,
          depthWrite: false,
        });
        matDark.resolution.set(size.width, size.height);
        boundaryMatRef.current = matDark;
        setBoundaryMesh(new LineSegments2(geoDark, matDark));

        // 2. STATE & PROVINCIAL BOUNDARIES (United States & Canada Only)
        fetch('/data/ne_50m_admin_1_states_provinces_lines.geojson')
          .then((res) => res.json())
          .then((geojson) => {
            if (!isMounted) return;
            const segmentSet = new Set<string>();
            const statePositions: number[] = [];

            geojson.features.forEach((feature: any) => {
              const geom = feature.geometry;
              if (!geom) return;

              const a3 = feature.properties?.ADM0_A3;
              const admName = feature.properties?.ADM0_NAME;
              if (
                a3 &&
                a3 !== 'USA' &&
                a3 !== 'CAN' &&
                admName !== 'United States of America' &&
                admName !== 'Canada'
              ) {
                return;
              }

              const lines =
                geom.type === 'LineString'
                  ? [geom.coordinates]
                  : geom.type === 'MultiLineString'
                  ? geom.coordinates
                  : [];

              lines.forEach((line: any) => {
                if (!line || line.length < 2) return;
                for (let i = 0; i < line.length - 1; i++) {
                  const [lng1, lat1] = line[i];
                  const [lng2, lat2] = line[i + 1];

                  // Filter out state borders cutting through major lakes
                  const midLng = (lng1 + lng2) / 2;
                  const midLat = (lat1 + lat2) / 2;
                  if (isPointInsideAnyMajorLake(midLng, midLat, lakeRings)) {
                    continue;
                  }

                  const k = segKey(lng1, lat1, lng2, lat2);
                  if (!segmentSet.has(k)) {
                    segmentSet.add(k);
                    const p1 = latLongToVector3(lat1, lng1, rState);
                    const p2 = latLongToVector3(lat2, lng2, rState);
                    statePositions.push(p1.x, p1.y, p1.z);
                    statePositions.push(p2.x, p2.y, p2.z);
                  }
                }
              });
            });

            const geo = new LineSegmentsGeometry();
            geo.setPositions(statePositions);

            const mat = new LineMaterial({
              color: 0x786350, // Subtle warm sepia gray ink
              linewidth: 0.85,
              transparent: true,
              opacity: 0.55,
              depthWrite: false,
            });
            mat.resolution.set(size.width, size.height);
            stateMatRef.current = mat;

            setStateMesh(new LineSegments2(geo, mat));
          })
          .catch((err) => console.warn('Could not load vector state borders:', err));
      })
      .catch((err) => console.warn('Could not load vector boundaries:', err));

    return () => {
      isMounted = false;
      [boundaryMesh, stateMesh].forEach((mesh) => {
        if (mesh) {
          mesh.geometry.dispose();
          (mesh.material as THREE.Material).dispose();
        }
      });
    };
  }, [globeRadius]);

  // Keep line material resolutions in sync with canvas screen size
  useFrame(() => {
    [boundaryMatRef, stateMatRef].forEach((matRef) => {
      if (matRef.current) {
        if (
          matRef.current.resolution.x !== size.width ||
          matRef.current.resolution.y !== size.height
        ) {
          matRef.current.resolution.set(size.width, size.height);
        }
      }
    });
  });

  return (
    <group>
      {/* 1. Subtle State & Provincial Boundaries (US & Canada) */}
      {stateMesh && <primitive object={stateMesh} />}

      {/* 2. Unified Crisp Boundary Line (Country Borders + Ocean Coastlines + Great Lakes) */}
      {boundaryMesh && <primitive object={boundaryMesh} />}
    </group>
  );
};
