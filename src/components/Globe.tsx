import React, { useRef, useMemo, useState, useEffect } from 'react';
import type { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { useOperaStore } from '../store/useOperaStore';
import { GlobeLandmark } from './GlobeLandmark';
import { GlobeContinents } from './GlobeContinents';
import { CountryBorders } from './CountryBorders';
import { createGlobeTexture } from '../utils/globeTexture';
import { computeDispersedPositions } from '../utils/globeCoordinates';

const GLOBE_RADIUS = 3.2;

export const Globe: React.FC = () => {
  const globeGroupRef = useRef<THREE.Group>(null);
  const isLandLoaded = useOperaStore((state) => state.isLandLoaded);
  const selectedTiers = useOperaStore((state) => state.selectedTiers);
  const selectedEra = useOperaStore((state) => state.selectedEra);
  const selectedStyle = useOperaStore((state) => state.selectedStyle);
  const selectedArchitect = useOperaStore((state) => state.selectedArchitect);
  const selectedComposer = useOperaStore((state) => state.selectedComposer);
  const selectedPatronage = useOperaStore((state) => state.selectedPatronage);
  const searchQuery = useOperaStore((state) => state.searchQuery);
  const houses = useOperaStore((state) => state.houses);
  const hoveredHouseId = useOperaStore((state) => state.hoveredHouseId);
  const setHoveredHouse = useOperaStore((state) => state.setHoveredHouse);
  const setSelectedHouse = useOperaStore((state) => state.setSelectedHouse);
  const getFilteredHouses = useOperaStore((state) => state.getFilteredHouses);
  const filteredHouses = useMemo(
    () => getFilteredHouses(),
    [
      getFilteredHouses,
      selectedTiers,
      selectedEra,
      selectedStyle,
      selectedArchitect,
      selectedComposer,
      selectedPatronage,
      searchQuery,
      houses,
    ]
  );

  // Track pointer down coordinates to distinguish click-away deselect from drag/orbit rotations
  const pointerDownPosRef = useRef<{ x: number; y: number } | null>(null);

  const handleGlobePointerDown = (e: ThreeEvent<PointerEvent>) => {
    pointerDownPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleGlobePointerUp = (e: ThreeEvent<PointerEvent>) => {
    pointerDownPosRef.current = null;
  };

  const handleGlobeClick = (e: ThreeEvent<MouseEvent>) => {
    // e.delta is the screen distance moved between pointerdown and pointerup
    if (e.delta > 5) return;

    // Check if click on globe was within a forgiving distance of any visible pin
    if (e.point && filteredHouses.length > 0) {
      let closestHouseId: string | null = null;
      let minDistance = Infinity;

      for (const house of filteredHouses) {
        const pos = landmarkPositions.get(house.id);
        if (!pos) continue;
        const d = e.point.distanceTo(pos);
        if (d < minDistance) {
          minDistance = d;
          closestHouseId = house.id;
        }
      }

      // Forgiving radius: ~0.048 in 3D units (~15 pixels in screen space)
      if (closestHouseId && minDistance < 0.048) {
        setSelectedHouse(closestHouseId);
        return;
      }
    }

    setSelectedHouse(null);
  };

  const handleGlobePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (e.point && filteredHouses.length > 0) {
      let closestHouseId: string | null = null;
      let minDistance = Infinity;

      for (const house of filteredHouses) {
        const pos = landmarkPositions.get(house.id);
        if (!pos) continue;
        const d = e.point.distanceTo(pos);
        if (d < minDistance) {
          minDistance = d;
          closestHouseId = house.id;
        }
      }

      if (closestHouseId && minDistance < 0.042) {
        if (hoveredHouseId !== closestHouseId) {
          setHoveredHouse(closestHouseId);
        }
        document.body.style.cursor = 'pointer';
        return;
      }
    }

    if (hoveredHouseId !== null) {
      setHoveredHouse(null);
    }
    document.body.style.cursor = 'auto';
  };

  // Compute stable, accurate 3D positions with comfortable clearance (strictly on land at actual location, static and never jumping)
  const landmarkPositions = useMemo(() => {
    return computeDispersedPositions(houses, GLOBE_RADIUS, 0.024, 0.016);
  }, [houses]);

  // Create globe texture with continents and cartographic boundaries
  const globeTexture = useMemo(() => {
    return createGlobeTexture();
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

  // Ensure land masses render on screen FIRST before pins appear, completely preventing pins in the ocean
  const [pinsReady, setPinsReady] = useState(false);

  useEffect(() => {
    if (isLandLoaded) {
      const timer = setTimeout(() => {
        setPinsReady(true);
      }, 160);
      return () => clearTimeout(timer);
    } else {
      setPinsReady(false);
    }
  }, [isLandLoaded]);

  return (
    <group ref={globeGroupRef}>
      {/* 3D Globe Sphere with Textured Continents (128x128 segments, high performance & smooth surface) */}
      <mesh
        onPointerDown={handleGlobePointerDown}
        onPointerUp={handleGlobePointerUp}
        onClick={handleGlobeClick}
        onPointerMove={handleGlobePointerMove}
        onPointerLeave={() => {
          if (hoveredHouseId !== null) {
            setHoveredHouse(null);
          }
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[GLOBE_RADIUS, 128, 128]} />
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

      {/* 3D Vector Continents (Razor-sharp geometry edges at all zoom levels) */}
      <GlobeContinents globeRadius={GLOBE_RADIUS} />

      {/* 3D Vector Country Borders (Razor-sharp country outlines) */}
      <CountryBorders globeRadius={GLOBE_RADIUS} />

      {/* Render Opera House Landmarks on Globe ONLY after land is loaded and rendered */}
      {pinsReady &&
        filteredHouses.map((house) => (
          <GlobeLandmark
            key={house.id}
            house={house}
            globeRadius={GLOBE_RADIUS}
            positionOverride={landmarkPositions.get(house.id)}
          />
        ))}
    </group>
  );
};
