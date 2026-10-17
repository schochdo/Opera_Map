import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { OperaHouse } from '../types/opera';
import { useOperaStore } from '../store/useOperaStore';
export { latLongToVector3 } from '../utils/globeCoordinates';
import { latLongToVector3 } from '../utils/globeCoordinates';

// ─────────────────────────────────────────────────────────────
// ELEGANT MAP PUSH PINS
// Classic brass needle with polished spherical pearl heads:
// • Tier 1: Large Imperial Gold pearl (#f59e0b)
// • Tier 2: Polished Sterling Silver pearl (#d8e2ec)
// • Tier 3: Crimson Ruby pearl (#dc2626)
// • Tier 4: Royal Sapphire pearl (#2563eb)
// ─────────────────────────────────────────────────────────────

const US_STATE_MAP: Record<string, string> = {
  Aspen: 'Aspen, CO',
  'Central City': 'Central City, CO',
  Denver: 'Denver, CO',
  Vail: 'Vail, CO',
  'Santa Fe': 'Santa Fe, NM',
  'New York': 'New York, NY',
  'Brooklyn (New York City)': 'Brooklyn, NY',
  Cooperstown: 'Cooperstown, NY',
  Chautauqua: 'Chautauqua, NY',
  Chicago: 'Chicago, IL',
  'San Francisco': 'San Francisco, CA',
  'Los Angeles': 'Los Angeles, CA',
  'San Jose': 'San Jose, CA',
  Philadelphia: 'Philadelphia, PA',
  Pittsburgh: 'Pittsburgh, PA',
  'Washington, D.C.': 'Washington, DC',
  Cincinnati: 'Cincinnati, OH',
  'Minneapolis / St. Paul': 'Minneapolis, MN',
  Houston: 'Houston, TX',
  Dallas: 'Dallas, TX',
  'Fort Worth': 'Fort Worth, TX',
  Seattle: 'Seattle, WA',
  Miami: 'Miami, FL',
  Sarasota: 'Sarasota, FL',
  'New Orleans': 'New Orleans, LA',
  Detroit: 'Detroit, MI',
  'Lenox / Stockbridge': 'Lenox, MA',
  Boston: 'Boston, MA',
  Vienna: 'Vienna, VA',
  Charleston: 'Charleston, SC',
  'St. Louis': 'St. Louis, MO',
  'Indianola / Des Moines': 'Des Moines, IA',
  Baltimore: 'Baltimore, MD',
  'Norfolk / Richmond': 'Norfolk, VA',
  Louisville: 'Louisville, KY',
  Boise: 'Boise, ID',
  'Salt Lake City': 'Salt Lake City, UT',
  'Kansas City': 'Kansas City, MO',
  Wichita: 'Wichita, KS',
  'Phoenix & Tucson': 'Phoenix, AZ',
  Portland: 'Portland, OR',
  Bozeman: 'Bozeman, MT',
  Omaha: 'Omaha, NE',
  Atlanta: 'Atlanta, GA',
  Milwaukee: 'Milwaukee, WI',
  Madison: 'Madison, WI',
  Charlotte: 'Charlotte, NC',
  Honolulu: 'Honolulu, HI',
  Anchorage: 'Anchorage, AK',
  'Long Beach': 'Long Beach, CA',
  Pasadena: 'Pasadena, CA',
  'Las Vegas': 'Las Vegas, NV',
  'San Diego': 'San Diego, CA',
  Austin: 'Austin, TX',
};

function formatHoverLabel(name: string, city: string, country: string) {
  // Strip trailing parenthetical company or theatre names for concise hover card
  let primaryName = name;
  const parenMatch = name.match(/^(.*?)\s*\((.*?)\)$/);
  if (parenMatch) {
    primaryName = parenMatch[1].trim();
  }

  let location = '';
  if (country === 'USA' || country === 'United States') {
    location = US_STATE_MAP[city] || `${city}, USA`;
  } else {
    location = `${city}, ${country}`;
  }

  return { primaryName, location };
}

interface LandmarkProps {
  house: OperaHouse;
  globeRadius: number;
  positionOverride?: THREE.Vector3;
}

export const GlobeLandmark: React.FC<LandmarkProps> = ({
  house,
  globeRadius,
  positionOverride,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const pinGroupRef = useRef<THREE.Group>(null);
  const selectedHouseId = useOperaStore((state) => state.selectedHouseId);
  const hoveredHouseId = useOperaStore((state) => state.hoveredHouseId);
  const setSelectedHouse = useOperaStore((state) => state.setSelectedHouse);
  const setHoveredHouse = useOperaStore((state) => state.setHoveredHouse);
  const isSelected = selectedHouseId === house.id;
  const isHovered = hoveredHouseId === house.id;

  const { primaryName, location } = useMemo(
    () => formatHoverLabel(house.name, house.city, house.country),
    [house.name, house.city, house.country]
  );

  const basePosition = useMemo(() => {
    if (positionOverride) return positionOverride;
    return latLongToVector3(house.latitude, house.longitude, globeRadius + 0.005);
  }, [house.latitude, house.longitude, globeRadius, positionOverride]);

  const { shadowQuaternion, normal, pinQuaternion } = useMemo(() => {
    const norm = basePosition.clone().normalize();
    const shadowQ = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), norm);
    const pinQ = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), norm);
    return { shadowQuaternion: shadowQ, normal: norm, pinQuaternion: pinQ };
  }, [basePosition]);

  // Dynamic camera distance-scaled sizing and smooth in-place hover feedback (zero heap allocation)
  useFrame(({ camera, clock }) => {
    if (!groupRef.current) return;

    const dist = camera.position.distanceTo(basePosition);
    const zoomFactor = THREE.MathUtils.clamp(0.42 + dist * 0.18, 0.88, 2.25);

    if (isSelected) {
      const pulse = 1.25 + Math.sin(clock.getElapsedTime() * 4) * 0.08;
      const s = zoomFactor * pulse;
      groupRef.current.scale.set(s, s, s);
    } else {
      const targetS = isHovered ? zoomFactor * 1.18 : zoomFactor;
      const currentS = groupRef.current.scale.x;
      const nextS = THREE.MathUtils.lerp(currentS, targetS, 0.25);
      groupRef.current.scale.set(nextS, nextS, nextS);
    }
  });

  // Sleek, refined cartographic pin proportions
  const needleHeight = house.tier === 1 ? 0.027 : house.tier === 2 ? 0.022 : house.tier === 3 ? 0.019 : house.tier === 4 ? 0.018 : 0.019;
  const headRadius   = house.tier === 1 ? 0.0125 : house.tier === 2 ? 0.0108 : house.tier === 3 ? 0.0098 : house.tier === 4 ? 0.0090 : 0.0090;
  const needleR      = house.tier === 1 ? 0.0014 : house.tier === 2 ? 0.0012 : 0.0009;

  // Luminous pearl head colors — NEVER pure white, retaining rich operatic palette
  const headColor =
    house.tier === 1
      ? (isSelected ? '#f59e0b' : isHovered ? '#fbbf24' : '#f59e0b') // Imperial Gold
      : house.tier === 2
      ? (isSelected ? '#ef4444' : isHovered ? '#f87171' : '#dc2626') // Crimson Ruby (Major Metropolitan)
      : house.tier === 3
      ? (isSelected ? '#22c55e' : isHovered ? '#4ade80' : '#16a34a') // Emerald Green (Summer Festivals)
      : house.tier === 4
      ? (isSelected ? '#38bdf8' : isHovered ? '#7dd3fc' : '#0284c7') // Cerulean Steel (Regional & Chamber Operas)
      : (isSelected ? '#a855f7' : isHovered ? '#c084fc' : '#9333ea'); // Imperial Purple (Historic & Royal Court)

  // Distinctive emissive glow that stays vibrant and never bleaches into white
  const headEmissive = isSelected
    ? (house.tier === 1
        ? '#b45309' // Rich warm golden fire
        : house.tier === 2
        ? '#dc2626' // Vivid crimson ruby
        : house.tier === 3
        ? '#16a34a' // Radiant emerald
        : house.tier === 4
        ? '#0284c7' // Cerulean azure
        : '#9333ea') // Imperial purple
    : (isHovered
        ? (house.tier === 1 ? '#d97706' : house.tier === 2 ? '#ef4444' : house.tier === 3 ? '#22c55e' : house.tier === 4 ? '#38bdf8' : '#a855f7')
        : (house.tier === 1 ? '#d97706' : house.tier === 2 ? '#991b1b' : house.tier === 3 ? '#15803d' : house.tier === 4 ? '#075985' : '#6b21a8'));

  const headEmissiveIntensity = isSelected ? 0.65 : isHovered ? 0.45 : 0.25;
  const tipY = needleHeight + headRadius;

  return (
    <group
      ref={groupRef}
      position={basePosition}
      onPointerDown={(e) => {
        e.stopPropagation();
      }}
      onPointerUp={(e) => {
        e.stopPropagation();
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedHouse(house.id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHoveredHouse(house.id);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        if (useOperaStore.getState().hoveredHouseId === house.id) {
          setHoveredHouse(null);
        }
        document.body.style.cursor = 'auto';
      }}
    >
      {/* 1. Grounded needle puncture point on globe surface (zero rings, clean pinpoint) */}
      <mesh position={normal.clone().multiplyScalar(0.001)} quaternion={shadowQuaternion}>
        <circleGeometry args={[needleR * 1.2, 10]} />
        <meshBasicMaterial color="#020408" transparent opacity={0.4} depthWrite={false} />
      </mesh>

      {/* 2. Upright Pin assembly: projects directly outward from surface */}
      <group ref={pinGroupRef} quaternion={pinQuaternion}>
        {/* Generous unified invisible raycast pick-target */}
        <mesh position={[0, tipY * 0.6, 0]}>
          <cylinderGeometry args={[headRadius * 2.2, headRadius * 2.2, tipY * 1.35, 8]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>

        {/* Slender pin needle (soft satin finish) */}
        <mesh position={[0, needleHeight / 2, 0]}>
          <cylinderGeometry args={[needleR * 0.8, needleR, needleHeight, 8]} />
          <meshStandardMaterial
            color={house.tier === 2 ? '#cbd5e1' : '#d4af37'}
            metalness={0.25}
            roughness={0.45}
          />
        </mesh>

        {/* Dark contrast collar beneath Tier 2 pearl: guarantees edge definition against continents */}
        {house.tier === 2 && (
          <mesh position={[0, tipY - headRadius * 0.45, 0]}>
            <cylinderGeometry args={[headRadius * 0.85, headRadius * 0.95, headRadius * 0.25, 16]} />
            <meshStandardMaterial color="#0f172a" metalness={0.3} roughness={0.5} />
          </mesh>
        )}

        {/* Refined satin pearl head: reduced glossiness, softer organic specular sheen */}
        <mesh position={[0, tipY, 0]}>
          <sphereGeometry args={[headRadius, 24, 24]} />
          <meshStandardMaterial
            color={headColor}
            emissive={headEmissive}
            emissiveIntensity={headEmissiveIntensity * 0.65}
            metalness={0.15}
            roughness={0.52}
          />
        </mesh>

        {/* Luminous orbital selection halo: clearly identifies the active pin without washing it out */}
        {isSelected && (
          <mesh position={[0, tipY, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[headRadius * 1.35, headRadius * 1.75, 32]} />
            <meshBasicMaterial
              color={
                house.tier === 1
                  ? '#f59e0b'
                  : house.tier === 2
                  ? '#dc2626'
                  : house.tier === 3
                  ? '#16a34a'
                  : house.tier === 4
                  ? '#0284c7'
                  : '#9333ea'
              }
              side={THREE.DoubleSide}
              transparent
              opacity={0.88}
              depthWrite={false}
            />
          </mesh>
        )}

        {/* Tooltip: ONLY shown on hover — strictly single active tooltip globally */}
        {isHovered && (
          <Html
            center
            zIndexRange={[100, 0]}
            position={[0, tipY + headRadius + 0.024, 0]}
            style={{ pointerEvents: 'none' }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                padding: '8px 14px',
                borderRadius: '8px',
                background: 'rgba(12, 17, 26, 0.96)',
                backdropFilter: 'blur(8px)',
                border: `1.5px solid ${
                  house.tier === 1
                    ? '#d4af37'
                    : house.tier === 2
                    ? '#dc2626'
                    : house.tier === 3
                    ? '#16a34a'
                    : house.tier === 4
                    ? '#0284c7'
                    : '#9333ea'
                }`,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.85)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                userSelect: 'none',
                width: 'max-content',
                maxWidth: '270px',
                boxSizing: 'border-box',
              }}
            >
              {/* Line 1: Primary Venue Name (No pin icon, clean wrap, no overflow) */}
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  lineHeight: '1.25',
                  textAlign: 'center',
                  wordBreak: 'break-word',
                }}
              >
                {primaryName}
              </div>

              {/* Line 2: Location (e.g. Aspen, CO or New York, NY) */}
              <div
                style={{
                  fontFamily: "'Lora', 'Georgia', serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color:
                    house.tier === 1
                      ? '#f3c448'
                      : house.tier === 2
                      ? '#fca5a5'
                      : house.tier === 3
                      ? '#86efac'
                      : house.tier === 4
                      ? '#7dd3fc'
                      : '#d8b4fe',
                  marginTop: '3px',
                  lineHeight: '1.2',
                  textAlign: 'center',
                  wordBreak: 'break-word',
                }}
              >
                {location}
              </div>

              {/* Line 3: Heritage status badge if lost site or historic monument */}
              {house.buildingStatus === 'DEMOLISHED_LOST_SITE' && (
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: '#fbbf24',
                    marginTop: '5px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  🏛️ Lost Landmark • Demolished {house.demolishedYear}
                </div>
              )}
              {house.buildingStatus === 'HISTORIC_MONUMENT' && (
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: '#93c5fd',
                    marginTop: '5px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  🏰 Historic Palace Monument
                </div>
              )}
            </div>
          </Html>
        )}
      </group>
    </group>
  );
};
