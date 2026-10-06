import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { OperaHouse } from '../types/opera';
import { useOperaStore } from '../store/useOperaStore';
import { TierPinIcon } from './TierPinIcon';

export function latLongToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// ─────────────────────────────────────────────────────────────
// ELEGANT MAP PUSH PINS
// Classic brass needle with polished spherical pearl heads:
// • Tier 1: Large Imperial Gold pearl (#f59e0b)
// • Tier 2: Polished Sterling Silver pearl (#d8e2ec)
// • Tier 3: Crimson Ruby pearl (#dc2626)
// • Tier 4: Royal Sapphire pearl (#2563eb)
// ─────────────────────────────────────────────────────────────

interface LandmarkProps {
  house: OperaHouse;
  globeRadius: number;
}

export const PapercraftLandmark: React.FC<LandmarkProps> = ({ house, globeRadius }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const selectedHouseId = useOperaStore((state) => state.selectedHouseId);
  const setSelectedHouse = useOperaStore((state) => state.setSelectedHouse);
  const isSelected = selectedHouseId === house.id;

  const position = useMemo(
    () => latLongToVector3(house.latitude, house.longitude, globeRadius + 0.005),
    [house.latitude, house.longitude, globeRadius]
  );

  const { pinQuaternion, shadowQuaternion, normal } = useMemo(() => {
    const norm = position.clone().normalize();

    // Stand upright directly along the globe surface normal:
    // This places the pinhead directly above its true geographic coordinates
    // and prevents pins from leaning into neighboring cities or overlapping
    const pinQ = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), norm);

    // Shadow quaternion aligns circle normal with surface normal
    const shadowQ = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), norm);

    return { pinQuaternion: pinQ, shadowQuaternion: shadowQ, normal: norm };
  }, [position]);

  // Dynamic camera distance-scaled sizing:
  // When zoomed in close, pins scale down (0.95 - 1.1x) to stay refined and non-overlapping.
  // When zoomed out to global view, pins scale up (up to 2.5x) so they remain visible pearls across the globe.
  useFrame(({ camera, clock }) => {
    if (!groupRef.current) return;
    const dist = camera.position.distanceTo(position);
    const zoomFactor = THREE.MathUtils.clamp(0.65 + dist * 0.22, 0.95, 2.6);

    if (isSelected) {
      const pulse = 1.25 + Math.sin(clock.getElapsedTime() * 4) * 0.08;
      const s = zoomFactor * pulse;
      groupRef.current.scale.set(s, s, s);
    } else if (hovered) {
      const s = zoomFactor * 1.25;
      groupRef.current.scale.lerp(new THREE.Vector3(s, s, s), 0.2);
    } else {
      groupRef.current.scale.lerp(new THREE.Vector3(zoomFactor, zoomFactor, zoomFactor), 0.2);
    }
  });

  // Sleek, refined cartographic pin proportions (subtle and non-overlapping in Europe)
  const needleHeight = house.tier === 1 ? 0.027 : house.tier === 2 ? 0.022 : house.tier === 3 ? 0.017 : 0.019;
  const headRadius   = house.tier === 1 ? 0.0125 : house.tier === 2 ? 0.0108 : house.tier === 3 ? 0.0085 : 0.0090;
  const needleR      = house.tier === 1 ? 0.0014 : house.tier === 2 ? 0.0012 : 0.0009;

  // Luminous pearl head colors
  const headColor =
    house.tier === 1
      ? '#fbbf24' // Imperial Gold
      : house.tier === 2
      ? '#f8fafc' // Brilliant Sterling Platinum Silver
      : house.tier === 3
      ? '#ef4444' // Crimson Ruby
      : '#3b82f6'; // Royal Sapphire

  // Radiant base glow colors (stamped on the globe surface)
  const glowColor =
    house.tier === 1
      ? '#f59e0b'
      : house.tier === 2
      ? '#e2e8f0'
      : house.tier === 3
      ? '#f87171'
      : '#60a5fa';

  // Base emissive tint for self-illumination (prevents washed-out/black metallic appearance)
  const baseEmissive =
    house.tier === 1
      ? '#d97706'
      : house.tier === 2
      ? '#cbd5e1'
      : house.tier === 3
      ? '#991b1b'
      : '#1d4ed8';

  const baseEmissiveIntensity = house.tier === 2 ? 0.35 : 0.22;

  const headEmissive = isSelected
    ? (house.tier === 3 ? '#ff2222' : house.tier === 4 ? '#3b82f6' : house.tier === 2 ? '#ffffff' : '#fbbf24')
    : (hovered ? '#ffffff' : baseEmissive);

  const headEmissiveIntensity = isSelected ? 0.85 : hovered ? 0.5 : baseEmissiveIntensity;
  const tipY = needleHeight + headRadius;

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedHouse(house.id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      {/* 1. Luminous Base Grommet & Glow Ring on Globe Surface */}
      <group position={normal.clone().multiplyScalar(0.0020)} quaternion={shadowQuaternion}>
        {/* A. Soft Dark Shadow Disc: Grounds the pin and contrasts with white land or blue sea */}
        <mesh>
          <circleGeometry args={[headRadius * 1.9, 24]} />
          <meshBasicMaterial color="#050b14" transparent opacity={0.65} depthWrite={false} />
        </mesh>

        {/* B. Luminous Glow Ring: Vibrant halo in tier's distinctive color */}
        <mesh position={[0, 0, 0.0001]}>
          <ringGeometry args={[headRadius * 0.7, headRadius * 1.75, 24]} />
          <meshBasicMaterial
            color={glowColor}
            transparent
            opacity={house.tier === 2 ? 0.95 : 0.85}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* C. Crisp Dark Perimeter Ring: Distinct outer boundary */}
        <mesh position={[0, 0, 0.0002]}>
          <ringGeometry args={[headRadius * 1.7, headRadius * 1.9, 24]} />
          <meshBasicMaterial
            color="#050a12"
            transparent
            opacity={0.88}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* D. Center Metallic Puncture Grommet */}
        <mesh position={[0, 0, 0.0003]}>
          <ringGeometry args={[needleR * 0.8, headRadius * 0.7, 20]} />
          <meshBasicMaterial
            color={house.tier === 2 ? '#ffffff' : '#fbbf24'}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* 2. Upright Pin assembly: projects directly outward from surface */}
      <group quaternion={pinQuaternion}>
        {/* Generous invisible raycast pick-target: ensures clicks never miss even on small heads */}
        <mesh position={[0, tipY, 0]}>
          <sphereGeometry args={[Math.max(headRadius * 2.2, 0.024), 10, 10]} />
          <meshBasicMaterial visible={false} />
        </mesh>

        {/* Slender polished pin needle */}
        <mesh position={[0, needleHeight / 2, 0]}>
          <cylinderGeometry args={[needleR * 0.8, needleR, needleHeight, 8]} />
          <meshStandardMaterial
            color={house.tier === 2 ? '#e2e8f0' : '#d4af37'}
            metalness={0.45}
            roughness={0.22}
          />
        </mesh>

        {/* High-contrast collar flange under the pearl bead */}
        <mesh position={[0, needleHeight - 0.001, 0]}>
          <cylinderGeometry args={[headRadius * 0.55, headRadius * 0.35, 0.003, 8]} />
          <meshStandardMaterial
            color={house.tier === 2 ? '#1e293b' : '#78350f'}
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>

        {/* Inverted-Hull Dark Silhouette Outline around Pearl Head (crisp 1-pixel contrast border) */}
        <mesh position={[0, tipY, 0]}>
          <sphereGeometry args={[headRadius * 1.15, 18, 18]} />
          <meshBasicMaterial
            color="#080e18"
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>

        {/* Smooth spherical pearl head */}
        <mesh position={[0, tipY, 0]}>
          <sphereGeometry args={[headRadius, 20, 20]} />
          <meshStandardMaterial
            color={headColor}
            emissive={headEmissive}
            emissiveIntensity={headEmissiveIntensity}
            metalness={0.20}
            roughness={0.20}
          />
        </mesh>

        {/* Selected halo ring indicator */}
        {isSelected && (
          <mesh position={[0, tipY, 0]}>
            <ringGeometry args={[headRadius * 1.35, headRadius * 1.7, 24]} />
            <meshBasicMaterial
              color={house.tier === 2 ? '#ffffff' : house.tier === 1 ? '#fbbf24' : '#ffffff'}
              side={THREE.DoubleSide}
              transparent
              opacity={0.9}
            />
          </mesh>
        )}

        {/* Tooltip: ONLY shown on hover — clean typography, never intrusive */}
        {hovered && (
          <Html
            center
            zIndexRange={[100, 0]}
            position={[0, tipY + headRadius + 0.02, 0]}
            style={{ pointerEvents: 'none' }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '17px',
                whiteSpace: 'nowrap',
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'rgba(12, 17, 26, 0.97)',
                color: '#ffffff',
                border: `1.5px solid ${house.tier === 1 ? '#d4af37' : house.tier === 2 ? '#cbd5e1' : house.tier === 3 ? '#b91c1c' : '#2563eb'}`,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.85)',
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                userSelect: 'none',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              <TierPinIcon tier={house.tier} size={20} className="shrink-0 drop-shadow" />
              <span>{house.name}</span>
              <span
                style={{
                  fontSize: '16px',
                  color: house.tier === 2 ? '#cbd5e1' : '#f3c448',
                  fontFamily: "'Lora', 'Georgia', serif",
                  fontWeight: 600,
                  marginLeft: '4px',
                }}
              >
                ({house.city})
              </span>
            </div>
          </Html>
        )}
      </group>
    </group>
  );
};
