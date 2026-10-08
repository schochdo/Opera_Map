import * as THREE from 'three';
import { OperaHouse } from '../types/opera';

/**
 * Converts geographic latitude and longitude into 3D Cartesian coordinates on a sphere.
 */
export function latLongToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

/**
 * Converts 3D Cartesian coordinates on a sphere back to geographic latitude and longitude.
 */
export function vector3ToLatLong(pos: THREE.Vector3): { lat: number; lng: number } {
  const norm = pos.clone().normalize();
  const phi = Math.acos(norm.y);
  const lat = 90 - (phi * 180) / Math.PI;
  let lng = (Math.atan2(norm.z, -norm.x) * 180) / Math.PI - 180;
  while (lng < -180) lng += 360;
  while (lng > 180) lng -= 360;
  return { lat, lng };
}

/**
 * Computes tight, accurate positions for all landmarks using subtle surface relaxation with a hard displacement clamp.
 * Ensures neighboring pins (e.g. Lincoln Center, West End) separate just enough for clean clicking while strictly
 * preventing pins from drifting into bays or bodies of water.
 */
export function computeDispersedPositions(
  rawHouses: OperaHouse[],
  globeRadius: number,
  minDistance = 0.024,
  maxDisplacement = 0.016
): Map<string, THREE.Vector3> {
  const houses = rawHouses.filter((h) => h && typeof h.latitude === 'number' && typeof h.longitude === 'number');
  const surfaceRadius = globeRadius + 0.005;
  const origPositions = houses.map((h) => latLongToVector3(h.latitude, h.longitude, surfaceRadius));
  const positions = origPositions.map((p) => p.clone());
  const n = positions.length;

  const iterations = 15;
  for (let iter = 0; iter < iterations; iter++) {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const p1 = positions[i];
        const p2 = positions[j];
        const d = p1.distanceTo(p2);

        if (d < minDistance) {
          let dir: THREE.Vector3;
          if (d < 0.0001) {
            // Coincident points: establish deterministic perpendicular tangent
            const norm = p1.clone().normalize();
            const up = Math.abs(norm.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
            dir = new THREE.Vector3().crossVectors(norm, up).normalize();
            dir.applyAxisAngle(norm, i * 17 + j * 23);
          } else {
            dir = p2.clone().sub(p1).divideScalar(d);
          }

          const overlap = (minDistance - d) * 0.5;
          p1.addScaledVector(dir, -overlap);
          p2.addScaledVector(dir, overlap);

          // Strictly clamp drift to stay firmly on land in their actual location
          [i, j].forEach((idx) => {
            positions[idx].normalize().multiplyScalar(surfaceRadius);
            const drift = positions[idx].distanceTo(origPositions[idx]);
            if (drift > maxDisplacement) {
              const driftDir = positions[idx].clone().sub(origPositions[idx]).normalize();
              positions[idx].copy(origPositions[idx]).addScaledVector(driftDir, maxDisplacement);
              positions[idx].normalize().multiplyScalar(surfaceRadius);
            }
          });
        }
      }
    }
  }

  const positionMap = new Map<string, THREE.Vector3>();
  for (let i = 0; i < n; i++) {
    positionMap.set(houses[i].id, positions[i]);
  }

  return positionMap;
}
