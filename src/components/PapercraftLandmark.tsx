import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { OperaHouse } from '../types/opera';
import { useOperaStore } from '../store/useOperaStore';

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
// • Tier 1: Large Imperial Gold pearl (#f3c448)
// • Tier 2: Warm Antique Brass pearl (#c9a13b)
// • Tier 3: Crimson Ruby pearl (#b91c1c)
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
    const worldUp = new THREE.Vector3(0, 1, 0);

    // East vector: points along latitude line in direction of increasing longitude (Screen Right)
    let east = new THREE.Vector3().crossVectors(worldUp, norm).normalize();
    if (east.lengthSq() < 0.001) east.set(1, 0, 0);

    // North vector: points along meridian toward North Pole (Screen Up)
    const north = new THREE.Vector3().crossVectors(norm, east).normalize();

    // Uniform 3D push-pin vector: slants UP (North) and to the RIGHT (East) while projecting outward from globe
    const pinAxis = new THREE.Vector3()
      .addScaledVector(east, 0.45)
      .addScaledVector(north, 0.45)
      .addScaledVector(norm, 0.77)
      .normalize();

    // Pin quaternion rotates default Y-up axis (0, 1, 0) to pinAxis
    const pinQ = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), pinAxis);

    // Shadow quaternion aligns circle normal (0, 0, 1) with surface normal
    const shadowQ = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), norm);

    return { pinQuaternion: pinQ, shadowQuaternion: shadowQ, normal: norm };
  }, [position]);

  // Subtle responsive bounce on selection or hover
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    if (isSelected) {
      const s = 1.08 + Math.sin(clock.getElapsedTime() * 3.5) * 0.04;
      groupRef.current.scale.set(s, s, s);
    } else if (hovered) {
      groupRef.current.scale.lerp(new THREE.Vector3(1.12, 1.12, 1.12), 0.15);
    } else {
      groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.15);
    }
  });

  // Pin geometry proportions across 4 tiers
  const needleHeight = house.tier === 1 ? 0.09 : house.tier === 2 ? 0.07 : house.tier === 3 ? 0.055 : 0.048;
  const headRadius   = house.tier === 1 ? 0.034 : house.tier === 2 ? 0.024 : house.tier === 3 ? 0.018 : 0.016;
  const needleR      = house.tier === 1 ? 0.0035 : house.tier === 2 ? 0.0028 : 0.0022;
  const headColor    = house.tier === 1 ? '#f3c448' : house.tier === 2 ? '#c9a13b' : house.tier === 3 ? '#b91c1c' : '#2563eb';
  const headEmissive = isSelected
    ? (house.tier === 3 ? '#ff3333' : house.tier === 4 ? '#60a5fa' : '#ffd54f')
    : '#000000';
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
      {/* 1. Subtle soft contact shadow flush on globe surface */}
      <mesh position={normal.clone().multiplyScalar(0.0015)} quaternion={shadowQuaternion}>
        <circleGeometry args={[headRadius * 0.75, 20]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.14} depthWrite={false} />
      </mesh>

      {/* 2. Slanted Pin assembly: uniform UP-and-to-the-RIGHT orientation everywhere */}
      <group quaternion={pinQuaternion}>
        {/* Slender polished brass pin needle */}
        <mesh position={[0, needleHeight / 2, 0]}>
          <cylinderGeometry args={[needleR * 0.7, needleR, needleHeight, 8]} />
          <meshStandardMaterial color="#c59b27" metalness={0.85} roughness={0.2} />
        </mesh>

        {/* Small brass collar flange under the pearl bead */}
        <mesh position={[0, needleHeight - 0.002, 0]}>
          <cylinderGeometry args={[headRadius * 0.45, headRadius * 0.3, 0.005, 8]} />
          <meshStandardMaterial color="#b8860b" metalness={0.9} roughness={0.25} />
        </mesh>

        {/* Smooth spherical pearl head */}
        <mesh position={[0, tipY, 0]}>
          <sphereGeometry args={[headRadius, 20, 20]} />
          <meshStandardMaterial
            color={headColor}
            emissive={headEmissive}
            emissiveIntensity={isSelected ? 0.55 : 0}
            metalness={house.tier === 3 ? 0.25 : house.tier === 4 ? 0.35 : 0.85}
            roughness={house.tier === 3 ? 0.15 : house.tier === 4 ? 0.16 : 0.18}
          />
        </mesh>

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
                fontSize: '15px',
                whiteSpace: 'nowrap',
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'rgba(12, 17, 26, 0.97)',
                color: '#ffffff',
                border: `1.5px solid ${house.tier === 1 ? '#d4af37' : house.tier === 2 ? '#c59b27' : house.tier === 3 ? '#b91c1c' : '#2563eb'}`,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.85)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                userSelect: 'none',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              <span style={{ fontSize: '16px' }}>
                {house.tier === 1 ? '🏛️' : house.tier === 2 ? '🎭' : house.tier === 3 ? '🎪' : '💎'}
              </span>
              <span>{house.name}</span>
              <span
                style={{
                  fontSize: '14px',
                  color: '#f3c448',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
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
