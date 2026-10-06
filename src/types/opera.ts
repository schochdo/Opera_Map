export interface HistoricPremiere {
  title: string;
  composer: string;
  premiereYear: number | string; // e.g. 1851, 1904, 1926
  type?: 'WORLD_PREMIERE' | 'HISTORIC_STAGING' | 'INAUGURAL_OPERA';
  details?: string; // e.g. "Conducted by Arturo Toscanini" or "Starring Enrico Caruso"
}

export interface OperaHouse {
  id: string;
  name: string;
  city: string;
  country: string;
  region: 'Europe' | 'Americas' | 'Asia-Pacific' | 'Middle East & Africa';
  latitude: number;
  longitude: number;
  tier: 1 | 2 | 3 | 4;
  venueType: 'MAJOR_OPERA_HOUSE' | 'REGIONAL_HOUSE' | 'FESTIVAL' | 'HISTORIC_GEM';
  seasonalOnly?: boolean;
  websiteUrl: string;
  description: string;

  // Verified Architectural & Structural Specs
  inauguratedYear?: number;
  architect?: string;
  architecturalStyle?: string;
  capacity?: string;
  historicSignificance?: string;

  // Verified Historical World Premieres & Landmark Milestones
  historicPremieres?: HistoricPremiere[];
}
