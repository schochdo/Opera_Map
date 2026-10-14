import React, { useState, useMemo, useEffect } from 'react';
import { useOperaStore, matchesSearchField } from '../store/useOperaStore';
import { TierPinIcon } from './TierPinIcon';
import { AtlasInfoModal } from './AtlasInfoModal';
import {
  HISTORICAL_ERAS,
  ARCHITECTURAL_STYLES,
  MASTER_ARCHITECTS,
  MAJOR_COMPOSERS,
  HistoricalEra,
  StyleCategory,
  getHouseEra,
  getHouseStyleCategory,
  getEraDefinition,
  getStyleDefinition,
  getMasterArchitect,
  getComposerFilter,
  getPatronageBadgeInfo,
  getPremiereBadgeInfo,
  houseHasComposerPremiere,
  matchesArchitectFilter,
} from '../utils/filterHelpers';
import { TheatricalDropdown, TheatricalDropdownOption } from './TheatricalDropdown';
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
  Info,
  Maximize,
  Minimize,
  Clock,
  Palette,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Filter,
  Layers,
  BookOpen,
} from 'lucide-react';

export const OperaUIOverlay: React.FC = () => {
  const {
    houses,
    selectedHouseId,
    setSelectedHouse,
    selectedTiers,
    toggleTier,
    selectAllTiers,
    clearAllTiers,
    selectedEra,
    setSelectedEra,
    selectedStyle,
    setSelectedStyle,
    selectedArchitect,
    setSelectedArchitect,
    selectedComposer,
    setSelectedComposer,
    resetAllFilters,
    searchQuery,
    setSearchQuery,
    getFilteredHouses,
    isAutoRotating,
    toggleAutoRotate,
  } = useOperaStore();

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFiltersPanel, setShowFiltersPanel] = useState(true);
  const [showTierFilters, setShowTierFilters] = useState(true);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as any;
      setIsFullscreen(Boolean(document.fullscreenElement || doc.webkitFullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Keyboard shortcut: Escape deselects the currently active pin and closes the dossier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedHouseId && !showInfoModal) {
        setSelectedHouse(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedHouseId, showInfoModal, setSelectedHouse]);

  const toggleFullscreen = async () => {
    try {
      const doc = document as any;
      const docEl = document.documentElement as any;
      if (!document.fullscreenElement && !doc.webkitFullscreenElement) {
        if (docEl.requestFullscreen) {
          await docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullscreen) {
          docEl.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen request error:', err);
    }
  };

  const filteredHouses = getFilteredHouses();
  const selectedHouse = houses.find((h) => h?.id === selectedHouseId);

  const worldPremieres = useMemo(() => {
    if (!selectedHouse?.historicPremieres) return [];
    return selectedHouse.historicPremieres.filter(Boolean);
  }, [selectedHouse]);

  const panelBg = {
    backgroundColor: 'rgba(22, 35, 54, 0.96)',
    borderColor: 'rgba(212, 175, 55, 0.55)',
  };

  const tierCounts = {
    ALL: houses.filter(Boolean).length,
    1: houses.filter((h) => h?.tier === 1).length,
    2: houses.filter((h) => h?.tier === 2).length,
    3: houses.filter((h) => h?.tier === 3).length,
    4: houses.filter((h) => h?.tier === 4).length,
    5: houses.filter((h) => h?.tier === 5).length,
  };

  const tierConfigs = [
    {
      id: 1,
      label: 'Global Premier',
      count: tierCounts[1],
    },
    {
      id: 2,
      label: 'Major Metropolitan',
      count: tierCounts[2],
    },
    {
      id: 3,
      label: 'Summer Festivals',
      count: tierCounts[3],
    },
    {
      id: 4,
      label: 'Regional & Chamber Operas',
      count: tierCounts[4],
    },
    {
      id: 5,
      label: 'Historic & Royal Court',
      count: tierCounts[5],
    },
  ];

  const eraCounts = useMemo(() => {
    const counts: Record<HistoricalEra, number> = {
      ALL: houses.length,
      ANTIQUITY: 0,
      RENAISSANCE_17TH: 0,
      '18TH_CENTURY': 0,
      '19TH_CENTURY': 0,
      '20TH_CENTURY': 0,
      '21ST_CENTURY': 0,
    };
    houses.forEach((h) => {
      if (!h) return;
      const era = getHouseEra(h);
      if (counts[era] !== undefined) counts[era]++;
    });
    return counts;
  }, [houses]);

  const styleCounts = useMemo(() => {
    const counts: Record<StyleCategory, number> = {
      ALL: houses.length,
      ANCIENT_AMPHITHEATER: 0,
      BAROQUE_ROCOCO: 0,
      NEOCLASSICAL_BEAUXARTS: 0,
      ART_NOUVEAU_DECO: 0,
      MODERNIST_POSTWAR: 0,
      CONTEMPORARY_TENTS: 0,
      FRONTIER_LEGACY_HOUSE: 0,
    };
    houses.forEach((h) => {
      if (!h) return;
      const s = getHouseStyleCategory(h);
      if (counts[s] !== undefined) counts[s]++;
    });
    return counts;
  }, [houses]);

  const composerCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    MAJOR_COMPOSERS.forEach((c) => {
      counts[c.id] =
        c.id === 'ALL'
          ? houses.length
          : houses.filter((h) => houseHasComposerPremiere(h, c.id)).length;
    });
    return counts;
  }, [houses]);

  const architectCounts = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: houses.length,
    };
    MASTER_ARCHITECTS.forEach((arch) => {
      counts[arch.id] = houses.filter((h) => matchesArchitectFilter(h, arch.id)).length;
    });
    return counts;
  }, [houses]);

  const eraOptions: TheatricalDropdownOption[] = useMemo(() => {
    return HISTORICAL_ERAS.map((era) => ({
      value: era.id,
      label: era.shortLabel,
      count: era.id !== 'ALL' ? eraCounts[era.id] : houses.length,
    }));
  }, [eraCounts, houses.length]);

  const composerOptions: TheatricalDropdownOption[] = useMemo(() => {
    return MAJOR_COMPOSERS.map((comp) => ({
      value: comp.id,
      label: comp.name,
      count: comp.id !== 'ALL' ? (composerCounts[comp.id] || 0) : houses.length,
    }));
  }, [composerCounts, houses.length]);

  const styleOptions: TheatricalDropdownOption[] = useMemo(() => {
    return ARCHITECTURAL_STYLES.map((style) => ({
      value: style.id,
      label: style.id === 'ALL' ? 'All Styles' : style.label,
      count: style.id !== 'ALL' ? styleCounts[style.id] : houses.length,
    }));
  }, [styleCounts, houses.length]);

  const architectOptions: TheatricalDropdownOption[] = useMemo(() => {
    return [
      {
        value: 'ALL',
        label: 'All Architects',
        count: houses.length,
      },
      ...MASTER_ARCHITECTS.map((arch) => ({
        value: arch.id,
        label: arch.name,
        count: architectCounts[arch.id] || 0,
      })),
    ];
  }, [architectCounts, houses.length]);

  const hasActiveFilters = useMemo(() => {
    return (
      selectedEra !== 'ALL' ||
      selectedStyle !== 'ALL' ||
      selectedArchitect !== 'ALL' ||
      selectedComposer !== 'ALL' ||
      selectedTiers.length < 5 ||
      Boolean(searchQuery.trim())
    );
  }, [selectedEra, selectedStyle, selectedArchitect, selectedComposer, selectedTiers, searchQuery]);

  const getTierBadgeText = (tier: number) => {
    switch (tier) {
      case 1:
        return 'GLOBAL PREMIER OPERA HOUSE';
      case 2:
        return 'MAJOR METROPOLITAN & NATIONAL HOUSE';
      case 3:
        return 'SUMMER FESTIVAL VENUE';
      case 4:
        return 'REGIONAL & CHAMBER OPERAS';
      case 5:
        return 'HISTORIC & ROYAL COURT THEATRE';
      default:
        return 'OPERA HOUSE';
    }
  };

  const getTierShortLabel = (tier: number) => {
    switch (tier) {
      case 1:
        return 'Global Premier';
      case 2:
        return 'Metropolitan';
      case 3:
        return 'Summer Festival';
      case 4:
        return 'Regional & Chamber Operas';
      case 5:
        return 'Historic & Royal Court';
      default:
        return '';
    }
  };

  const getCardBorderClass = (tier: number, isSelected: boolean) => {
    if (isSelected) {
      switch (tier) {
        case 1:
          return 'border-amber-400 border-l-[4px] border-l-amber-300 bg-gradient-to-r from-[#8d1720]/80 to-[#1f3049] shadow-md ring-1 ring-amber-400/60';
        case 2:
          return 'border-red-400 border-l-[4px] border-l-red-300 bg-gradient-to-r from-[#8d1720]/80 to-[#1f3049] shadow-md ring-1 ring-red-400/60';
        case 3:
          return 'border-emerald-400 border-l-[4px] border-l-emerald-300 bg-gradient-to-r from-[#8d1720]/80 to-[#1f3049] shadow-md ring-1 ring-emerald-400/60';
        case 4:
          return 'border-sky-400 border-l-[4px] border-l-sky-300 bg-gradient-to-r from-[#8d1720]/80 to-[#1f3049] shadow-md ring-1 ring-sky-400/60';
        case 5:
          return 'border-purple-400 border-l-[4px] border-l-purple-300 bg-gradient-to-r from-[#8d1720]/80 to-[#1f3049] shadow-md ring-1 ring-purple-400/60';
        default:
          return 'border-amber-400 bg-gradient-to-r from-[#8d1720]/80 to-[#1f3049] shadow-md';
      }
    }

    switch (tier) {
      case 1:
        return 'border-amber-500/50 border-l-[4px] border-l-amber-400 bg-[#1a2940]/95 hover:border-amber-400 hover:bg-[#223552]';
      case 2:
        return 'border-red-500/50 border-l-[4px] border-l-red-500 bg-[#1a2940]/95 hover:border-red-400 hover:bg-[#223552]';
      case 3:
        return 'border-emerald-500/50 border-l-[4px] border-l-emerald-400 bg-[#1a2940]/95 hover:border-emerald-400 hover:bg-[#223552]';
      case 4:
        return 'border-sky-500/50 border-l-[4px] border-l-sky-400 bg-[#1a2940]/95 hover:border-sky-400 hover:bg-[#223552]';
      case 5:
        return 'border-purple-500/50 border-l-[4px] border-l-purple-400 bg-[#1a2940]/95 hover:border-purple-300 hover:bg-[#223552]';
      default:
        return 'border-slate-700/80 bg-[#1a2940]/95 hover:border-slate-500 hover:bg-[#223552]';
    }
  };

  const getDossierTierBadgeClass = (tier: number) => {
    switch (tier) {
      case 1:
        return 'bg-gradient-to-r from-[#7a101b] to-[#5a0d15] text-amber-100 border-amber-400/80 shadow-sm';
      case 2:
        return 'bg-gradient-to-r from-red-950 to-[#4a080e] text-red-100 border-red-500/80 shadow-sm';
      case 3:
        return 'bg-gradient-to-r from-emerald-950 to-[#064e3b] text-emerald-100 border-emerald-400/80 shadow-sm';
      case 4:
        return 'bg-gradient-to-r from-sky-950 to-[#082f49] text-sky-100 border-sky-400/80 shadow-sm';
      case 5:
        return 'bg-gradient-to-r from-purple-950 to-[#3b0764] text-purple-100 border-purple-400/80 shadow-sm';
      default:
        return 'bg-slate-800 text-slate-100 border-slate-600';
    }
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between select-none font-serif overflow-hidden">
      {/* ------------------------------------------------------------- */}
      {/* 1. TOP HEADER: FLUSH ACROSS TOP, LEFT, AND RIGHT EDGES        */}
      {/* ------------------------------------------------------------- */}
      <header
        className="pointer-events-auto flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/50 px-6 py-2.5 shadow-2xl backdrop-blur-md shrink-0 w-full z-30"
        style={panelBg}
      >
        <div className="flex items-center space-x-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/70 bg-gradient-to-br from-[#8d1720] to-[#5a0d15] text-amber-200 shadow-lg">
            <Landmark className="h-4.5 w-4.5 text-amber-300" />
          </div>
          <h1 className="font-cinzel text-lg md:text-xl font-bold tracking-[0.16em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300">
            The World of Opera
          </h1>
        </div>

        {/* Info Guide & Fullscreen Toggle */}
        <div className="flex items-center gap-2.5">

          <button
            onClick={() => setShowInfoModal(true)}
            className="flex items-center gap-2 rounded-lg border border-amber-500/70 bg-[#223552] hover:bg-[#2c4468] hover:border-amber-400 px-3.5 py-1.5 text-sm md:text-base font-cinzel font-bold text-amber-200 transition cursor-pointer shadow-md"
            title="Opera History, Palaces & Atlas Guide"
          >
            <BookOpen className="h-4 w-4 text-amber-300" />
            <span className="hidden sm:inline">Opera History & Atlas Guide</span>
            <span className="sm:hidden">History & Guide</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/70 bg-[#223552] hover:bg-[#2c4468] hover:border-amber-400 text-amber-200 transition cursor-pointer shadow-md shrink-0"
            title={isFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize className="h-4.5 w-4.5 text-amber-300" />
            ) : (
              <Maximize className="h-4.5 w-4.5 text-amber-300" />
            )}
          </button>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 2. MAIN BODY: SIDEBARS FLUSH TO EDGES WITH INTERNAL BUFFER    */}
      {/* ------------------------------------------------------------- */}
      <div className="relative flex flex-1 items-stretch justify-between pointer-events-none min-h-0 w-full overflow-hidden">
        {/* LEFT SIDEBAR: DIRECTORY (Flush to left screen edge with generous internal buffer) */}
        <aside
          className="pointer-events-auto flex w-[410px] xl:w-[430px] 2xl:w-[450px] flex-col space-y-3.5 border-r border-amber-500/40 p-5 shadow-2xl backdrop-blur-md min-h-0 overflow-hidden h-full z-20"
          style={panelBg}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-amber-900/50 pb-2 shrink-0">
            <h2 className="font-cinzel text-lg md:text-xl font-bold tracking-wider text-amber-300 uppercase flex items-center gap-2">
              <Building className="h-5 w-5 text-amber-300" /> Opera Directory
            </h2>
            <span className="text-sm font-cinzel font-bold text-amber-200 bg-[#1c2c44] px-3 py-0.5 rounded border border-slate-600">
              {filteredHouses.length}
            </span>
          </div>

          {/* Search Box */}
          <div className="relative shrink-0">
            <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-300" />
            <input
              type="text"
              placeholder="Search house, city, composer, premiere..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-amber-600/70 bg-[#18263a] pl-10 pr-9 py-2.5 text-base text-slate-100 placeholder-slate-400 focus:border-amber-400 focus:outline-none shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-2.5 text-slate-300 hover:text-white text-base cursor-pointer"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Streamlined Classification Filter */}
          <div className="space-y-1.5 shrink-0">
            <div className="flex items-center justify-between text-xs md:text-sm font-cinzel font-bold text-amber-300 tracking-wider uppercase px-0.5 pb-0.5">
              <button
                onClick={() => setShowTierFilters(!showTierFilters)}
                className="flex items-center gap-1.5 text-xs md:text-sm font-cinzel font-bold text-amber-300 uppercase tracking-wider hover:text-amber-200 transition cursor-pointer"
                title="Toggle Categories"
              >
                <Layers className="h-3.5 w-3.5 text-amber-400" />
                <span>Categories</span>
                {showTierFilters ? (
                  <ChevronUp className="h-3.5 w-3.5 text-amber-300 ml-0.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-amber-300 ml-0.5" />
                )}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={selectAllTiers}
                  className={`text-xs font-cinzel font-bold px-2 py-0.5 rounded transition cursor-pointer ${
                    selectedTiers.length === 5
                      ? 'bg-amber-400/25 text-amber-200 underline border border-amber-400/60'
                      : 'text-amber-400 hover:text-amber-200'
                  }`}
                  title="Select all categories"
                >
                  All
                </button>
                <span className="text-slate-600">•</span>
                <button
                  onClick={clearAllTiers}
                  className="text-xs font-cinzel text-slate-300 hover:text-amber-300 transition cursor-pointer"
                  title="Clear all categories"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* 4 Streamlined Single-Line Buttons: Pin icon to left, tier label in middle, count to right */}
            {showTierFilters && (
              <div className="space-y-1.5 animate-in fade-in duration-150">
                {tierConfigs.map(({ id, label, count }) => {
                  const isChecked = selectedTiers.includes(id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggleTier(id)}
                      className={`w-full py-1.5 px-3 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                        isChecked
                          ? 'bg-gradient-to-r from-[#8d1720]/90 via-[#5a0d15]/90 to-[#1e2f49] text-amber-100 border-amber-400 shadow-sm ring-1 ring-amber-400/50'
                          : 'bg-[#1a2940]/90 text-slate-300 border-slate-700/80 opacity-75 hover:opacity-100 hover:border-slate-500 hover:bg-[#223552]'
                      }`}
                      title={`Toggle ${label}`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <TierPinIcon tier={id} className="w-5 h-5 shrink-0" />
                        <span className={`text-sm md:text-[15px] font-cinzel font-bold leading-snug break-words ${isChecked ? 'text-amber-100' : 'text-slate-300'}`}>
                          {label}
                        </span>
                      </div>
                      <span
                        className={`text-xs md:text-sm font-cinzel font-bold px-2 py-0.5 rounded border shrink-0 ${
                          isChecked
                            ? 'bg-[#1e2f49] text-amber-300 border-amber-400/60'
                            : 'bg-[#18263a] text-slate-400 border-slate-700'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Era, Composer & Architecture Filters Panel */}
          <div className="space-y-2 shrink-0 border-t border-b border-amber-900/40 py-2.5">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowFiltersPanel(!showFiltersPanel)}
                className="flex items-center gap-1.5 text-xs md:text-sm font-cinzel font-bold text-amber-300 uppercase tracking-wider hover:text-amber-200 transition cursor-pointer"
                title="Toggle Historical Era, Composer & Architecture Filters"
              >
                <Filter className="h-3.5 w-3.5 text-amber-400" />
                <span>Eras, Composers & History</span>
                {showFiltersPanel ? (
                  <ChevronUp className="h-3.5 w-3.5 text-amber-300 ml-0.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-amber-300 ml-0.5" />
                )}
              </button>

              {hasActiveFilters && (
                <button
                  onClick={resetAllFilters}
                  className="flex items-center gap-1 text-xs font-cinzel text-amber-400 hover:text-amber-200 hover:underline transition cursor-pointer"
                  title="Reset all filters to defaults"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {showFiltersPanel && (
              <div className="space-y-1.5 pt-0.5 animate-in fade-in duration-150">
                {/* Row 1: Historical Era & Major Composer side-by-side */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Historical Era Selector */}
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center text-[11px] font-cinzel text-slate-300 px-0.5">
                      <span className="flex items-center gap-1 truncate">
                        <Clock className="h-3 w-3 text-amber-400 shrink-0" /> Era
                      </span>
                    </div>
                    <TheatricalDropdown
                      value={selectedEra}
                      options={eraOptions}
                      onChange={(val) => setSelectedEra(val as HistoricalEra)}
                      placeholder="All Eras"
                      align="left"
                    />
                  </div>

                  {/* Major Composer Selector */}
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center text-[11px] font-cinzel text-slate-300 px-0.5">
                      <span className="flex items-center gap-1 truncate">
                        <Music className="h-3 w-3 text-amber-400 shrink-0" /> Composer
                      </span>
                    </div>
                    <TheatricalDropdown
                      value={selectedComposer}
                      options={composerOptions}
                      onChange={(val) => setSelectedComposer(val)}
                      placeholder="All Composers"
                      align="right"
                    />
                  </div>
                </div>

                {/* Row 2: Architectural Style & Master Architect side-by-side */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Architectural Style Selector */}
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center text-[11px] font-cinzel text-slate-300 px-0.5">
                      <span className="flex items-center gap-1 truncate">
                        <Palette className="h-3 w-3 text-amber-400 shrink-0" /> Style
                      </span>
                    </div>
                    <TheatricalDropdown
                      value={selectedStyle}
                      options={styleOptions}
                      onChange={(val) => setSelectedStyle(val as StyleCategory)}
                      placeholder="All Styles"
                      align="left"
                    />
                  </div>

                  {/* Master Architect Selector */}
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center text-[11px] font-cinzel text-slate-300 px-0.5">
                      <span className="flex items-center gap-1 truncate">
                        <Building className="h-3 w-3 text-amber-400 shrink-0" /> Architect
                      </span>
                    </div>
                    <TheatricalDropdown
                      value={selectedArchitect}
                      options={architectOptions}
                      onChange={(val) => setSelectedArchitect(val)}
                      placeholder="All Architects"
                      align="right"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Active Filter Chips / Badges Row */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-1.5 shrink-0 px-0.5 py-1 text-xs font-cinzel">
              <span className="text-slate-400 text-[10px] uppercase tracking-wider">Active:</span>

              {selectedEra !== 'ALL' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-950/80 border border-amber-400 text-amber-200 text-[11px]">
                  <span>Era: {getEraDefinition(selectedEra)?.shortLabel}</span>
                  <button
                    onClick={() => setSelectedEra('ALL')}
                    className="hover:text-white cursor-pointer ml-0.5 font-bold"
                    title="Remove era filter"
                  >
                    ✕
                  </button>
                </span>
              )}

              {selectedComposer !== 'ALL' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#3d1820] border border-amber-400 text-amber-200 text-[11px]">
                  <span>Composer: {getComposerFilter(selectedComposer)?.name}</span>
                  <button
                    onClick={() => setSelectedComposer('ALL')}
                    className="hover:text-white cursor-pointer ml-0.5 font-bold"
                    title="Remove composer filter"
                  >
                    ✕
                  </button>
                </span>
              )}

              {selectedStyle !== 'ALL' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-400 text-slate-100 text-[11px]">
                  <span>Style: {getStyleDefinition(selectedStyle)?.label}</span>
                  <button
                    onClick={() => setSelectedStyle('ALL')}
                    className="hover:text-white cursor-pointer ml-0.5 font-bold"
                    title="Remove style filter"
                  >
                    ✕
                  </button>
                </span>
              )}

              {selectedArchitect !== 'ALL' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-950/80 border border-red-400 text-red-200 text-[11px]">
                  <span>Arch: {getMasterArchitect(selectedArchitect)?.name || selectedArchitect}</span>
                  <button
                    onClick={() => setSelectedArchitect('ALL')}
                    className="hover:text-white cursor-pointer ml-0.5 font-bold"
                    title="Remove architect filter"
                  >
                    ✕
                  </button>
                </span>
              )}


              {searchQuery.trim() && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/90 border border-amber-500/70 text-amber-200 text-[11px]">
                  <span className="truncate max-w-[100px]">"{searchQuery}"</span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="hover:text-white cursor-pointer ml-0.5 font-bold"
                    title="Clear search text"
                  >
                    ✕
                  </button>
                </span>
              )}
            </div>
          )}

          {/* Scrollable List of Opera Houses */}
          <div className="flex-1 space-y-2.5 overflow-y-auto pr-1 min-h-0">
            {filteredHouses.length > 0 ? (
              filteredHouses.map((house) => {
                const isSelected = selectedHouseId === house.id;

                return (
                  <div
                    key={house.id}
                    onClick={() => setSelectedHouse(house.id)}
                    className={`cursor-pointer rounded-lg border p-2.5 transition-all duration-150 ${getCardBorderClass(
                      house.tier,
                      isSelected
                    )}`}
                  >
                    <div className="flex items-start justify-between gap-1.5">
                      <h4 className="font-cinzel text-base md:text-[16px] font-bold text-amber-100 leading-snug">
                        {house.name}
                      </h4>
                      {house.buildingStatus === 'DEMOLISHED_LOST_SITE' && (
                        <span className="shrink-0 text-[10px] font-cinzel font-bold px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/70 uppercase">
                          Lost Site
                        </span>
                      )}
                      {house.buildingStatus === 'HISTORIC_MONUMENT' && (
                        <span className="shrink-0 text-[10px] font-cinzel font-bold px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/70 uppercase">
                          Monument
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-sm md:text-[14px] text-amber-200/90 font-garamond font-medium">
                      {house.city}, {house.country}{' '}
                      {house.inauguratedYear && `• Est. ${house.inauguratedYear}`}
                      {house.demolishedYear && ` (Dem. ${house.demolishedYear})`}
                    </p>
                  </div>
                );
              })
            ) : (
              <div className="py-12 px-4 text-center space-y-3">
                <p className="text-base md:text-[17px] text-amber-200 font-garamond leading-relaxed">
                  {selectedTiers.length === 0
                    ? 'No categories currently selected. Please select one or more categories above to explore venues.'
                    : 'No opera houses match your current search and filter selections.'}
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={resetAllFilters}
                    className="px-4 py-2 rounded-lg border border-amber-500/60 bg-[#7a101b] text-amber-100 text-base font-cinzel font-bold hover:bg-[#8f1522] transition cursor-pointer inline-flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Reset All Filters</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* RIGHT SIDEBAR: DOSSIER & PROFILE (Flush to right screen edge) */}
        {selectedHouse && (
          <aside
            className="pointer-events-auto flex w-[420px] xl:w-[450px] 2xl:w-[480px] flex-col border-l border-amber-500/40 p-5 shadow-2xl backdrop-blur-md min-h-0 overflow-hidden h-full z-20 animate-in fade-in duration-200"
            style={panelBg}
          >
            {/* BESPOKE OPERA HOUSE PROFILE & HISTORICAL DOSSIER */}
            <div className="flex flex-col h-full min-h-0 space-y-3">
              {/* Header: Title, City/Country, Tier Badge, Close Button */}
              <div className="relative border-b border-amber-900/60 pb-2.5 shrink-0">
                <div className="flex items-start justify-between gap-2.5">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-cinzel text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-300 leading-snug">
                      {selectedHouse.name}
                    </h2>
                    <p className="text-sm md:text-base text-amber-300 font-garamond font-medium mt-0.5">
                      {selectedHouse.city}, {selectedHouse.country}
                    </p>
                    <div className="mt-2">
                      <span className={`inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs md:text-sm font-cinzel font-bold tracking-wider border ${getDossierTierBadgeClass(selectedHouse.tier)}`}>
                        <TierPinIcon tier={selectedHouse.tier} size={16} className="shrink-0" />
                        {getTierBadgeText(selectedHouse.tier)}
                      </span>
                    </div>
                  </div>

                  {/* Header Close Button */}
                  <div className="shrink-0 pt-0.5">
                    <button
                      onClick={() => setSelectedHouse(null)}
                      className="rounded-lg p-1.5 text-slate-300 hover:bg-slate-800 hover:text-amber-200 transition cursor-pointer border border-slate-700/60"
                      title="Close dossier"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Lost Landmark / Historic Monument Callout Banner */}
              {selectedHouse.buildingStatus === 'DEMOLISHED_LOST_SITE' && (
                <div className="bg-[#421518]/90 border border-amber-500/70 p-3 rounded-lg flex items-start gap-2.5 shadow-sm shrink-0">
                  <Landmark className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="font-cinzel text-xs font-bold text-amber-200 uppercase tracking-wider">
                      Lost Historic Landmark • Demolished {selectedHouse.demolishedYear}
                    </div>
                    <div className="font-garamond text-xs md:text-sm text-slate-200 mt-0.5 leading-snug">
                      {selectedHouse.successorVenue
                        ? `Institutional successor: ${selectedHouse.successorVenue}.`
                        : 'Building no longer standing; historic footprint preserved as a cultural memory site.'}
                    </div>
                  </div>
                </div>
              )}
              {selectedHouse.buildingStatus === 'HISTORIC_MONUMENT' && (
                <div className="bg-[#172b4d]/90 border border-blue-400/70 p-3 rounded-lg flex items-start gap-2.5 shadow-sm shrink-0">
                  <Landmark className="h-5 w-5 text-blue-300 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="font-cinzel text-xs font-bold text-blue-200 uppercase tracking-wider">
                      Preserved Historic Monument & Palace Museum
                    </div>
                    <div className="font-garamond text-xs md:text-sm text-slate-200 mt-0.5 leading-snug">
                      Intact historic palace theatre and cultural heritage monument.
                    </div>
                  </div>
                </div>
              )}

              {/* Compact Architectural & Structural Specs */}
              {(() => {
                const isLongCapacity = Boolean(selectedHouse.capacity && selectedHouse.capacity.length > 18);
                return (
                  <div className="grid grid-cols-2 gap-2 text-xs shrink-0">
                    {selectedHouse.inauguratedYear && (
                      <div
                        className={`bg-[#1c2c44]/90 border border-slate-700/80 px-3 py-2 rounded-lg flex items-center gap-2.5 ${
                          isLongCapacity || !selectedHouse.capacity ? 'col-span-2' : 'col-span-1'
                        }`}
                      >
                        <Calendar className="h-4 w-4 text-amber-400 shrink-0" />
                        <div className="min-w-0">
                          <div className="text-[10px] md:text-[11px] font-cinzel font-bold text-amber-300/80 uppercase tracking-wider">
                            Inaugurated
                          </div>
                          <div className="font-bold text-sm md:text-base text-white">
                            {selectedHouse.inauguratedYear}
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedHouse.capacity && (
                      <div
                        className={`bg-[#1c2c44]/90 border border-slate-700/80 px-3 py-2 rounded-lg flex items-start gap-2.5 ${
                          isLongCapacity || !selectedHouse.inauguratedYear ? 'col-span-2' : 'col-span-1'
                        }`}
                      >
                        <Users className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] md:text-[11px] font-cinzel font-bold text-amber-300/80 uppercase tracking-wider">
                            Capacity
                          </div>
                          <div className="font-bold text-xs md:text-sm text-white leading-snug break-words">
                            {selectedHouse.capacity}
                          </div>
                        </div>
                      </div>
                    )}
                    {(selectedHouse.architect || selectedHouse.architecturalStyle) && (
                      <div className="bg-[#1c2c44]/90 border border-slate-700/80 px-3 py-2 rounded-lg flex items-start gap-2.5 col-span-2">
                        <Landmark className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] md:text-[11px] font-cinzel font-bold text-amber-300/80 uppercase tracking-wider">
                            Architect & Style
                          </div>
                          <div className="font-semibold text-xs md:text-sm text-slate-100 leading-snug break-words">
                            {[selectedHouse.architect, selectedHouse.architecturalStyle].filter(Boolean).join(' • ')}
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedHouse.summerOrchestralResidency && (
                      <div className="bg-[#152a28]/95 border border-emerald-500/60 px-3 py-2 rounded-lg flex items-start gap-2.5 col-span-2 shadow-sm">
                        <Music className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] md:text-[11px] font-cinzel font-bold text-emerald-300 uppercase tracking-wider">
                            Summer Orchestral Residency
                          </div>
                          <div className="font-semibold text-xs md:text-sm text-emerald-100 leading-snug break-words">
                            {selectedHouse.summerOrchestralResidency}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Scrollable Content: Description, Lineage & Verified World Premieres */}
              <div className="flex-1 space-y-3 overflow-y-auto pr-1 min-h-0">
                {/* Description */}
                <div className="bg-[#1c2c44] border border-slate-700/80 p-3.5 md:p-4 rounded-lg shadow-sm">
                  <p className="text-[15px] md:text-base text-slate-100 leading-relaxed font-garamond">
                    {selectedHouse.description}
                  </p>
                </div>

                {/* Historical Lineage & Predecessors */}
                {(selectedHouse.predecessorVenue || selectedHouse.historicalLineage) && (
                  <div className="bg-[#1b2a3f] border border-amber-600/60 p-3.5 rounded-lg shadow-sm space-y-1.5">
                    <div className="flex items-center gap-1.5 font-cinzel font-bold text-amber-300 text-xs md:text-sm uppercase tracking-wider">
                      <Clock className="h-4 w-4 text-amber-400" />
                      <span>Historical Lineage & Predecessors</span>
                    </div>
                    {selectedHouse.predecessorVenue && (
                      <div className="text-xs md:text-sm font-garamond text-amber-200">
                        <span className="font-semibold text-amber-300">Predecessor Stage:</span>{' '}
                        <span className="text-white font-medium">{selectedHouse.predecessorVenue}</span>
                      </div>
                    )}
                    {selectedHouse.historicalLineage && (
                      <p className="text-xs md:text-sm text-slate-200 font-garamond leading-relaxed">
                        {selectedHouse.historicalLineage}
                      </p>
                    )}
                  </div>
                )}

                {/* Historic Legacy & Significance */}
                {selectedHouse.historicSignificance && (
                  <div className="bg-[#1e2f49] border border-amber-600/50 p-3.5 md:p-4 rounded-lg leading-relaxed shadow-sm">
                    <span className="font-cinzel font-bold text-amber-300 block mb-1 text-xs md:text-sm uppercase tracking-wider">
                      Historic Significance & Heritage:
                    </span>
                    <span className="text-slate-100 leading-relaxed font-garamond text-[15px] md:text-base block">
                      {selectedHouse.historicSignificance}
                    </span>
                  </div>
                )}

                {/* 100% Verified Landmark World Premieres */}
                {worldPremieres.length > 0 && (
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-cinzel text-xs md:text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                        <Music className="h-5 w-5 text-amber-400" /> Landmark World Premieres
                      </h3>
                      <span className="text-xs md:text-sm text-amber-200 font-garamond font-semibold">
                        Historical Archives
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {worldPremieres.map((premiere, idx) => {
                        const patronageBadge = getPatronageBadgeInfo(premiere.patronageType);

                        return (
                          <div
                            key={idx}
                            className="bg-[#1c2c44] border border-slate-600/80 p-3.5 rounded-lg hover:border-amber-400/60 transition shadow-sm space-y-2"
                          >
                            <div className="flex items-start justify-between gap-2.5">
                              <h4 className="font-cinzel text-sm md:text-base font-bold text-amber-100 leading-snug">
                                {premiere.title}
                              </h4>
                              <span className="text-xs md:text-sm font-cinzel font-bold text-amber-200 bg-[#223552] px-2.5 py-0.5 rounded border border-amber-600/40 shrink-0">
                                {premiere.premiereYear}
                              </span>
                            </div>

                            <p className="text-xs md:text-sm text-amber-200 font-garamond font-medium">
                              Composer: <span className="text-white">{premiere.composer}</span>
                            </p>

                            {premiere.conductor && (
                              <p className="text-xs md:text-sm text-slate-200 font-garamond flex items-center gap-1.5">
                                <Music className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                                <span className="font-semibold text-amber-300">Conductor:</span>
                                <span className="text-white">{premiere.conductor}</span>
                              </p>
                            )}

                            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                              {(() => {
                                const premiereBadge = getPremiereBadgeInfo(premiere.type);
                                return (
                                  <span
                                    className={`text-[10px] md:text-xs font-cinzel font-bold tracking-wider px-2 py-0.5 rounded ${premiereBadge.badgeBg} ${premiereBadge.badgeText} border ${premiereBadge.badgeBorder} uppercase inline-block`}
                                  >
                                    {premiereBadge.label}
                                  </span>
                                );
                              })()}

                              {patronageBadge && (
                                <span className="text-[10px] md:text-xs font-cinzel font-bold tracking-wider px-2 py-0.5 rounded bg-[#1e2f49] text-amber-200 border border-amber-500/60 uppercase inline-flex items-center gap-1">
                                  <span>{patronageBadge.badgeLabel}</span>
                                </span>
                              )}
                            </div>

                            {premiere.details && (
                              <p className="text-xs md:text-sm text-slate-200 font-garamond leading-relaxed pt-1 border-t border-slate-700/60">
                                • {premiere.details}
                              </p>
                            )}

                            {premiere.commissionContext && (
                              <div className="bg-[#142030] border border-amber-900/50 p-2.5 rounded text-xs md:text-sm font-garamond text-slate-200 leading-relaxed space-y-0.5 mt-1.5">
                                <div className="font-cinzel text-[10px] md:text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                                  Historical Commission & Economic Context:
                                </div>
                                <p className="text-slate-200 leading-relaxed font-garamond text-xs md:text-sm">
                                  {premiere.commissionContext}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Pinned Bottom Website Button (Only displayed when a valid official website exists) */}
              {selectedHouse.websiteUrl && (
                <div className="pt-2 border-t border-slate-700 shrink-0">
                  <a
                    href={selectedHouse.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-amber-400 bg-gradient-to-r from-[#8d1720] to-[#b31d2c] py-2.5 md:py-3 text-sm md:text-base font-cinzel font-bold tracking-wider text-amber-100 shadow-md hover:from-[#a31a26] hover:to-[#c82233] transition cursor-pointer"
                  >
                    Visit Official Website <ExternalLink className="h-4 w-4 text-amber-200" />
                  </a>
                </div>
              )}
            </div>
          </aside>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 3. CENTER BOTTOM CONTROLS: COMPACT FLOATING CONTROL BAR       */}
        {/* Centers dynamically in the visible globe viewport             */}
        {/* ------------------------------------------------------------- */}
        <footer
          className="pointer-events-auto absolute bottom-3 -translate-x-1/2 flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-amber-500/60 bg-[#18263a]/95 shadow-xl backdrop-blur-md text-xs md:text-[13px] font-cinzel text-amber-100 z-20 font-bold whitespace-nowrap transition-all duration-300 ease-out"
          style={{
            left: selectedHouse
              ? '50%'
              : 'calc(50% + var(--sidebar-half-width))',
          }}
        >
          <span className="drop-shadow-sm text-slate-300 tracking-wide text-xs md:text-[13px]">
            Drag Globe to Rotate
          </span>
          <div className="h-3 w-[1px] bg-amber-500/40" />
          <button
            onClick={toggleAutoRotate}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition shadow-sm cursor-pointer font-bold text-[11px] md:text-xs ${
              isAutoRotating
                ? 'bg-amber-500/25 text-amber-200 border-amber-400/80'
                : 'bg-[#223552] text-slate-200 border-slate-600/80 hover:text-white hover:border-slate-400 hover:bg-[#2c4468]'
            }`}
            title={isAutoRotating ? 'Pause auto-rotation' : 'Start auto-rotation'}
          >
            <span className="text-[10px]">{isAutoRotating ? '⏸' : '▶'}</span>
            <span>{isAutoRotating ? 'Auto-Rotate: On' : 'Auto-Rotate: Off'}</span>
          </button>
        </footer>
      </div>

      {/* ATLAS GUIDE & TIER CLASSIFICATION MODAL */}
      <AtlasInfoModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        tierCounts={tierCounts}
        onSelectVenue={(venueId) => {
          setSelectedHouse(venueId);
          setShowInfoModal(false);
        }}
      />
    </div>
  );
};
