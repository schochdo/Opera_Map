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

  // Sleek, refined cartographic pin proportions (subtle and non-overlapping)
  const needleHeight = house.tier === 1 ? 0.026 : house.tier === 2 ? 0.020 : house.tier === 3 ? 0.016 : 0.018;
  const headRadius   = house.tier === 1 ? 0.0125 : house.tier === 2 ? 0.0095 : house.tier === 3 ? 0.008 : 0.0085;
  const needleR      = house.tier === 1 ? 0.0014 : house.tier === 2 ? 0.0011 : 0.0009;
  const headColor    = house.tier === 1 ? '#f59e0b' : house.tier === 2 ? '#d97706' : house.tier === 3 ? '#dc2626' : '#2563eb';
  const headEmissive = isSelected
    ? (house.tier === 3 ? '#ff2222' : house.tier === 4 ? '#3b82f6' : '#fbbf24')
    : (hovered ? '#ffffff' : '#000000');
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
        <circleGeometry args={[headRadius * 0.9, 16]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.22} depthWrite={false} />
      </mesh>

      {/* 2. Upright Pin assembly: projects directly outward from surface */}
      <group quaternion={pinQuaternion}>
        {/* Generous invisible raycast pick-target: ensures clicks never miss even on small heads */}
        <mesh position={[0, tipY, 0]}>
          <sphereGeometry args={[Math.max(headRadius * 2.2, 0.024), 10, 10]} />
          <meshBasicMaterial visible={false} />
        </mesh>

        {/* Slender polished brass pin needle */}
        <mesh position={[0, needleHeight / 2, 0]}>
          <cylinderGeometry args={[needleR * 0.8, needleR, needleHeight, 8]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Small brass collar flange under the pearl bead */}
        <mesh position={[0, needleHeight - 0.001, 0]}>
          <cylinderGeometry args={[headRadius * 0.5, headRadius * 0.35, 0.003, 8]} />
          <meshStandardMaterial color="#b8860b" metalness={0.92} roughness={0.2} />
        </mesh>

        {/* Smooth spherical pearl head */}
        <mesh position={[0, tipY, 0]}>
          <sphereGeometry args={[headRadius, 18, 18]} />
          <meshStandardMaterial
            color={headColor}
            emissive={headEmissive}
            emissiveIntensity={isSelected ? 0.75 : hovered ? 0.3 : 0}
            metalness={house.tier === 3 ? 0.2 : house.tier === 4 ? 0.3 : 0.85}
            roughness={house.tier === 3 ? 0.15 : house.tier === 4 ? 0.15 : 0.18}
          />
        </mesh>

        {/* Selected halo ring indicator */}
        {isSelected && (
          <mesh position={[0, tipY, 0]}>
            <ringGeometry args={[headRadius * 1.3, headRadius * 1.6, 24]} />
            <meshBasicMaterial
              color="#ffffff"
              side={THREE.DoubleSide}
              transparent
              opacity={0.8}
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
                border: `1.5px solid ${house.tier === 1 ? '#d4af37' : house.tier === 2 ? '#c59b27' : house.tier === 3 ? '#b91c1c' : '#2563eb'}`,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.85)',
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                userSelect: 'none',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              <span style={{ fontSize: '19px' }}>
                {house.tier === 1 ? '🏛️' : house.tier === 2 ? '🎭' : house.tier === 3 ? '🎪' : '👑'}
              </span>
              <span>{house.name}</span>
              <span
                style={{
                  fontSize: '16px',
                  color: '#f3c448',
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
