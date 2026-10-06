import React, { useEffect } from 'react';
import { X, Compass, Landmark, Music } from 'lucide-react';
import { TierPinIcon } from './TierPinIcon';

interface AtlasInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  tierCounts: {
    1: number;
    2: number;
    3: number;
    4: number;
  };
}

export const AtlasInfoModal: React.FC<AtlasInfoModalProps> = ({
  isOpen,
  onClose,
  tierCounts,
}) => {
  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md select-none font-serif overflow-y-auto cursor-default"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      onPointerDown={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        className="pointer-events-auto relative w-full max-w-5xl 2xl:max-w-6xl rounded-xl border border-amber-500/60 bg-[#101927] p-5 md:p-6 shadow-2xl text-slate-100 max-h-[92vh] overflow-y-auto my-auto z-50"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.95), 0 0 40px rgba(212, 175, 55, 0.2)',
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-amber-900/60 pb-3.5 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/70 bg-gradient-to-br from-[#8d1720] to-[#5a0d15] text-amber-200 shadow-lg shrink-0">
              <Compass className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <h2 className="font-cinzel text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300">
                Atlas Guide & Tier Classification
              </h2>
              <p className="text-xs md:text-sm text-amber-200 font-garamond font-medium mt-0.5">
                Cartographic Criteria, Historical Context & Navigation
              </p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white transition cursor-pointer border border-slate-700/80 bg-slate-900/80 shrink-0 shadow"
            title="Close guide (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-4 text-left">
          {/* Top Row: About the Map & Navigation Tips Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Overview */}
            <div className="bg-[#142033] border border-slate-700/70 p-3.5 rounded-lg space-y-1.5 flex flex-col justify-center">
              <h3 className="font-cinzel text-sm md:text-base font-bold text-amber-300 flex items-center gap-2">
                <Landmark className="h-4.5 w-4.5 text-amber-400" /> About The World of Opera
              </h3>
              <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed font-garamond">
                An illustrated cartography of historical opera houses and landmark world premieres spanning 1585 to the modern era across 39 countries. Every venue is located at its verified geographic coordinates and classified into four distinct architectural and institutional tiers.
              </p>
            </div>

            {/* Navigation Tips */}
            <div className="bg-[#142033] border border-slate-700/70 p-3.5 rounded-lg space-y-1.5 flex flex-col justify-center">
              <h3 className="font-cinzel text-sm md:text-base font-bold text-amber-300 flex items-center gap-2">
                <Music className="h-4.5 w-4.5 text-amber-400" /> Navigation & Search Tips
              </h3>
              <ul className="text-sm md:text-[15px] text-slate-200 space-y-1 font-garamond list-disc list-inside">
                <li>
                  <strong className="text-amber-200">Globe Navigation:</strong> Drag to rotate, scroll to zoom. Pins scale dynamically with luminous base rings.
                </li>
                <li>
                  <strong className="text-amber-200">Venue Dossiers:</strong> Click any pin or directory entry to inspect architectural specs and world premieres.
                </li>
                <li>
                  <strong className="text-amber-200">Composer Search:</strong> Search by composer ("Verdi", "Wagner", "Puccini", "Mozart") to locate premiere houses.
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: 4-Tier Classification Grid (2x2) */}
          <div className="space-y-2">
            <h3 className="font-cinzel text-xs md:text-sm font-bold text-amber-300 uppercase tracking-wider px-0.5">
              The 4-Tier Cartographic Classification System
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Tier 1 */}
              <div className="bg-[#131e30] border border-amber-500/50 p-3.5 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2.5 font-cinzel font-bold text-base text-amber-300">
                  <TierPinIcon tier={1} className="w-5 h-5 shrink-0" />
                  <span>Tier 1: Global Premier Opera Houses ({tierCounts[1]})</span>
                </div>
                <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed font-garamond">
                  International flagship institutions with massive global footprints, star rosters, and historic supremacy. These stages shaped the canonical operatic repertory with world premieres by Verdi, Puccini, Wagner, Mozart, Rossini, and Strauss.
                </p>
              </div>

              {/* Tier 2 */}
              <div className="bg-[#131e30] border border-slate-600/80 p-3.5 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2.5 font-cinzel font-bold text-base text-slate-200">
                  <TierPinIcon tier={2} className="w-5 h-5 shrink-0" />
                  <span>Tier 2: Major Metropolitan & National Houses ({tierCounts[2]})</span>
                </div>
                <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed font-garamond">
                  Foremost civic, state, and national opera houses with year-round resident companies, dedicated pit orchestras, and world-class repertory seasons across major cultural capitals.
                </p>
              </div>

              {/* Tier 3 */}
              <div className="bg-[#131e30] border border-red-500/50 p-3.5 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2.5 font-cinzel font-bold text-base text-red-300">
                  <TierPinIcon tier={3} className="w-5 h-5 shrink-0" />
                  <span>Tier 3: Boutique Stages & Renowned Festivals ({tierCounts[3]})</span>
                </div>
                <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed font-garamond">
                  High-standard professional companies in intimate historic jewel boxes and dedicated seasonal destination festivals featuring specialized acoustical environments and bespoke festival stagings.
                </p>
              </div>

              {/* Tier 4 */}
              <div className="bg-[#131e30] border border-blue-500/50 p-3.5 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2.5 font-cinzel font-bold text-base text-blue-300">
                  <TierPinIcon tier={4} className="w-5 h-5 shrink-0" />
                  <span>Tier 4: Historic Royal Court Theatres ({tierCounts[4]})</span>
                </div>
                <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed font-garamond">
                  Intact 16th- to 18th-century royal, princely, and imperial court theatres preserved with original historical stage machinery, wooden fly towers, and magnificent baroque or Renaissance acoustics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
