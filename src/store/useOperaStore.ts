import { create } from 'zustand';
import { OperaHouse } from '../types/opera';
import { OPERA_HOUSES } from '../data/operaData';

export type TierFilterType = 'ALL' | 1 | 2 | 3 | 4;

interface OperaStore {
  houses: OperaHouse[];

  selectedHouseId: string | null;
  tierFilter: TierFilterType; // 'ALL' = All houses, 1 = Tier 1 only, 2 = Tier 2 only, 3 = Tier 3 only, 4 = Tier 4 only
  searchQuery: string;

  // Camera Target Lat/Long (Default centered on Europe)
  cameraTarget: { lat: number; lng: number; zoom: number };
  lookAtTarget: { x: number; y: number; z: number };
  isAnimatingCamera: boolean;
  isAutoRotating: boolean;

  // Actions
  setSelectedHouse: (houseId: string | null) => void;
  setTierFilter: (tier: TierFilterType) => void;
  setSearchQuery: (query: string) => void;
  stopCameraAnimation: () => void;
  stopAutoRotate: () => void;
  toggleAutoRotate: () => void;

  getFilteredHouses: () => OperaHouse[];
}

export const useOperaStore = create<OperaStore>((set, get) => ({
  houses: OPERA_HOUSES,

  selectedHouseId: null,
  tierFilter: 'ALL',
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

  setTierFilter: (tier) => set({ tierFilter: tier }),
  setSearchQuery: (query) => set({ searchQuery: query }),

  stopCameraAnimation: () => set({ isAnimatingCamera: false }),

  getFilteredHouses: () => {
    const { houses, tierFilter, searchQuery } = get();

    return houses.filter((house) => {
      // Precise Tier Filtering:
      // Clicking T1 shows ONLY Tier 1; T2 shows ONLY Tier 2; T3 shows ONLY Tier 3; T4 shows ONLY Tier 4; ALL shows everything!
      if (tierFilter !== 'ALL' && house.tier !== tierFilter) {
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
    });
  },
}));
