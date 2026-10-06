import React from 'react';

export const VelvetTheatreStage: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* 1. DEEP THEATRICAL STAGE AMBIENCE (Clean obsidian stage, non-brown) */}
      <div className="absolute inset-0 bg-[#090b10]" />

      {/* 2. BRILLIANT OVERHEAD SPOTLIGHT CONE ON THE GLOBE */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 48%, rgba(255, 250, 235, 0.22) 0%, rgba(185, 28, 40, 0.08) 50%, rgba(9, 11, 16, 0.96) 100%)',
        }}
      />

      {/* 3. LEFT DRAPED VELVET CURTAIN (Vibrant Royal Crimson) */}
      <div className="absolute top-0 bottom-0 left-0 w-32 md:w-56 pointer-events-none">
        <div
          className="h-full w-full opacity-95 shadow-[15px_0_35px_rgba(0,0,0,0.85)]"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              #5c0d16 0px,
              #8e1624 16px,
              #b91c2c 28px,
              #78111c 44px,
              #38060c 60px
            )`,
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
          }}
        />
        {/* Soft shadow drape overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/75" />
      </div>

      {/* 4. RIGHT DRAPED VELVET CURTAIN (Vibrant Royal Crimson) */}
      <div className="absolute top-0 bottom-0 right-0 w-32 md:w-56 pointer-events-none">
        <div
          className="h-full w-full opacity-95 shadow-[-15px_0_35px_rgba(0,0,0,0.85)]"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              #38060c 0px,
              #78111c 16px,
              #b91c2c 32px,
              #8e1624 44px,
              #5c0d16 60px
            )`,
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
          }}
        />
        {/* Soft shadow drape overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-black/75" />
      </div>

      {/* 5. TOP THEATRE VALANCE / SWAG WITH GOLD BRAID TRIM */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-20 pointer-events-none z-10">
        <div
          className="h-full w-full shadow-[0_12px_25px_rgba(0,0,0,0.9)]"
          style={{
            background: `repeating-linear-gradient(
              180deg,
              #6b0f1b 0px,
              #9e1a29 12px,
              #480811 24px
            )`,
            clipPath:
              'polygon(0 0, 100% 0, 100% 70%, 80% 88%, 50% 65%, 20% 88%, 0 70%)',
          }}
        />
        {/* Delicate Gold Braid Fringe Line */}
        <div className="absolute bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e5c158] to-transparent opacity-90" />
      </div>

      {/* 6. SUBTLE FOOTLIGHTS AT STAGE PROSCENIUM BASE */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#120306] to-transparent opacity-90" />
      <div className="absolute bottom-1 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent blur-[1px]" />
    </div>
  );
};
