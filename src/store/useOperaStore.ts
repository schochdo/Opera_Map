import { create } from 'zustand';
import { OperaHouse } from '../types/opera';
import { OPERA_HOUSES } from '../data/operaData';
import {
  HistoricalEra,
  StyleCategory,
  getHouseEra,
  getHouseStyleCategory,
  matchesArchitectFilter,
  houseHasComposerPremiere,
  houseHasPatronagePremiere,
} from '../utils/filterHelpers';

export type TierNumber = 1 | 2 | 3 | 4;

interface OperaStore {
  houses: OperaHouse[];

  selectedHouseId: string | null;
  hoveredHouseId: string | null;
  selectedTiers: number[]; // e.g. [1, 2, 3, 4] by default (all active)
  selectedEra: HistoricalEra;
  selectedStyle: StyleCategory;
  selectedArchitect: string;
  selectedComposer: string;
  selectedPatronage: string;
  searchQuery: string;

  // Camera Target Lat/Long (Default centered on Europe)
  cameraTarget: { lat: number; lng: number; zoom: number };
  lookAtTarget: { x: number; y: number; z: number };
  isAnimatingCamera: boolean;
  isAutoRotating: boolean;

  // Actions
  setSelectedHouse: (houseId: string | null) => void;
  setHoveredHouse: (houseId: string | null) => void;
  toggleTier: (tier: number) => void;
  selectAllTiers: () => void;
  clearAllTiers: () => void;
  setSelectedTiers: (tiers: number[]) => void;
  setSelectedEra: (era: HistoricalEra) => void;
  setSelectedStyle: (style: StyleCategory) => void;
  setSelectedArchitect: (architect: string) => void;
  setSelectedComposer: (composer: string) => void;
  setSelectedPatronage: (patronage: string) => void;
  resetAllFilters: () => void;
  setSearchQuery: (query: string) => void;
  stopCameraAnimation: () => void;
  stopAutoRotate: () => void;
  toggleAutoRotate: () => void;

  getFilteredHouses: () => OperaHouse[];
}

export function normalizeSearchText(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[!?,;:]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function matchesSearchField(
  text: string | undefined,
  query: string,
  requireWordBoundary = false
): boolean {
  if (!text || !query) return false;
  const normText = normalizeSearchText(text);
  const normQuery = normalizeSearchText(query);
  if (!normText.includes(normQuery)) return false;

  if (requireWordBoundary) {
    const escaped = normQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const wordRegex = new RegExp(`(?:^|[^a-z0-9])${escaped}(?:$|[^a-z0-9])`, 'i');
    return wordRegex.test(normText);
  }
  return true;
}

export const useOperaStore = create<OperaStore>((set, get) => ({
  houses: OPERA_HOUSES,

  selectedHouseId: null,
  hoveredHouseId: null,
  selectedTiers: [1, 2, 3, 4, 5],
  selectedEra: 'ALL',
  selectedStyle: 'ALL',
  selectedArchitect: 'ALL',
  selectedComposer: 'ALL',
  selectedPatronage: 'ALL',
  searchQuery: '',

  // Default camera targets Europe on start (lat 48°N, lng 14°E)
  cameraTarget: { lat: 48, lng: 14, zoom: 4.8 },
  lookAtTarget: { x: 0, y: 0, z: 0 },
  isAnimatingCamera: false,
  isAutoRotating: true,

  setHoveredHouse: (houseId) => set({ hoveredHouseId: houseId }),

  stopAutoRotate: () => set({ isAutoRotating: false }),
  toggleAutoRotate: () => set((state) => ({ isAutoRotating: !state.isAutoRotating })),

  // Selecting a pin highlights the venue, pauses auto-rotate, and centers the map around that pin
  setSelectedHouse: (houseId) => {
    const house = get().houses.find((h) => h.id === houseId);
    if (house) {
      set({
        selectedHouseId: houseId,
        isAutoRotating: false, // pause auto-rotate so user can comfortably inspect
        cameraTarget: { lat: house.latitude, lng: house.longitude, zoom: 4.8 },
        isAnimatingCamera: true,
      });
    } else {
      set({
        selectedHouseId: null,
      });
    }
  },

  toggleTier: (tier: number) => {
    const current = get().selectedTiers;
    if (current.includes(tier)) {
      set({ selectedTiers: current.filter((t) => t !== tier) });
    } else {
      set({ selectedTiers: [...current, tier].sort() });
    }
  },

  selectAllTiers: () => set({ selectedTiers: [1, 2, 3, 4, 5] }),
  clearAllTiers: () => set({ selectedTiers: [] }),
  setSelectedTiers: (tiers: number[]) => set({ selectedTiers: [...tiers].sort() }),

  setSelectedEra: (era) => set({ selectedEra: era }),
  setSelectedStyle: (style) => set({ selectedStyle: style }),
  setSelectedArchitect: (architect) => set({ selectedArchitect: architect }),
  setSelectedComposer: (composer) => set({ selectedComposer: composer }),
  setSelectedPatronage: (patronage) => set({ selectedPatronage: patronage }),
  resetAllFilters: () =>
    set({
      selectedTiers: [1, 2, 3, 4, 5],
      selectedEra: 'ALL',
      selectedStyle: 'ALL',
      selectedArchitect: 'ALL',
      selectedComposer: 'ALL',
      selectedPatronage: 'ALL',
      searchQuery: '',
    }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  stopCameraAnimation: () => set({ isAnimatingCamera: false }),

  getFilteredHouses: () => {
    const {
      houses,
      selectedTiers,
      selectedEra,
      selectedStyle,
      selectedArchitect,
      selectedComposer,
      selectedPatronage,
      searchQuery,
    } = get();

    return houses
      .filter((house) => {
        if (!house) return false;
        // 1. Multi-tier filtering
        if (!selectedTiers.includes(house.tier)) {
          return false;
        }

        // 2. Historical Era filtering
        if (selectedEra !== 'ALL' && getHouseEra(house) !== selectedEra) {
          return false;
        }

        // 3. Architectural Style filtering
        if (selectedStyle !== 'ALL' && getHouseStyleCategory(house) !== selectedStyle) {
          return false;
        }

        // 4. Master Architect filtering
        if (selectedArchitect !== 'ALL' && !matchesArchitectFilter(house, selectedArchitect)) {
          return false;
        }

        // 5. Major Composer filtering
        if (selectedComposer !== 'ALL' && !houseHasComposerPremiere(house, selectedComposer)) {
          return false;
        }

        // 6. Patronage Model filtering
        if (selectedPatronage !== 'ALL' && !houseHasPatronagePremiere(house, selectedPatronage)) {
          return false;
        }

        // 7. Real-time Search: searches Venue name, City, Country, Architect, Style, Historic Lineage, Premieres, Conductors, Commission Context
        if (searchQuery.trim()) {
          const q = searchQuery.trim();
          const matchesName = matchesSearchField(house.name, q);
          const matchesCity = matchesSearchField(house.city, q);
          const matchesCountry = matchesSearchField(house.country, q);
          const matchesArchitect = matchesSearchField(house.architect, q);
          const matchesArch = matchesSearchField(house.architecturalStyle, q);
          const matchesSignificance = matchesSearchField(house.historicSignificance, q, true);
          const matchesLineage = matchesSearchField(house.historicalLineage, q, true);
          const matchesPredecessor = matchesSearchField(house.predecessorVenue, q);
          const matchesSuccessor = matchesSearchField(house.successorVenue, q);
          const matchesResidency = matchesSearchField(house.summerOrchestralResidency, q, true);
          const matchesPremieres = house.historicPremieres?.some(
            (p) =>
              matchesSearchField(p.title, q) ||
              matchesSearchField(p.composer, q) ||
              matchesSearchField(p.conductor, q) ||
              matchesSearchField(p.commissionContext, q, true) ||
              matchesSearchField(p.details, q, true)
          );

          if (
            !matchesName &&
            !matchesCity &&
            !matchesCountry &&
            !matchesArchitect &&
            !matchesArch &&
            !matchesSignificance &&
            !matchesLineage &&
            !matchesPredecessor &&
            !matchesSuccessor &&
            !matchesResidency &&
            !matchesPremieres
          ) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  },
}));

if (typeof window !== 'undefined') {
  (window as any).useOperaStore = useOperaStore;
}

