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
  highlightsTitle: 'World Premieres',
  highlights: house.historicPremieres
    ?.filter((p) => p.type === 'WORLD_PREMIERE')
    .map((p) => ({
      title: p.title,
      subtitle: `by ${p.composer}`,
      badge: String(p.premiereYear),
      datesOrPeriod: String(p.premiereYear),
      curatorOrArchitect: 'World Premiere',
      notes: p.details,
    })),
}));

export const OPERA_DATASET: AtlasDataset = {
  config: {
    id: 'opera',
    title: 'THE WORLD OF OPERA',
    subtitle: 'Interactive 3D Atlas of Historical Opera Houses & Landmark Premieres',
    icon: 'landmark',
    searchPlaceholder: 'Search house, city, composer, or premiere...',
    searchSuggestion: 'Try searching "Nabucco", "Verdi", or "Puccini" to see historical premiere venues!',
    tierLabels: {
      tier1: {
        label: 'Global Premier Houses',
        short: 'T1',
        badge: 'Global Premier Opera House',
        desc: 'International flagship institutions with massive global footprints, star rosters, and historic supremacy.',
        color: '#f59e0b',
        icon: 'pin',
      },
      tier2: {
        label: 'Major Metropolitan & National',
        short: 'T2',
        badge: 'Major Metropolitan / National Opera House',
        desc: 'Foremost civic, state, and national opera houses with year-round resident companies and pit orchestras.',
        color: '#dc2626',
        icon: 'pin',
      },
      tier3: {
        label: 'Summer Festivals & Residencies',
        short: 'T3',
        badge: 'Summer Festival & Orchestral Residency',
        desc: 'World-renowned seasonal classical festivals, acoustic pavilions, and scenic summer homes of premier international orchestras.',
        color: '#16a34a',
        icon: 'pin',
      },
      tier4: {
        label: 'Regional & Boutique Opera Houses',
        short: 'T4',
        badge: 'Regional & Boutique Opera House',
        desc: 'High-standard civic and regional companies in intimate historic jewel boxes, municipal theatres, and community cultural anchors.',
        color: '#0284c7',
        icon: 'pin',
      },
      tier5: {
        label: 'Historic Royal Court Theatres',
        short: 'T5',
        badge: 'Historic Royal Court Theatre',
        desc: 'Intact 16th- to 18th-century royal court theatres and foundational palaces preserved with original stage machinery and historic salons.',
        color: '#9333ea',
        icon: 'pin',
      },
    },
    overviewCards: [
      {
        icon: 'pin',
        title: 'Global Premier Opera Houses',
        color: 'text-amber-300',
        description: 'International flagship institutions with massive global footprints, star rosters, and historic supremacy.',
      },
      {
        icon: 'pin',
        title: 'Major Metropolitan & National Houses',
        color: 'text-red-400',
        description: 'Foremost civic, state, and national opera houses with year-round resident companies and pit orchestras.',
      },
      {
        icon: 'pin',
        title: 'Summer Classical Festivals & Residencies',
        color: 'text-emerald-400',
        description: 'World-renowned seasonal classical festivals, acoustic pavilions, and scenic summer homes of premier international orchestras.',
      },
      {
        icon: 'pin',
        title: 'Regional & Boutique Opera Houses',
        color: 'text-sky-400',
        description: 'High-standard civic and regional companies in intimate historic jewel boxes, municipal theatres, and community cultural anchors.',
      },
      {
        icon: 'pin',
        title: 'Historic Royal Court Theatres',
        color: 'text-purple-400',
        description: 'Intact 16th- to 18th-century royal court theatres and architectural wonders preserved with original stage machinery.',
      },
    ],
  },
  items: OPERA_ITEMS,
};
