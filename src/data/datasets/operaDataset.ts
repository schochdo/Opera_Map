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
    subtitle: 'Interactive 3D Atlas of Premier Opera Houses & Season Repertoire',
    icon: '🎭',
    searchPlaceholder: 'Search house, city, or opera (e.g. Aida)...',
    searchSuggestion: 'Try searching "Aida" to see opera houses staging Verdi\'s epic this upcoming season!',
    tierLabels: {
      tier1: {
        label: 'Premier Opera Houses',
        short: 'T1',
        badge: '🏛️ Premier World Opera House',
        desc: 'The world’s top institutions: La Scala, Met NYC, Vienna State Opera, Royal Opera House Covent Garden, Paris Garnier, Sydney, Teatro Colón...',
        color: '#f3c448',
        icon: '🏛️',
      },
      tier2: {
        label: 'Major Regional Houses',
        short: 'T2',
        badge: '🎭 Major Regional Opera House',
        desc: 'Renowned regional houses: Santa Fe, Houston, Seattle, Lyon, Bordeaux, Hamburg, Frankfurt, Stuttgart, Palermo, Bologna, ENO London...',
        color: '#c9a13b',
        icon: '🎭',
      },
      tier3: {
        label: 'Historic Summer Festivals',
        short: 'T3',
        badge: '🎪 Celebrated Opera Festival',
        desc: 'World-renowned festivals: Arena di Verona, Bayreuth, Salzburg, Glyndebourne.',
        color: '#b91c1c',
        icon: '🎪',
      },
      tier4: {
        label: 'Historic Gems & National Stages',
        short: 'All',
        badge: '💎 Historic Gem & National Stage',
        desc: 'Iconic municipal jewels & stages: Tokyo NNTT, Beijing NCPA, Seoul Arts Center, Singapore Esplanade, Muscat, Torino, Drottningholm, São Paulo...',
        color: '#2563eb',
        icon: '💎',
      },
    },
    overviewCards: [
      {
        icon: '🏛️',
        title: 'Premier Opera Houses (Tier 1)',
        color: 'text-amber-200',
        description: 'The world’s top institutions: La Scala, Met NYC, Vienna State Opera, Royal Opera House Covent Garden, Paris Garnier, Sydney, Teatro Colón, etc.',
      },
      {
        icon: '🎭',
        title: 'Major Regional Houses (Tier 2)',
        color: 'text-amber-400/90',
        description: 'Santa Fe, Houston, Seattle, Lyon, Bordeaux, Hamburg, Frankfurt, Stuttgart, Palermo, Bologna, ENO London, Welsh National Opera.',
      },
      {
        icon: '🎪',
        title: 'Historic Summer Festivals (Tier 3)',
        color: 'text-red-400',
        description: 'World-renowned festivals: Arena di Verona, Bayreuth, Salzburg, Glyndebourne.',
      },
      {
        icon: '💎',
        title: 'Historic Gems & Asian Landmarks (Tier 4)',
        color: 'text-blue-400',
        description: 'Iconic stages & municipal jewels: Tokyo NNTT, Beijing NCPA, Seoul Arts Center, Singapore Esplanade, Royal Opera Muscat, Teatro Regio Torino, Drottningholm, Bellas Artes Mexico, São Paulo.',
      },
    ],
  },
  items: OPERA_ITEMS,
};
