import { create } from 'zustand';
import { OperaHouse } from '../types/opera';
import { OPERA_HOUSES } from '../data/operaData';

export type TierNumber = 1 | 2 | 3 | 4;

interface OperaStore {
  houses: OperaHouse[];

  selectedHouseId: string | null;
  selectedTiers: number[]; // e.g. [1, 2, 3, 4] by default (all active)
  searchQuery: string;

  // Camera Target Lat/Long (Default centered on Europe)
  cameraTarget: { lat: number; lng: number; zoom: number };
  lookAtTarget: { x: number; y: number; z: number };
  isAnimatingCamera: boolean;
  isAutoRotating: boolean;

  // Actions
  setSelectedHouse: (houseId: string | null) => void;
  toggleTier: (tier: number) => void;
  selectAllTiers: () => void;
  clearAllTiers: () => void;
  setSelectedTiers: (tiers: number[]) => void;
  setSearchQuery: (query: string) => void;
  stopCameraAnimation: () => void;
  stopAutoRotate: () => void;
  toggleAutoRotate: () => void;

  getFilteredHouses: () => OperaHouse[];
}

export const useOperaStore = create<OperaStore>((set, get) => ({
  houses: OPERA_HOUSES,

  selectedHouseId: null,
  selectedTiers: [1, 2, 3, 4],
  searchQuery: '',

  // Default camera targets Europe on start (lat 48°N, lng 14°E)
  cameraTarget: { lat: 48, lng: 14, zoom: 4.8 },
  lookAtTarget: { x: 0, y: 0, z: 0 },
  isAnimatingCamera: false,
  isAutoRotating: true,

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

  selectAllTiers: () => set({ selectedTiers: [1, 2, 3, 4] }),
  clearAllTiers: () => set({ selectedTiers: [] }),
  setSelectedTiers: (tiers: number[]) => set({ selectedTiers: [...tiers].sort() }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  stopCameraAnimation: () => set({ isAnimatingCamera: false }),

  getFilteredHouses: () => {
    const { houses, selectedTiers, searchQuery } = get();

    return houses.filter((house) => {
      // Multi-tier filtering: house tier must be selected
      if (!selectedTiers.includes(house.tier)) {
        return false;
      }

      // Real-time Search: searches Venue name, City, Country, Architect, Style, Historic Premieres, or Composers
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = house.name.toLowerCase().includes(q);
        const matchesCity = house.city.toLowerCase().includes(q);
        const matchesCountry = house.country.toLowerCase().includes(q);
        const matchesArchitect = house.architect?.toLowerCase().includes(q);
        const matchesArch = house.architecturalStyle?.toLowerCase().includes(q);
        const matchesSignificance = house.historicSignificance?.toLowerCase().includes(q);
        const matchesPremieres = house.historicPremieres?.some(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.composer.toLowerCase().includes(q) ||
            p.details?.toLowerCase().includes(q)
        );

        if (
          !matchesName &&
          !matchesCity &&
          !matchesCountry &&
          !matchesArchitect &&
          !matchesArch &&
          !matchesSignificance &&
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
