import React, { useEffect, useState, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { LineSegments2, LineMaterial, LineSegmentsGeometry } from 'three-stdlib';
import { latLongToVector3 } from './PapercraftLandmark';

interface CountryBordersProps {
  globeRadius: number;
}

export const CountryBorders: React.FC<CountryBordersProps> = ({ globeRadius }) => {
  const { size } = useThree();
  const [countryMesh, setCountryMesh] = useState<LineSegments2 | null>(null);
  const [stateMesh, setStateMesh] = useState<LineSegments2 | null>(null);
  const [lakeMesh, setLakeMesh] = useState<LineSegments2 | null>(null);

  const countryMatRef = useRef<LineMaterial | null>(null);
  const stateMatRef = useRef<LineMaterial | null>(null);
  const lakeMatRef = useRef<LineMaterial | null>(null);

  useEffect(() => {
    // Surface radius offset flush to smooth 256-segment sphere (eliminates chord parallax)
    const radius = globeRadius + 0.0006;

    const segKey = (lng1: number, lat1: number, lng2: number, lat2: number) => {
      const k1 = `${lng1.toFixed(3)},${lat1.toFixed(3)}`;
      const k2 = `${lng2.toFixed(3)},${lat2.toFixed(3)}`;
      return k1 < k2 ? `${k1}_${k2}` : `${k2}_${k1}`;
    };

    // 1. NATIONAL COUNTRY BOUNDARIES
    fetch('/data/ne_50m_countries.geojson')
      .then((res) => res.json())
      .then((geojson) => {
        const segmentSet = new Set<string>();
        const positions: number[] = [];

        geojson.features.forEach((feature: any) => {
          const geom = feature.geometry;
          if (!geom) return;

          const polyList =
            geom.type === 'Polygon'
              ? [geom.coordinates]
              : geom.type === 'MultiPolygon'
              ? geom.coordinates
              : [];

          polyList.forEach((poly: any) => {
            poly.forEach((ring: any) => {
              if (!ring || ring.length < 2) return;

              for (let i = 0; i < ring.length - 1; i++) {
                const [lng1, lat1] = ring[i];
                const [lng2, lat2] = ring[i + 1];

                const k = segKey(lng1, lat1, lng2, lat2);
                if (!segmentSet.has(k)) {
                  segmentSet.add(k);
                  const p1 = latLongToVector3(lat1, lng1, radius);
                  const p2 = latLongToVector3(lat2, lng2, radius);
                  positions.push(p1.x, p1.y, p1.z);
                  positions.push(p2.x, p2.y, p2.z);
                }
              }
            });
          });
        });

        const geo = new LineSegmentsGeometry();
        geo.setPositions(positions);

        const mat = new LineMaterial({
          color: 0x4a3720, // Warm antique bronze cartographic ink
          linewidth: 1.3,
          transparent: true,
          opacity: 0.8,
          depthWrite: false,
        });
        mat.resolution.set(size.width, size.height);
        countryMatRef.current = mat;

        setCountryMesh(new LineSegments2(geo, mat));
      })
      .catch((err) => console.warn('Could not load vector country borders:', err));

    // 2. STATE & PROVINCIAL BOUNDARIES (Lighter warm bronze / soft gray)
    fetch('/data/ne_50m_admin_1_states_provinces_lines.geojson')
      .then((res) => res.json())
      .then((geojson) => {
        const segmentSet = new Set<string>();
        const positions: number[] = [];

        geojson.features.forEach((feature: any) => {
          const geom = feature.geometry;
          if (!geom) return;

          // State boundaries only for United States and Canada (removes Russia, China, Brazil, etc.)
          const a3 = feature.properties?.ADM0_A3;
          const admName = feature.properties?.ADM0_NAME;
          if (a3 && a3 !== 'USA' && a3 !== 'CAN' && admName !== 'United States of America' && admName !== 'Canada') {
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

              const k = segKey(lng1, lat1, lng2, lat2);
              if (!segmentSet.has(k)) {
                segmentSet.add(k);
                const p1 = latLongToVector3(lat1, lng1, radius);
                const p2 = latLongToVector3(lat2, lng2, radius);
                positions.push(p1.x, p1.y, p1.z);
                positions.push(p2.x, p2.y, p2.z);
              }
            }
          });
        });

        const geo = new LineSegmentsGeometry();
        geo.setPositions(positions);

        const mat = new LineMaterial({
          color: 0x8f7862, // Lighter subtle warm brown / soft gray ink
          linewidth: 0.85, // Thinner than national borders
          transparent: true,
          opacity: 0.55,
          depthWrite: false,
        });
        mat.resolution.set(size.width, size.height);
        stateMatRef.current = mat;

        setStateMesh(new LineSegments2(geo, mat));
      })
      .catch((err) => console.warn('Could not load vector state borders:', err));

    // 3. GREAT LAKES & MAJOR INLAND BODIES OF WATER SHORELINES
    fetch('/data/ne_50m_lakes.geojson')
      .then((res) => res.json())
      .then((geojson) => {
        const segmentSet = new Set<string>();
        const positions: number[] = [];

        geojson.features.forEach((feature: any) => {
          const geom = feature.geometry;
          if (!geom) return;

          // Filter out river reservoirs or unnamed water features
          const fcla = feature.properties?.featurecla;
          const name = feature.properties?.name;
          if (fcla === 'Reservoir' || (name && name.toLowerCase().includes('reservoir'))) {
            return;
          }

          const polyList =
            geom.type === 'Polygon'
              ? [geom.coordinates]
              : geom.type === 'MultiPolygon'
              ? geom.coordinates
              : [];

          polyList.forEach((poly: any) => {
            poly.forEach((ring: any) => {
              if (!ring || ring.length < 2) return;

              for (let i = 0; i < ring.length - 1; i++) {
                const [lng1, lat1] = ring[i];
                const [lng2, lat2] = ring[i + 1];

                const k = segKey(lng1, lat1, lng2, lat2);
                if (!segmentSet.has(k)) {
                  segmentSet.add(k);
                  const p1 = latLongToVector3(lat1, lng1, radius);
                  const p2 = latLongToVector3(lat2, lng2, radius);
                  positions.push(p1.x, p1.y, p1.z);
                  positions.push(p2.x, p2.y, p2.z);
                }
              }
            });
          });
        });

        const geo = new LineSegmentsGeometry();
        geo.setPositions(positions);

        const mat = new LineMaterial({
          color: 0x3a4f66, // Nautical shoreline slate/sapphire ink
          linewidth: 1.0,
          transparent: true,
          opacity: 0.75,
          depthWrite: false,
        });
        mat.resolution.set(size.width, size.height);
        lakeMatRef.current = mat;

        setLakeMesh(new LineSegments2(geo, mat));
      })
      .catch((err) => console.warn('Could not load vector lake shorelines:', err));

    return () => {
      if (countryMesh) {
        countryMesh.geometry.dispose();
        (countryMesh.material as THREE.Material).dispose();
      }
      if (stateMesh) {
        stateMesh.geometry.dispose();
        (stateMesh.material as THREE.Material).dispose();
      }
      if (lakeMesh) {
        lakeMesh.geometry.dispose();
        (lakeMesh.material as THREE.Material).dispose();
      }
    };
  }, [globeRadius]);

  // Keep line material resolution in sync with screen size
  useFrame(() => {
    [countryMatRef, stateMatRef, lakeMatRef].forEach((matRef) => {
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
      {countryMesh && <primitive object={countryMesh} />}
      {stateMesh && <primitive object={stateMesh} />}
      {lakeMesh && <primitive object={lakeMesh} />}
    </group>
  );
};
