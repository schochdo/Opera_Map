import { AtlasDataset, AtlasItem } from '../../types/atlas';
import { OPERA_HOUSES } from '../operaData';

export const OPERA_ITEMS: AtlasItem[] = OPERA_HOUSES.map((house) => ({
  id: house.id,
  name: house.name,
  city: house.city,
  country: house.country,
  region: house.region,
  latitude: house.latitude,
  longitude: house.longitude,
  tier: house.tier,
  websiteUrl: house.websiteUrl,
  description: house.description,

  yearLabel: 'Inaugurated',
  yearValue: house.inauguratedYear,
  categoryLabel: 'Style',
  categoryValue: house.architecturalStyle,
  statLabel: 'Capacity',
  statValue: house.capacity,

  historicSignificance: house.historicSignificance,
  highlightsTitle: 'Historic Premieres',
  highlights: house.historicPremieres?.map((p) => ({
    title: p.title,
    subtitle: `by ${p.composer}`,
    badge: String(p.premiereYear),
    datesOrPeriod: String(p.premiereYear),
    curatorOrArchitect: p.type?.replace('_', ' '),
    notes: p.details,
  })),
}));

export const OPERA_DATASET: AtlasDataset = {
  config: {
    id: 'opera',
    title: 'THE WORLD OF OPERA',
    subtitle: 'Interactive 3D Atlas of Historical Opera Houses & Landmark Premieres',
    icon: '🎭',
    searchPlaceholder: 'Search house, city, composer, or premiere...',
    searchSuggestion: 'Try searching "Nabucco", "Verdi", or "Puccini" to see historical premiere venues!',
    tierLabels: {
      tier1: {
        label: 'Global Premier Houses',
        short: 'T1',
        badge: '🏛️ Global Premier Opera House',
        desc: 'International A-League institutions with massive global footprints, star rosters, and historic supremacy.',
        color: '#f3c448',
        icon: '🏛️',
      },
      tier2: {
        label: 'Major Metropolitan & National',
        short: 'T2',
        badge: '🎭 Major Metropolitan / National Opera House',
        desc: 'Foremost civic, state, and national opera houses with year-round resident companies and pit orchestras.',
        color: '#d8e2ec',
        icon: '🎭',
      },
      tier3: {
        label: 'Boutique & Renowned Festivals',
        short: 'T3',
        badge: '🎪 Boutique Stage & Renowned Festival',
        desc: 'High-standard professional companies in intimate historic jewel boxes and dedicated seasonal festivals.',
        color: '#b91c1c',
        icon: '🎪',
      },
      tier4: {
        label: 'Historic Royal Court Theatres',
        short: 'T4',
        badge: '👑 Historic Royal Court Theatre',
        desc: 'Intact 16th- to 19th-century royal court theatres and architectural monuments preserved with original stage machinery.',
        color: '#2563eb',
        icon: '👑',
      },
    },
    overviewCards: [
      {
        icon: '🏛️',
        title: 'Global Premier Opera Houses (Tier 1)',
        color: 'text-amber-200',
        description: 'International flagship institutions with massive global footprints, star rosters, and historic supremacy.',
      },
      {
        icon: '🎭',
        title: 'Major Metropolitan & National Houses (Tier 2)',
        color: 'text-slate-200',
        description: 'Foremost civic, state, and national opera houses with year-round resident companies and pit orchestras.',
      },
      {
        icon: '🎪',
        title: 'Boutique Stages & Historic Festivals (Tier 3)',
        color: 'text-red-400',
        description: 'High-standard professional companies in intimate historic jewel boxes and dedicated seasonal festivals.',
      },
      {
        icon: '👑',
        title: 'Historic Royal Court Theatres (Tier 4)',
        color: 'text-blue-400',
        description: 'Intact 16th- to 19th-century royal court theatres and architectural wonders preserved with original stage machinery.',
      },
    ],
  },
  items: OPERA_ITEMS,
};
