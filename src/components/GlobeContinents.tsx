import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { useOperaStore } from '../store/useOperaStore';
import {
  buildContinentsGeometry,
  buildLakesGeometry,
} from '../utils/globeVectorGeometry';

interface GlobeContinentsProps {
  globeRadius: number;
}

export const GlobeContinents: React.FC<GlobeContinentsProps> = ({ globeRadius }) => {
  const houses = useOperaStore((state) => state.houses);
  const [continentsGeo, setContinentsGeo] = useState<THREE.BufferGeometry | null>(null);
  const [lakesGeo, setLakesGeo] = useState<THREE.BufferGeometry | null>(null);

  useEffect(() => {
    let isMounted = true;
    const rContinent = globeRadius + 0.0016;
    const rLake = globeRadius + 0.0022;

    Promise.all([
      fetch('/data/ne_50m_countries.geojson').then((res) => res.json()).catch(() => null),
      fetch('/data/ne_50m_lakes.geojson').then((res) => res.json()).catch(() => null),
    ]).then(([countriesGeojson, lakesGeojson]) => {
      if (!isMounted) return;

      if (countriesGeojson) {
        const geo = buildContinentsGeometry(countriesGeojson, houses, rContinent);
        setContinentsGeo(geo);
      }

      if (lakesGeojson) {
        const lGeo = buildLakesGeometry(lakesGeojson, rLake);
        setLakesGeo(lGeo);
      }
    });

    return () => {
      isMounted = false;
      if (continentsGeo) continentsGeo.dispose();
      if (lakesGeo) lakesGeo.dispose();
    };
  }, [globeRadius, houses]);

  return (
    <group>
      {/* 1. Luminous 3D Ivory Continents Mesh (Razor-sharp vector edges at all zoom levels) */}
      {continentsGeo && (
        <mesh geometry={continentsGeo}>
          <meshStandardMaterial
            color="#faf5ea"
            roughness={0.72}
            metalness={0.02}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* 2. Major Orienting Lakes (Great Lakes, Lake Geneva, etc.) */}
      {lakesGeo && (
        <mesh geometry={lakesGeo}>
          <meshStandardMaterial
            color="#2c4d6e"
            roughness={0.65}
            metalness={0.02}
            side={THREE.DoubleSide}
            polygonOffset={true}
            polygonOffsetFactor={-2}
            polygonOffsetUnits={-2}
          />
        </mesh>
      )}
    </group>
  );
};
