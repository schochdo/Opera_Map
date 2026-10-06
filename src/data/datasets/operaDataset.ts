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
        desc: 'International A-League institutions with massive global footprints and historic supremacy: The Met, La Scala, Vienna, Covent Garden, Paris Garnier & Bastille, Bayreuth, Sydney, Teatro Colón.',
        color: '#f3c448',
        icon: '🏛️',
      },
      tier2: {
        label: 'Major Metropolitan & National',
        short: 'T2',
        badge: '🎭 Major Metropolitan / National Opera House',
        desc: 'Foremost civic, state, and national opera houses with year-round resident companies and pit orchestras: Opera Philadelphia, Washington National Opera, Oper Leipzig, Houston Grand Opera, Minnesota Opera, Deutsche Oper Berlin.',
        color: '#c9a13b',
        icon: '🎭',
      },
      tier3: {
        label: 'Boutique & Renowned Festivals',
        short: 'T3',
        badge: '🎪 Boutique Stage & Renowned Festival',
        desc: 'High-standard professional companies in intimate historic jewel boxes or dedicated seasonal festivals: Central City Opera, Wheeler / Aspen, Bravo! Vail, Santa Fe, Glimmerglass, Chautauqua, Tanglewood, Wolf Trap, Spoleto Festival USA, Verona, Glyndebourne.',
        color: '#b91c1c',
        icon: '🎪',
      },
      tier4: {
        label: 'Historic Landmarks & Heritage',
        short: 'T4',
        badge: '💎 Historic Landmark & Cultural Heritage',
        desc: '18th-century court theatres or 19th-century Gilded Age / Boomtown buildings erected as "Opera Houses" to confer civic prestige: Fulton Opera House, Tabor Opera House, Wright Opera House, Drottningholm, Teatro Olimpico, Margravial Opera House.',
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
