import React, { useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { useOperaStore } from '../store/useOperaStore';
import {
  buildContinentsGeometry,
  buildLakesGeometry,
} from '../utils/globeVectorGeometry';
import { fetchCountriesGeoJSON, fetchLakesGeoJSON } from '../utils/globeGeoJsonLoader';
import { createPapierMacheTextures } from '../utils/paperTexture';

interface GlobeContinentsProps {
  globeRadius: number;
}

export const GlobeContinents: React.FC<GlobeContinentsProps> = ({ globeRadius }) => {
  const houses = useOperaStore((state) => state.houses);
  const setIsLandLoaded = useOperaStore((state) => state.setIsLandLoaded);
  const [continentsGeo, setContinentsGeo] = useState<THREE.BufferGeometry | null>(null);
  const [lakesGeo, setLakesGeo] = useState<THREE.BufferGeometry | null>(null);

  // High-tactile papier-mâché material textures (Style 1)
  const { paperTexture, paperBumpMap } = useMemo(() => createPapierMacheTextures(), []);

  useEffect(() => {
    let isMounted = true;
    const rContinent = globeRadius + 0.0016;
    const rLake = globeRadius + 0.0022;

    Promise.all([
      fetchCountriesGeoJSON(),
      fetchLakesGeoJSON(),
    ]).then(([countriesGeojson, lakesGeojson]) => {
      if (!isMounted) return;

      if (countriesGeojson) {
        const geo = buildContinentsGeometry(countriesGeojson, houses, rContinent);
        setContinentsGeo(geo);
        setIsLandLoaded(true);
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
  }, [globeRadius, houses, setIsLandLoaded]);

  return (
    <group>
      {/* 1. Tactile 3D Papier-Mâché Continents Mesh */}
      {continentsGeo && (
        <mesh geometry={continentsGeo}>
          <meshStandardMaterial
            map={paperTexture}
            bumpMap={paperBumpMap}
            bumpScale={0.022}
            color="#f7f2e5"
            roughness={0.88}
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
