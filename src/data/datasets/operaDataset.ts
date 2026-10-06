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
        desc: 'International A-League institutions with massive global footprints and historic supremacy: The Met, La Scala, Vienna, Covent Garden, Paris Garnier & Bastille, Bayreuth, Cairo Opera House, Royal Swedish Opera, Sydney, Teatro Colón.',
        color: '#f3c448',
        icon: '🏛️',
      },
      tier2: {
        label: 'Major Metropolitan & National',
        short: 'T2',
        badge: '🎭 Major Metropolitan / National Opera House',
        desc: 'Foremost civic, state, and national opera houses with year-round resident companies: Cape Town Opera, Canadian Opera Company, Opera Philadelphia, Washington National Opera, Oper Leipzig, Houston Grand Opera, Gothenburg Opera.',
        color: '#c9a13b',
        icon: '🎭',
      },
      tier3: {
        label: 'Boutique & Renowned Festivals',
        short: 'T3',
        badge: '🎪 Boutique Stage & Renowned Festival',
        desc: 'High-standard professional companies in intimate historic jewel boxes or dedicated seasonal festivals: Central City Opera, Wheeler / Aspen, Bravo! Vail, Santa Fe, Glimmerglass, Chautauqua, Tanglewood, Wolf Trap, Spoleto Festival USA, Savonlinna, Verona, Glyndebourne.',
        color: '#b91c1c',
        icon: '🎪',
      },
      tier4: {
        label: 'Historic Court Theatres & Boomtown Halls',
        short: 'T4',
        badge: '💎 Historic Court Theatre & Boomtown Hall',
        desc: 'Intact European court theatres preserved with original machinery (Teatro Olimpico, Drottningholm Court Theatre, Margravial Opera House, Versailles) alongside authentic 19th-century Gilded Age / Boomtown buildings erected as "Opera Houses" (Fulton Opera House, Tabor Opera House, Wright Opera House, Woodward Opera House).',
        color: '#2563eb',
        icon: '💎',
      },
    },
    overviewCards: [
      {
        icon: '🏛️',
        title: 'Global Premier Opera Houses (Tier 1)',
        color: 'text-amber-200',
        description: 'The world’s top institutions: La Scala, Met NYC, Vienna State Opera, Royal Opera House Covent Garden, Paris Garnier, Cairo Opera House, Royal Swedish Opera, Sydney, Teatro Colón.',
      },
      {
        icon: '🎭',
        title: 'Major Metropolitan & National Houses (Tier 2)',
        color: 'text-amber-400/90',
        description: 'Cape Town Opera, Canadian Opera Company, Houston, Seattle, Leipzig, Gothenburg, Tokyo NNTT, Hamburg, Frankfurt, Teatro dell\'Opera di Roma.',
      },
      {
        icon: '🎪',
        title: 'Boutique Stages & Historic Festivals (Tier 3)',
        color: 'text-red-400',
        description: 'World-renowned festivals and boutique stages: Arena di Verona, Bayreuth, Salzburg, Glyndebourne, Savonlinna, Santa Fe, Central City, Tanglewood.',
      },
      {
        icon: '💎',
        title: 'Historic Court Theatres & Boomtown Gems (Tier 4)',
        color: 'text-blue-400',
        description: 'Intact 18th-century royal court theatres (Drottningholm, Versailles, Margravial, Teatro Olimpico) and authentic 19th-century American boomtown halls (Fulton, Tabor, Wright, Woodward).',
      },
    ],
  },
  items: OPERA_ITEMS,
};
