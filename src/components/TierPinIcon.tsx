import React from 'react';

interface TierPinIconProps {
  tier: number;
  size?: number | string;
  className?: string;
  title?: string;
}

export const TierPinIcon: React.FC<TierPinIconProps> = ({
  tier,
  size,
  className = 'w-6 h-6',
  title,
}) => {
  // Color specifications for each tier's push pin
  const getTierPinTheme = (t: number) => {
    switch (t) {
      case 1:
        return {
          id: 'tier1',
          name: 'Imperial Gold Pin',
          stop0: '#fffbeb',
          stop1: '#fef08a',
          stop2: '#f59e0b',
          stop3: '#92400e',
          outline: '#78350f',
          collarFill: '#d97706',
          collarStroke: '#78350f',
          specularOpacity: 0.8,
        };
      case 2:
        return {
          id: 'tier2',
          name: 'Sterling Silver Pin',
          stop0: '#ffffff',
          stop1: '#e2e8f0',
          stop2: '#cbd5e1',
          stop3: '#475569',
          outline: '#334155',
          collarFill: '#94a3b8',
          collarStroke: '#334155',
          specularOpacity: 0.9,
        };
      case 3:
        return {
          id: 'tier3',
          name: 'Crimson Ruby Pin',
          stop0: '#fee2e2',
          stop1: '#f87171',
          stop2: '#dc2626',
          stop3: '#7f1d1d',
          outline: '#450a0a',
          collarFill: '#b91c1c',
          collarStroke: '#450a0a',
          specularOpacity: 0.75,
        };
      case 4:
      default:
        return {
          id: 'tier4',
          name: 'Royal Sapphire Pin',
          stop0: '#dbeafe',
          stop1: '#60a5fa',
          stop2: '#2563eb',
          stop3: '#1e3a8a',
          outline: '#0f172a',
          collarFill: '#1d4ed8',
          collarStroke: '#0f172a',
          specularOpacity: 0.75,
        };
    }
  };

  const theme = getTierPinTheme(tier);
  const gradId = `pin-head-grad-${theme.id}`;
  const needleGradId = 'pin-needle-steel-grad';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none shrink-0 ${className}`}
      role="img"
      aria-label={title || theme.name}
    >
      {title && <title>{title}</title>}
      <defs>
        {/* Radial highlight for spherical pearl bead */}
        <radialGradient id={gradId} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor={theme.stop0} />
          <stop offset="25%" stopColor={theme.stop1} />
          <stop offset="65%" stopColor={theme.stop2} />
          <stop offset="100%" stopColor={theme.stop3} />
        </radialGradient>

        {/* Polished steel needle gradient */}
        <linearGradient id={needleGradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="50%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>

      {/* 1. Tapered Needle Shaft */}
      <path
        d="M12 14L12 22.5"
        stroke={`url(#${needleGradId})`}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* 2. Metallic Collar Flange */}
      <ellipse
        cx="12"
        cy="14"
        rx="3.2"
        ry="1.2"
        fill={theme.collarFill}
        stroke={theme.collarStroke}
        strokeWidth="0.6"
      />

      {/* 3. Spherical Pearl Head */}
      <circle
        cx="12"
        cy="8.2"
        r="6.4"
        fill={`url(#${gradId})`}
        stroke={theme.outline}
        strokeWidth="0.8"
      />

      {/* 4. Specular Highlight Glare */}
      <circle
        cx="9.8"
        cy="6"
        r="1.8"
        fill="#ffffff"
        opacity={theme.specularOpacity}
      />
    </svg>
  );
};
