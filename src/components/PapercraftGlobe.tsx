import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useOperaStore } from '../store/useOperaStore';
import { PapercraftLandmark } from './PapercraftLandmark';
import { CountryBorders } from './CountryBorders';
import { createPapercraftGlobeTexture } from '../utils/papercraftGlobeTexture';

const GLOBE_RADIUS = 3.2;

export const PapercraftGlobe: React.FC = () => {
  const globeGroupRef = useRef<THREE.Group>(null);
  const selectedTiers = useOperaStore((state) => state.selectedTiers);
  const searchQuery = useOperaStore((state) => state.searchQuery);
  const houses = useOperaStore((state) => state.houses);
  const getFilteredHouses = useOperaStore((state) => state.getFilteredHouses);
  const filteredHouses = useMemo(
    () => getFilteredHouses(),
    [getFilteredHouses, selectedTiers, searchQuery, houses]
  );

  // Create papercraft parchment globe texture with continents and vintage typography
  const globeTexture = useMemo(() => {
    return createPapercraftGlobeTexture();
  }, []);

  // Fine equator surface line geometry
  const equatorGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 180;
    const r = GLOBE_RADIUS + 0.002;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(r * Math.cos(theta), 0, r * Math.sin(theta)));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <group ref={globeGroupRef}>
      {/* 3D Papercraft Globe Sphere with Textured Continents (256x256 segments, evenly illuminated) */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 256, 256]} />
        <meshStandardMaterial
          map={globeTexture}
          roughness={0.65}
          metalness={0.02}
        />
      </mesh>

      {/* Crisp Equator Line on Surface */}
      <lineLoop geometry={equatorGeometry}>
        <lineBasicMaterial color="#d4af37" transparent opacity={0.55} depthWrite={false} />
      </lineLoop>

      {/* 3D Vector Country Borders (Razor-sharp country outlines) */}
      <CountryBorders globeRadius={GLOBE_RADIUS} />

      {/* Render Opera House Landmarks on Globe */}
      {filteredHouses.map((house) => (
        <PapercraftLandmark key={house.id} house={house} globeRadius={GLOBE_RADIUS} />
      ))}
    </group>
  );
};
