export type PatronageType =
  | 'ROYAL_COURT'           // 👑 Royal, Imperial, or Ducal Court Commission
  | 'COMMERCIAL_IMPRESARIO' // 🎟️ Commercial Impresario / Box Office Subscription
  | 'SUBURBAN_POPULAR'      // 🎪 Popular / Suburban Public Commercial Theatre
  | 'PRIVATE_BENEFACTOR'    // 🏰 Private Noble / Philanthropic Benefactor
  | 'CIVIC_STATE'           // 🏛️ Civic / Municipal / National State Commission
  | 'FESTIVAL_COMMISSION';  // 🌟 International Summer Festival Commission

export type BuildingStatus =
  | 'ACTIVE_OPERA_HOUSE'    // Currently active opera house or festival stage
  | 'HISTORIC_MONUMENT'     // Preserved historical theatre / palace monument (e.g. Cuvilliés, Palazzo Ducale)
  | 'DEMOLISHED_LOST_SITE'; // Historic landmark building no longer standing (e.g. Old Burgtheater, Teatro San Cassiano)

export type PremiereType =
  | 'WORLD_PREMIERE'        // Truly the first performance of the work anywhere in the world
  | 'CONTINENTAL_PREMIERE'  // Continental premiere (e.g. Asian Premiere, American Premiere)
  | 'NATIONAL_PREMIERE'     // National / regional premiere (e.g. Romanian Premiere, Bulgarian Premiere)
  | 'INAUGURAL_STAGING'     // Inaugural gala or opening opera of the theatre/hall
  | 'HISTORIC_STAGING';     // Milestone festival production, repertory cycle, or historic revival

export interface HistoricPremiere {
  title: string;
  composer: string;
  premiereYear: number | string; // e.g. 1851, 1904, 1926
  type?: PremiereType | 'INAUGURAL_OPERA';
  details?: string; // e.g. "Conducted by Arturo Toscanini" or "Starring Enrico Caruso"
  conductor?: string; // e.g. "Wolfgang Amadeus Mozart", "Giovanni Bottesini"
  patronageType?: PatronageType;
  commissionContext?: string; // e.g. "Commissioned by Emperor Joseph II for imperial court"
}

export interface OperaHouse {
  id: string;
  name: string;
  city: string;
  country: string;
  region: 'Europe' | 'Americas' | 'Asia-Pacific' | 'Middle East & Africa';
  latitude: number;
  longitude: number;
  tier: 1 | 2 | 3 | 4 | 5;
  venueType: 'MAJOR_OPERA_HOUSE' | 'REGIONAL_HOUSE' | 'FESTIVAL' | 'HISTORIC_GEM';
  seasonalOnly?: boolean;
  websiteUrl?: string;
  description: string;

  // Verified Summer Orchestral Residency (if hosting an official residency by a major symphony)
  summerOrchestralResidency?: string;

  // Heritage & Succession Context
  buildingStatus?: BuildingStatus;
  demolishedYear?: number;
  historicalLineage?: string; // What replaced it or where its artistic company transitioned
  predecessorVenue?: string;  // Predecessor theatre (e.g. "Khedivial Opera House (1869–1971)")
  successorVenue?: string;    // Successor venue if demolished (e.g. "Burgtheater on the Ringstraße (1888)")

  // Verified Architectural & Structural Specs
  inauguratedYear?: number;
  architect?: string;
  architecturalStyle?: string;
  capacity?: string;
  historicSignificance?: string;

  // Verified Historical World Premieres & Landmark Milestones
  historicPremieres?: HistoricPremiere[];
}
