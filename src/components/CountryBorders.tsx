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
  const [lineMesh, setLineMesh] = useState<LineSegments2 | null>(null);
  const materialRef = useRef<LineMaterial | null>(null);

  useEffect(() => {
    // Surface radius offset to prevent z-fighting while staying tightly flush
    const radius = globeRadius + 0.003;

    fetch('/data/ne_50m_countries.geojson')
      .then((res) => res.json())
      .then((geojson) => {
        const segmentSet = new Set<string>();
        const positions: number[] = [];

        // Spatial deduplication key to ensure each border segment is rendered exactly once
        const segKey = (lng1: number, lat1: number, lng2: number, lat2: number) => {
          const k1 = `${lng1.toFixed(3)},${lat1.toFixed(3)}`;
          const k2 = `${lng2.toFixed(3)},${lat2.toFixed(3)}`;
          return k1 < k2 ? `${k1}_${k2}` : `${k2}_${k1}`;
        };

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

        // Single medium-width boundary line (warm antique bronze cartographic ink)
        const mat = new LineMaterial({
          color: 0x4a3720,
          linewidth: 1.8, // Crisp medium-width boundary line across all zooms
          transparent: true,
          opacity: 0.85,
          depthWrite: false,
        });
        mat.resolution.set(size.width, size.height);
        materialRef.current = mat;

        const mesh = new LineSegments2(geo, mat);
        setLineMesh(mesh);
      })
      .catch((err) => console.warn('Could not load vector country borders:', err));

    return () => {
      if (lineMesh) {
        lineMesh.geometry.dispose();
        (lineMesh.material as THREE.Material).dispose();
      }
    };
  }, [globeRadius]);

  // Keep line material resolution in sync with screen size
  useFrame(() => {
    if (materialRef.current) {
      if (
        materialRef.current.resolution.x !== size.width ||
        materialRef.current.resolution.y !== size.height
      ) {
        materialRef.current.resolution.set(size.width, size.height);
      }
    }
  });

  return lineMesh ? <primitive object={lineMesh} /> : null;
};
