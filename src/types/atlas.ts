export type AtlasRegion = 'ALL' | 'Europe' | 'Americas' | 'Asia-Pacific' | 'Middle East & Africa';

export interface AtlasHighlight {
  title: string;
  subtitle?: string;            // e.g. "by Giuseppe Verdi" or "Central Sanctuary"
  badge?: string;               // e.g. "10 performances" or "Criterion (i)"
  datesOrPeriod?: string;       // e.g. "June – July 2026" or "c. 1450 CE"
  curatorOrArchitect?: string;  // e.g. "Cond: Riccardo Chailly" or "Architect: Ustad Ahmad Lahori"
  notes?: string;               // e.g. "Staged on the historic proscenium" or "Constructed of dry-stone granite"
}

export interface AtlasAttribute {
  label: string;
  value: string | number;
  icon?: 'landmark' | 'calendar' | 'users' | 'shield' | 'compass' | 'award' | 'trees' | 'globe';
}

export interface AtlasItem {
  id: string;
  name: string;
  city: string;
  country: string;
  region: 'Europe' | 'Americas' | 'Asia-Pacific' | 'Middle East & Africa';
  latitude: number;
  longitude: number;
  tier: 1 | 2 | 3 | 4 | 5;
  websiteUrl?: string;
  description: string;

  // Thematic metadata labels and values
  yearLabel?: string;            // e.g. "Inaugurated" or "Inscribed"
  yearValue?: number | string;   // e.g. 1778 or 1983
  categoryLabel?: string;        // e.g. "Style" or "Category"
  categoryValue?: string;        // e.g. "Neoclassical Horseshoe" or "Cultural Heritage"
  statLabel?: string;            // e.g. "Capacity" or "Zone Area"
  statValue?: string;            // e.g. "2,030 seats" or "32,592 ha"

  historicSignificance?: string; // Outstanding Universal Value (OUV) or Cultural Legacy
  highlightsTitle?: string;       // e.g. "Season Highlights" or "Key Monuments & Sites"
  highlights?: AtlasHighlight[];

  customAttributes?: AtlasAttribute[];
}

export interface DatasetThemeConfig {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  searchPlaceholder: string;
  searchSuggestion: string;
  tierLabels: {
    tier1: { label: string; short: string; badge: string; desc: string; color: string; icon: string };
    tier2: { label: string; short: string; badge: string; desc: string; color: string; icon: string };
    tier3: { label: string; short: string; badge: string; desc: string; color: string; icon: string };
    tier4: { label: string; short: string; badge: string; desc: string; color: string; icon: string };
    tier5?: { label: string; short: string; badge: string; desc: string; color: string; icon: string };
  };
  overviewCards: {
    icon: string;
    title: string;
    color: string;
    description: string;
  }[];
}

export interface AtlasDataset {
  config: DatasetThemeConfig;
  items: AtlasItem[];
}
