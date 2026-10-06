import React from 'react';
import { useOperaStore, TierFilterType } from '../store/useOperaStore';
import {
  ExternalLink,
  X,
  Building,
  Search,
  Landmark,
  Users,
  Compass,
  Sparkles,
  Music,
  Calendar,
} from 'lucide-react';

export const OperaUIOverlay: React.FC = () => {
  const {
    houses,
    selectedHouseId,
    setSelectedHouse,
    tierFilter,
    setTierFilter,
    searchQuery,
    setSearchQuery,
    getFilteredHouses,
    isAutoRotating,
    toggleAutoRotate,
  } = useOperaStore();

  const filteredHouses = getFilteredHouses();
  const selectedHouse = houses.find((h) => h.id === selectedHouseId);

  const panelBg = {
    backgroundColor: 'rgba(12, 17, 26, 0.96)',
    borderColor: 'rgba(212, 175, 55, 0.4)',
  };

  const tierCounts = {
    ALL: houses.length,
    1: houses.filter((h) => h.tier === 1).length,
    2: houses.filter((h) => h.tier === 2).length,
    3: houses.filter((h) => h.tier === 3).length,
    4: houses.filter((h) => h.tier === 4).length,
  };

  const tierButtonConfig: { id: TierFilterType; label: string; icon: string; count: number }[] = [
    { id: 'ALL', label: 'All', icon: '🌐', count: tierCounts.ALL },
    { id: 1, label: 'T1: Premier', icon: '🏛️', count: tierCounts[1] },
    { id: 2, label: 'T2: Regional', icon: '🎭', count: tierCounts[2] },
    { id: 3, label: 'T3: Festivals', icon: '🎪', count: tierCounts[3] },
    { id: 4, label: 'T4: Historic', icon: '💎', count: tierCounts[4] },
  ];

  const getTierBadgeText = (tier: number) => {
    switch (tier) {
      case 1:
        return '🏛️ TIER 1: PREMIER OPERA HOUSE';
      case 2:
        return '🎭 TIER 2: REGIONAL OPERA HOUSE';
      case 3:
        return '🎪 TIER 3: FESTIVAL STAGE';
      case 4:
        return '💎 TIER 4: HISTORIC GEM';
      default:
        return 'OPERA HOUSE';
    }
  };

  const getTierShortLabel = (tier: number) => {
    switch (tier) {
      case 1:
        return 'T1 Premier';
      case 2:
        return 'T2 Regional';
      case 3:
        return 'T3 Festival';
      case 4:
        return 'T4 Historic';
      default:
        return '';
    }
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between select-none font-serif overflow-hidden">
      {/* ------------------------------------------------------------- */}
      {/* 1. TOP HEADER: FLUSH ACROSS TOP, LEFT, AND RIGHT EDGES        */}
      {/* ------------------------------------------------------------- */}
      <header
        className="pointer-events-auto flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/40 px-6 py-3.5 shadow-2xl backdrop-blur-md shrink-0 w-full z-30"
        style={panelBg}
      >
        <div className="flex items-center space-x-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-500/70 bg-gradient-to-br from-[#8d1720] to-[#5a0d15] text-amber-200 shadow-lg text-2xl">
            <span>🎭</span>
          </div>
          <div>
            <h1 className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.16em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300">
              The World of Opera
            </h1>
            <p className="text-sm md:text-[15px] tracking-wide text-amber-200/90 font-garamond italic font-medium mt-0.5">
              An Illustrated Cartography of Historical Opera Houses & Landmark Premieres
            </p>
          </div>
        </div>

        {/* Global Summary Badge */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-amber-600/50 bg-[#090d14]/90 px-4 py-2 text-sm font-cinzel text-amber-200 shadow-inner">
            <span className="text-amber-400 font-bold">48 Venues</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">24 Countries</span>
            <span className="text-slate-500">•</span>
            <span className="text-amber-300/90 font-garamond italic text-[15px]">1585–Modern Era</span>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 2. MAIN BODY: SIDEBARS FLUSH TO SIDES AND HEADER              */}
      {/* ------------------------------------------------------------- */}
      <div className="relative flex flex-1 items-stretch justify-between pointer-events-none min-h-0 w-full overflow-hidden">
        {/* LEFT SIDEBAR: DIRECTORY (Flush against left edge and header) */}
        <aside
          className="pointer-events-auto flex w-96 flex-col space-y-3.5 border-r border-amber-500/40 p-5 shadow-2xl backdrop-blur-md min-h-0 overflow-hidden h-full z-20"
          style={panelBg}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-amber-900/50 pb-2.5 shrink-0">
            <h2 className="font-cinzel text-base font-bold tracking-wider text-amber-300 uppercase flex items-center gap-2">
              <Building className="h-4 w-4 text-amber-300" /> Opera Directory
            </h2>
            <span className="text-xs md:text-sm font-cinzel font-bold text-amber-200 bg-[#121824] px-3 py-1 rounded border border-slate-700">
              {filteredHouses.length} / {houses.length} Houses
            </span>
          </div>

          {/* Search Box */}
          <div className="relative shrink-0">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search house, city, composer, premiere..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-amber-700/60 bg-[#0a0e14] pl-9 pr-8 py-2 text-sm md:text-[15px] text-slate-100 placeholder-slate-400 focus:border-amber-400 focus:outline-none shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200 text-sm cursor-pointer"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Strict Tier Filter Buttons (All, T1, T2, T3, T4) */}
          <div className="space-y-1.5 shrink-0">
            <div className="text-xs font-cinzel font-bold text-amber-300/80 tracking-wider uppercase px-0.5">
              Filter By Classification:
            </div>
            <div className="grid grid-cols-5 gap-1 shrink-0">
              {tierButtonConfig.map(({ id, label, icon, count }) => {
                const isActive = tierFilter === id;
                return (
                  <button
                    key={String(id)}
                    onClick={() => setTierFilter(id)}
                    className={`py-2 px-1 text-xs md:text-[13px] rounded border transition-all text-center cursor-pointer font-cinzel flex flex-col items-center justify-center gap-0.5 ${
                      isActive
                        ? 'bg-gradient-to-b from-[#8d1720] to-[#5a0d15] text-amber-100 border-amber-400 font-bold shadow-md ring-1 ring-amber-400/50'
                        : 'bg-[#0a0e14] text-slate-300 border-slate-700/80 hover:text-amber-200 hover:border-amber-600/50 font-medium'
                    }`}
                    title={`Filter by ${label}`}
                  >
                    <span className="text-sm">{icon}</span>
                    <span className="leading-tight truncate w-full text-center">{label}</span>
                    <span className="text-[11px] opacity-80">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scrollable List of Opera Houses */}
          <div className="flex-1 space-y-2 overflow-y-auto pr-1 min-h-0">
            {filteredHouses.length > 0 ? (
              filteredHouses.map((house) => {
                const isSelected = selectedHouseId === house.id;

                // Check if search query matches any historic premiere
                const matchedPremiere = searchQuery.trim()
                  ? house.historicPremieres?.find(
                      (p) =>
                        p.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                        p.composer.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                        p.details?.toLowerCase().includes(searchQuery.toLowerCase().trim())
                    )
                  : null;

                const tierLabel = getTierShortLabel(house.tier);

                return (
                  <div
                    key={house.id}
                    onClick={() => setSelectedHouse(house.id)}
                    className={`cursor-pointer rounded-lg border p-3 transition-all duration-150 ${
                      isSelected
                        ? 'border-amber-400 bg-gradient-to-r from-[#8d1720]/45 to-[#121824] shadow-md'
                        : 'border-slate-800 bg-[#0a0e14]/85 hover:border-amber-500/50 hover:bg-[#121824]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1.5">
                      <h4 className="font-cinzel text-sm md:text-[15px] font-bold text-amber-100 leading-snug">
                        {house.name}
                      </h4>
                      <span className="text-xs font-cinzel font-bold text-amber-300/90 bg-[#16202e] px-2 py-0.5 rounded border border-slate-700 shrink-0">
                        {tierLabel}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-1.5 text-xs md:text-sm text-amber-200/90 font-garamond italic font-medium">
                      <span>
                        {house.city}, {house.country}{' '}
                        {house.inauguratedYear && `• Est. ${house.inauguratedYear}`}
                      </span>
                      <a
                        href={house.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs font-cinzel text-amber-300 hover:text-amber-100 hover:underline shrink-0 ml-2 not-italic font-bold"
                        title={`Open official box office portal for ${house.name}`}
                      >
                        Portal <ExternalLink className="h-3 w-3 text-amber-300" />
                      </a>
                    </div>

                    {/* Matched Premiere Badge */}
                    {matchedPremiere && (
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded bg-[#7a101b]/80 border border-amber-500/50 px-2.5 py-1 text-xs md:text-[13px] text-amber-100 font-cinzel font-semibold">
                        <span>🎵 {matchedPremiere.title} ({matchedPremiere.premiereYear}) — {matchedPremiere.composer}</span>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-sm md:text-[15px] text-slate-400 italic py-8 text-center">
                No opera houses match your current search or tier filter.
              </p>
            )}
          </div>
        </aside>

        {/* RIGHT SIDEBAR: DOSSIER & PROFILE (Flush against right edge and header) */}
        <aside
          className="pointer-events-auto flex w-[440px] md:w-[480px] flex-col border-l border-amber-500/40 p-5 md:p-6 shadow-2xl backdrop-blur-md min-h-0 overflow-hidden h-full z-20"
          style={panelBg}
        >
          {selectedHouse ? (
            /* ------------------------------------------------------------- */
            /* BESPOKE OPERA HOUSE PROFILE & HISTORICAL DOSSIER             */
            /* ------------------------------------------------------------- */
            <div className="flex flex-col h-full min-h-0 space-y-3.5">
              {/* Header with Official Website Link */}
              <div className="relative border-b-2 border-dashed border-amber-900/60 pb-3.5 shrink-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center gap-1.5 rounded bg-[#7a101b] px-2.5 py-1 text-xs md:text-sm font-cinzel font-bold tracking-wider text-amber-100 border border-amber-500/50">
                      {getTierBadgeText(selectedHouse.tier)}
                    </span>
                    <h2 className="font-cinzel text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 mt-1.5 leading-snug">
                      {selectedHouse.name}
                    </h2>
                    <p className="text-sm md:text-[15px] text-amber-300/90 font-garamond italic font-semibold mt-0.5">
                      {selectedHouse.city}, {selectedHouse.country}
                    </p>
                  </div>

                  {/* Header Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={selectedHouse.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/80 bg-gradient-to-r from-[#7a101b] to-[#921422] px-3 py-1.5 text-xs md:text-sm font-cinzel font-bold text-amber-100 hover:from-[#8f1522] hover:to-[#a41727] transition shadow cursor-pointer"
                      title="Open official website in new tab"
                    >
                      <span>Website</span>
                      <ExternalLink className="h-3.5 w-3.5 text-amber-200" />
                    </a>
                    <button
                      onClick={() => setSelectedHouse(null)}
                      className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-amber-200 transition cursor-pointer"
                      title="Close dossier"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Verified Architectural & Structural Specs */}
              <div className="grid grid-cols-2 gap-2.5 text-sm shrink-0">
                {selectedHouse.inauguratedYear && (
                  <div className="bg-[#0a0e14]/90 border border-slate-700/80 p-2.5 rounded-lg flex items-center gap-2.5">
                    <Calendar className="h-4 w-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-cinzel font-semibold text-slate-400 uppercase tracking-wider">
                        Inaugurated
                      </div>
                      <div className="font-bold text-sm md:text-base text-slate-100 mt-0.5">
                        {selectedHouse.inauguratedYear}
                      </div>
                    </div>
                  </div>
                )}
                {selectedHouse.capacity && (
                  <div className="bg-[#0a0e14]/90 border border-slate-700/80 p-2.5 rounded-lg flex items-center gap-2.5">
                    <Users className="h-4 w-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-cinzel font-semibold text-slate-400 uppercase tracking-wider">
                        Capacity
                      </div>
                      <div className="font-bold text-sm md:text-base text-slate-100 mt-0.5">
                        {selectedHouse.capacity}
                      </div>
                    </div>
                  </div>
                )}
                {selectedHouse.architect && (
                  <div className="bg-[#0a0e14]/90 border border-slate-700/80 p-2.5 rounded-lg flex items-center gap-2.5 col-span-2">
                    <Landmark className="h-4 w-4 text-amber-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-cinzel font-semibold text-slate-400 uppercase tracking-wider">
                        Architect & Style
                      </div>
                      <div className="font-bold text-sm md:text-[15px] text-slate-100 mt-0.5 truncate">
                        {selectedHouse.architect} {selectedHouse.architecturalStyle ? `• ${selectedHouse.architecturalStyle}` : ''}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Scrollable Content: Description, Heritage & Verified World Premieres */}
              <div className="flex-1 space-y-3.5 overflow-y-auto pr-1 min-h-0">
                {/* Description */}
                <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed font-garamond italic bg-[#0a0e14]/70 border border-slate-800/80 p-3 rounded-lg">
                  "{selectedHouse.description}"
                </p>

                {/* Historic Legacy & Significance */}
                {selectedHouse.historicSignificance && (
                  <div className="text-xs md:text-sm text-amber-100/95 bg-[#121824]/85 border border-amber-900/50 p-3 rounded-lg leading-relaxed">
                    <span className="font-cinzel font-bold text-amber-300 block mb-1">
                      Historic Significance & Heritage:
                    </span>
                    <span>{selectedHouse.historicSignificance}</span>
                  </div>
                )}

                {/* 100% Verified World Premieres & Landmark Milestones */}
                {selectedHouse.historicPremieres && selectedHouse.historicPremieres.length > 0 && (
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-cinzel text-xs md:text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                        <Music className="h-4 w-4 text-amber-400" /> Landmark World Premieres & Milestones
                      </h3>
                      <span className="text-xs md:text-sm text-amber-300/80 font-garamond italic font-semibold">
                        Historical Archives
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {selectedHouse.historicPremieres.map((premiere, idx) => (
                        <div
                          key={idx}
                          className="bg-[#0a0e14]/95 border border-slate-700/80 p-3 rounded-lg hover:border-amber-500/50 transition"
                        >
                          <div className="flex items-start justify-between gap-1.5">
                            <h4 className="font-cinzel text-sm md:text-[15px] font-bold text-amber-100">
                              {premiere.title}
                            </h4>
                            <span className="text-xs font-cinzel font-bold text-amber-300 bg-[#1a2332] px-2 py-0.5 rounded border border-slate-700 shrink-0">
                              {premiere.premiereYear}
                            </span>
                          </div>
                          <p className="text-xs md:text-sm text-amber-300/90 font-garamond italic font-medium mt-1">
                            Composer: {premiere.composer}
                          </p>
                          {premiere.type && (
                            <div className="mt-1">
                              <span className="text-[11px] font-cinzel tracking-wider px-1.5 py-0.5 rounded bg-amber-900/40 text-amber-200 border border-amber-700/50 uppercase font-semibold">
                                {premiere.type.replace('_', ' ')}
                              </span>
                            </div>
                          )}
                          {premiere.details && (
                            <p className="text-xs md:text-sm text-amber-200/80 font-garamond italic mt-1.5 leading-normal">
                              • {premiere.details}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pinned Bottom Portal Button */}
              <div className="pt-2.5 border-t border-slate-800 shrink-0">
                <a
                  href={selectedHouse.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-amber-500 bg-gradient-to-r from-[#7a101b] to-[#921422] py-2.5 text-xs md:text-sm font-cinzel font-bold tracking-wider text-amber-100 shadow-md hover:from-[#8f1522] hover:to-[#a41727] transition cursor-pointer"
                >
                  Visit Official Box Office & Season Portal <ExternalLink className="h-4 w-4 text-amber-200" />
                </a>
              </div>
            </div>
          ) : (
            /* ------------------------------------------------------------- */
            /* GLOBAL OPERA OVERVIEW (Empty State)                           */
            /* ------------------------------------------------------------- */
            <div className="flex flex-col h-full space-y-4 justify-between overflow-y-auto pr-1">
              <div>
                <div className="border-b border-amber-900/50 pb-2.5">
                  <h2 className="font-cinzel text-base font-bold tracking-wider text-amber-300 uppercase flex items-center gap-2">
                    <Compass className="h-4 w-4 text-amber-300" /> The World of Opera
                  </h2>
                  <p className="text-sm md:text-[15px] text-slate-300 font-garamond italic mt-1">
                    Select any pin on the globe or browse the directory to inspect architectural dossiers, landmark world premieres, and historical milestones.
                  </p>
                </div>

                <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-300">
                  <div className="bg-[#0a0e14]/85 border border-slate-700/80 p-3.5 rounded-lg space-y-1.5">
                    <div className="flex items-center gap-2 font-cinzel font-bold text-sm md:text-[15px] text-amber-300">
                      <span className="text-base">🏛️</span>
                      <span>Tier 1: Premier Opera Houses (20)</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-garamond">
                      World-leading institutions with resident orchestras, international prestige, and renowned staging traditions (e.g. La Scala, Wiener Staatsoper, Opéra Garnier, The Met, Royal Opera House).
                    </p>
                  </div>

                  <div className="bg-[#0a0e14]/85 border border-slate-700/80 p-3.5 rounded-lg space-y-1.5">
                    <div className="flex items-center gap-2 font-cinzel font-bold text-sm md:text-[15px] text-amber-200">
                      <span className="text-base">🎭</span>
                      <span>Tier 2: Major Regional Theatres (12)</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-garamond">
                      Distinguished civic and national opera houses with vibrant regional traditions and acclaimed repertoire (e.g. Théâtre des Champs-Élysées, Sydney Opera House, Teatro Regio di Torino).
                    </p>
                  </div>

                  <div className="bg-[#0a0e14]/85 border border-slate-700/80 p-3.5 rounded-lg space-y-1.5">
                    <div className="flex items-center gap-2 font-cinzel font-bold text-sm md:text-[15px] text-red-300">
                      <span className="text-base">🎪</span>
                      <span>Tier 3: Iconic Festival Stages (4)</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-garamond">
                      Dedicated pilgrimage festival theatres with celebrated summer seasons (Bayreuth Festspielhaus, Glyndebourne, Arena di Verona, Bregenzer Festspiele).
                    </p>
                  </div>

                  <div className="bg-[#0a0e14]/85 border border-slate-700/80 p-3.5 rounded-lg space-y-1.5">
                    <div className="flex items-center gap-2 font-cinzel font-bold text-sm md:text-[15px] text-blue-300">
                      <span className="text-base">💎</span>
                      <span>Tier 4: Historic & Architectural Gems (12)</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-garamond">
                      Incomparable heritage marvels of extraordinary musicological and acoustic renown (Teatro Olimpico, Drottningholm Court Theatre, Margravial Opera House, Teatro Amazonas).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#090d14] border border-amber-900/60 p-3.5 rounded-lg text-center text-xs md:text-sm text-slate-300 font-garamond italic shrink-0">
                Tip: Search for composers such as "Verdi", "Puccini", "Wagner", or "Mozart" to find where their masterworks first premiered.
              </div>
            </div>
          )}
        </aside>

        {/* ------------------------------------------------------------- */}
        {/* 3. CENTER BOTTOM CONTROLS: FLOATING PROSCENIUM CONTROL BAR     */}
        {/* ------------------------------------------------------------- */}
        <footer className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3.5 px-5 py-2 rounded-full border border-amber-600/60 bg-[#090d14]/95 shadow-2xl backdrop-blur-md text-xs md:text-sm font-cinzel text-amber-200/90 z-20">
          <span className="drop-shadow-md">
            {filteredHouses.length} OPERA HOUSES DISPLAYED • DRAG GLOBE TO ROTATE
          </span>
          <div className="h-3.5 w-[1px] bg-amber-500/40" />
          <button
            onClick={toggleAutoRotate}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#16202e] border border-amber-600/70 text-amber-200 hover:bg-[#1e2c40] hover:text-amber-100 transition shadow cursor-pointer font-bold"
          >
            <span>{isAutoRotating ? '⏸' : '▶'}</span>
            <span>{isAutoRotating ? 'Auto-Rotate: On' : 'Paused'}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
