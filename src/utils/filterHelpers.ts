import { OperaHouse, PatronageType } from '../types/opera';

export type HistoricalEra =
  | 'ALL'
  | 'ANTIQUITY'
  | 'RENAISSANCE_17TH'
  | '18TH_CENTURY'
  | '19TH_CENTURY'
  | '20TH_CENTURY'
  | '21ST_CENTURY';

export interface EraDefinition {
  id: HistoricalEra;
  label: string;
  shortLabel: string;
  yearRange: string;
  description: string;
}

export const HISTORICAL_ERAS: EraDefinition[] = [
  {
    id: 'ALL',
    label: 'All Historical Eras',
    shortLabel: 'All Eras',
    yearRange: 'Antiquity – Present',
    description: 'All 376 world stages and landmark sites across all epochs',
  },
  {
    id: 'ANTIQUITY',
    label: 'Antiquity (Greco-Roman Amphitheaters)',
    shortLabel: 'Antiquity (< 500 AD)',
    yearRange: '30 AD – 499 AD',
    description: 'Active ancient Roman & Greek amphitheaters (Verona, Orange, Taormina, Baalbek, Jerash)',
  },
  {
    id: 'RENAISSANCE_17TH',
    label: 'Renaissance & 17th Century',
    shortLabel: '16th & 17th C. (1500–1699)',
    yearRange: '1500 – 1699',
    description: 'Renaissance & Early Baroque masters (Teatro Olimpico, Teatro Farnese, Ekhof-Theater, Malibran)',
  },
  {
    id: '18TH_CENTURY',
    label: '18th Century (Baroque & Enlightenment)',
    shortLabel: '18th Century (1700–1799)',
    yearRange: '1700 – 1799',
    description: 'Royal court theatres, Bibiena jewel boxes & imperial stages (Versailles, Drottningholm, La Scala, La Fenice)',
  },
  {
    id: '19TH_CENTURY',
    label: '19th Century (Romantic & Golden Age)',
    shortLabel: '19th Century (1800–1899)',
    yearRange: '1800 – 1899',
    description: 'Grand opera temples & historicist palaces (Palais Garnier, Vienna, Covent Garden, Bolshoi, Central City)',
  },
  {
    id: '20TH_CENTURY',
    label: '20th Century (Modernist & Post-War)',
    shortLabel: '20th Century (1900–1999)',
    yearRange: '1900 – 1999',
    description: 'Modernist monuments, civic houses & iconic summer sheds (Met Lincoln Center, Sydney, Tanglewood, Ravinia)',
  },
  {
    id: '21ST_CENTURY',
    label: '21st Century (Contemporary Landmarks)',
    shortLabel: '21st Century (2000–Present)',
    yearRange: '2000 – Present',
    description: 'Contemporary marvels, acoustic tents & high-tech halls (Aspen Benedict Tent, Oslo, Guangzhou, Elbphilharmonie)',
  },
];

export function getHouseEra(house: OperaHouse): HistoricalEra {
  const y = house.inauguratedYear;
  if (!y) return 'ALL';
  if (y < 500) return 'ANTIQUITY';
  if (y < 1700) return 'RENAISSANCE_17TH';
  if (y < 1800) return '18TH_CENTURY';
  if (y < 1900) return '19TH_CENTURY';
  if (y < 2000) return '20TH_CENTURY';
  return '21ST_CENTURY';
}

export type StyleCategory =
  | 'ALL'
  | 'ANCIENT_AMPHITHEATER'
  | 'BAROQUE_ROCOCO'
  | 'NEOCLASSICAL_BEAUXARTS'
  | 'ART_NOUVEAU_DECO'
  | 'MODERNIST_POSTWAR'
  | 'CONTEMPORARY_TENTS';

export interface StyleDefinition {
  id: StyleCategory;
  label: string;
  description: string;
}

export const ARCHITECTURAL_STYLES: StyleDefinition[] = [
  { id: 'ALL', label: 'All Architectural Styles', description: 'All architectural formats' },
  {
    id: 'ANCIENT_AMPHITHEATER',
    label: 'Ancient Roman & Greek Amphitheaters',
    description: 'Preserved classical stone amphitheatres & outdoor antiquities',
  },
  {
    id: 'BAROQUE_ROCOCO',
    label: 'Renaissance, Baroque & Rococo',
    description: 'Intact court theatres, gilded horseshoe boxes & trompe-l’œil',
  },
  {
    id: 'NEOCLASSICAL_BEAUXARTS',
    label: 'Neoclassical & Beaux-Arts Palaces',
    description: 'Monumental 19th-century proscenium opera palaces & colonnades',
  },
  {
    id: 'ART_NOUVEAU_DECO',
    label: 'Art Nouveau, Jugendstil & Art Deco',
    description: 'Fin-de-siècle floral curves, Catalan Modernisme & 1920s Deco',
  },
  {
    id: 'MODERNIST_POSTWAR',
    label: 'Modernist, Brutalist & Post-War',
    description: 'Mid-century concrete expressionism & variable acoustic halls',
  },
  {
    id: 'CONTEMPORARY_TENTS',
    label: 'Contemporary Tents, Pavilions & Quarries',
    description: 'Acoustic fabric tents, open-air summer sheds & landscape arenas',
  },
];

export function getHouseStyleCategory(house: OperaHouse): StyleCategory {
  const s = (house.architecturalStyle || '').toLowerCase();
  const y = house.inauguratedYear || 2000;

  if (y < 500 || ['roman', 'greek', 'amphitheater', 'amphitheatre', 'hellenistic', 'scaenae'].some(k => s.includes(k))) {
    return 'ANCIENT_AMPHITHEATER';
  }
  if (['art nouveau', 'art deco', 'jugendstil', 'modernisme', 'liberty', 'prairie-style', 'mission'].some(k => s.includes(k))) {
    return 'ART_NOUVEAU_DECO';
  }
  if (['baroque', 'rococo', 'renaissance', 'palladian', 'trompe', 'bibiena'].some(k => s.includes(k))) {
    return 'BAROQUE_ROCOCO';
  }
  if (['neoclassical', 'beaux-arts', 'beaux arts', 'neo-renaissance', 'neo-baroque', 'eclectic', 'historicist', 'victorian', 'gothic', 'moorish', 'italianate', 'gilded'].some(k => s.includes(k))) {
    return 'NEOCLASSICAL_BEAUXARTS';
  }
  if (['tensile', 'tent', 'canopy', 'quarry', 'timber', 'contemporary', 'deconstructivist', 'high-tech', 'variable-acoustic'].some(k => s.includes(k))) {
    return 'CONTEMPORARY_TENTS';
  }
  if (['modernist', 'brutalist', 'structuralist', 'mid-century', 'post-war', 'functionalist', 'postmodern'].some(k => s.includes(k))) {
    return 'MODERNIST_POSTWAR';
  }
  return 'NEOCLASSICAL_BEAUXARTS';
}

export interface MasterArchitect {
  id: string;
  name: string;
  displayName: string;
  notableWorks: string;
  count: number;
}

export const MASTER_ARCHITECTS: MasterArchitect[] = [
  {
    id: 'FELLNER_HELMER',
    name: 'Fellner & Helmer',
    displayName: 'Ferdinand Fellner & Hermann Helmer (8)',
    notableWorks: 'Zürich, Zagreb, Bratislava, Odesa, Cluj, Wiesbaden, Timișoara, Iași',
    count: 8,
  },
  {
    id: 'MATCHAM',
    name: 'Frank Matcham',
    displayName: 'Frank Matcham (5)',
    notableWorks: 'London Coliseum, Sadler’s Wells, Buxton, Belfast Grand Opera, Edinburgh',
    count: 5,
  },
  {
    id: 'BIBIENA',
    name: 'Galli da Bibiena',
    displayName: 'Galli da Bibiena Family (3)',
    notableWorks: 'Margravial Bayreuth, Teatro Bibiena Mantua, Teatro Comunale Bologna',
    count: 3,
  },
  {
    id: 'PELLI',
    name: 'César Pelli',
    displayName: 'César Pelli (3)',
    notableWorks: 'Adrienne Arsht Miami, Overture Madison, Belk Theater Charlotte',
    count: 3,
  },
  {
    id: 'GARNIER',
    name: 'Charles Garnier',
    displayName: 'Charles Garnier (2)',
    notableWorks: 'Palais Garnier Paris, Opéra de Monte-Carlo',
    count: 2,
  },
  {
    id: 'HADID',
    name: 'Zaha Hadid',
    displayName: 'Zaha Hadid (2)',
    notableWorks: 'Guangzhou Opera House, Grand Théâtre de Rabat',
    count: 2,
  },
  {
    id: 'SNOHETTA',
    name: 'Snøhetta',
    displayName: 'Snøhetta (2)',
    notableWorks: 'Oslo Opera House, King Fahad Cultural Centre Riyadh',
    count: 2,
  },
  {
    id: 'NOUVEL',
    name: 'Jean Nouvel',
    displayName: 'Jean Nouvel (2)',
    notableWorks: 'KKL Luzern, Opéra National de Lyon',
    count: 2,
  },
  {
    id: 'WEESE',
    name: 'Harry Weese',
    displayName: 'Harry Weese (2)',
    notableWorks: 'Benedict Music Tent Aspen, Marcus Center Milwaukee',
    count: 2,
  },
  {
    id: 'UTZON',
    name: 'Jørn Utzon',
    displayName: 'Jørn Utzon (1)',
    notableWorks: 'Sydney Opera House',
    count: 1,
  },
  {
    id: 'PALLADIO',
    name: 'Andrea Palladio',
    displayName: 'Andrea Palladio (1)',
    notableWorks: 'Teatro Olimpico Vicenza (1585)',
    count: 1,
  },
  {
    id: 'SEMPER',
    name: 'Gottfried Semper',
    displayName: 'Gottfried Semper (2)',
    notableWorks: 'Semperoper Dresden, Burgtheater Vienna',
    count: 2,
  },
  {
    id: 'PIERMARINI',
    name: 'Giuseppe Piermarini',
    displayName: 'Giuseppe Piermarini (1)',
    notableWorks: 'Teatro alla Scala Milan (1778)',
    count: 1,
  },
  {
    id: 'PIANO',
    name: 'Renzo Piano',
    displayName: 'Renzo Piano (1)',
    notableWorks: 'Greek National Opera SNFCC Athens',
    count: 1,
  },
];

export function matchesArchitectFilter(house: OperaHouse, architectId: string): boolean {
  if (architectId === 'ALL') return true;
  const arch = (house.architect || '').toLowerCase();
  switch (architectId) {
    case 'FELLNER_HELMER':
      return arch.includes('fellner') || arch.includes('helmer');
    case 'MATCHAM':
      return arch.includes('matcham');
    case 'BIBIENA':
      return arch.includes('bibiena');
    case 'PELLI':
      return arch.includes('pelli');
    case 'GARNIER':
      return arch.includes('garnier');
    case 'HADID':
      return arch.includes('hadid');
    case 'SNOHETTA':
      return arch.includes('snøhetta') || arch.includes('snohetta');
    case 'NOUVEL':
      return arch.includes('nouvel');
    case 'WEESE':
      return arch.includes('weese');
    case 'UTZON':
      return arch.includes('utzon');
    case 'PALLADIO':
      return arch.includes('palladio');
    case 'SEMPER':
      return arch.includes('semper');
    case 'PIERMARINI':
      return arch.includes('piermarini');
    case 'PIANO':
      return arch.includes('piano');
    default:
      return arch.includes(architectId.toLowerCase());
  }
}

export function getEraDefinition(era: HistoricalEra): EraDefinition | undefined {
  return HISTORICAL_ERAS.find((e) => e.id === era);
}

export function getStyleDefinition(style: StyleCategory): StyleDefinition | undefined {
  return ARCHITECTURAL_STYLES.find((s) => s.id === style);
}

export function getMasterArchitect(id: string): MasterArchitect | undefined {
  return MASTER_ARCHITECTS.find((a) => a.id === id);
}

export function findMasterArchitectId(architectName: string | undefined): string | null {
  if (!architectName) return null;
  const dummyHouse = { architect: architectName } as OperaHouse;
  for (const m of MASTER_ARCHITECTS) {
    if (matchesArchitectFilter(dummyHouse, m.id)) {
      return m.id;
    }
  }
  return null;
}

export interface ComposerFilter {
  id: string;
  name: string;
  displayName: string;
  era: string;
}

export const MAJOR_COMPOSERS: ComposerFilter[] = [
  { id: 'ALL', name: 'All Composers', displayName: 'All Composers', era: 'All Eras' },
  { id: 'MOZART', name: 'Wolfgang Amadeus Mozart', displayName: 'W. A. Mozart (Figaro, Don Giovanni, Zauberflöte)', era: 'Classical' },
  { id: 'VERDI', name: 'Giuseppe Verdi', displayName: 'Giuseppe Verdi (Aida, Rigoletto, Traviata, Nabucco)', era: 'Romantic' },
  { id: 'PUCCINI', name: 'Giacomo Puccini', displayName: 'Giacomo Puccini (La bohème, Tosca, Turandot)', era: 'Late Romantic / Verismo' },
  { id: 'WAGNER', name: 'Richard Wagner', displayName: 'Richard Wagner (Ring Cycle, Tristan, Meistersinger)', era: 'Romantic' },
  { id: 'MONTEVERDI', name: 'Claudio Monteverdi', displayName: 'Claudio Monteverdi (L’Orfeo, Ulisse, Poppea)', era: 'Renaissance / Early Baroque' },
  { id: 'ROSSINI', name: 'Gioachino Rossini', displayName: 'Gioachino Rossini (Barbiere, Tell, Cenerentola)', era: 'Bel Canto' },
  { id: 'STRAUSS_R', name: 'Richard Strauss', displayName: 'Richard Strauss (Rosenkavalier, Salome, Elektra)', era: 'Late Romantic / Modernist' },
  { id: 'BRITTEN', name: 'Benjamin Britten', displayName: 'Benjamin Britten (Peter Grimes, Screw, Lucretia)', era: '20th Century' },
  { id: 'DONIZETTI', name: 'Gaetano Donizetti', displayName: 'Gaetano Donizetti (Lucia, L’elisir, Don Pasquale)', era: 'Bel Canto' },
  { id: 'BELLINI', name: 'Vincenzo Bellini', displayName: 'Vincenzo Bellini (Norma, I puritani, Sonnambula)', era: 'Bel Canto' },
  { id: 'GLUCK', name: 'Christoph Willibald Gluck', displayName: 'C. W. Gluck (Orfeo ed Euridice, Alceste)', era: 'Reform Classical' },
  { id: 'BIZET', name: 'Georges Bizet', displayName: 'Georges Bizet (Carmen, Pêcheurs de perles)', era: 'Romantic' },
  { id: 'TCHAIKOVSKY', name: 'Pyotr Ilyich Tchaikovsky', displayName: 'P. I. Tchaikovsky (Eugene Onegin, Queen of Spades)', era: 'Romantic' },
  { id: 'HAYDN', name: 'Joseph Haydn', displayName: 'Joseph Haydn (Lo speziale, Il mondo della luna, Armida)', era: 'Classical' },
  { id: 'HANDEL', name: 'George Frideric Handel', displayName: 'G. F. Handel (Rinaldo, Giulio Cesare, Rodelinda)', era: 'Baroque' },
  { id: 'LEONCAVALLO', name: 'Ruggero Leoncavallo', displayName: 'Ruggero Leoncavallo (Pagliacci)', era: 'Verismo' },
];

export function houseHasComposerPremiere(house: OperaHouse, composerId: string): boolean {
  if (composerId === 'ALL') return true;
  if (!house.historicPremieres || house.historicPremieres.length === 0) return false;

  const matchTarget = (composerName: string): boolean => {
    const c = (composerName || '').toLowerCase();
    switch (composerId) {
      case 'MOZART':
        return c.includes('mozart');
      case 'VERDI':
        return c.includes('verdi');
      case 'PUCCINI':
        return c.includes('puccini');
      case 'WAGNER':
        return c.includes('wagner');
      case 'MONTEVERDI':
        return c.includes('monteverdi');
      case 'ROSSINI':
        return c.includes('rossini');
      case 'STRAUSS_R':
        return c.includes('richard strauss') || c.includes('r. strauss');
      case 'BRITTEN':
        return c.includes('britten');
      case 'DONIZETTI':
        return c.includes('donizetti');
      case 'BELLINI':
        return c.includes('bellini');
      case 'GLUCK':
        return c.includes('gluck');
      case 'BIZET':
        return c.includes('bizet');
      case 'TCHAIKOVSKY':
        return c.includes('tchaikovsky');
      case 'HAYDN':
        return c.includes('haydn');
      case 'HANDEL':
        return c.includes('handel') || c.includes('händel');
      default:
        return c.includes(composerId.toLowerCase());
    }
  };

  return house.historicPremieres.some((p) => {
    const isActualPremiere =
      p.type === 'WORLD_PREMIERE' ||
      p.type === 'CONTINENTAL_PREMIERE' ||
      p.type === 'NATIONAL_PREMIERE';
    return isActualPremiere && matchTarget(p.composer);
  });
}

export function getComposerFilter(id: string): ComposerFilter | undefined {
  return MAJOR_COMPOSERS.find((c) => c.id === id);
}

export interface PatronageFilter {
  id: string;
  label: string;
  shortLabel: string;
  badgeLabel: string;
  description: string;
  icon: string;
}

export const PATRONAGE_MODELS: PatronageFilter[] = [
  {
    id: 'ALL',
    label: 'All Patronage Models',
    shortLabel: 'All Models',
    badgeLabel: 'All Models',
    description: 'All production, commission, and economic models across history',
    icon: '🎭',
  },
  {
    id: 'ROYAL_COURT',
    label: 'Royal & Imperial Court Commissions',
    shortLabel: 'Royal Court',
    badgeLabel: '👑 Royal Court Commission',
    description: 'Directly financed by monarchs, dukes, and emperors with zero commercial pressure (e.g. Vienna Burgtheater, Mantua Gonzaga, Versailles, Munich Cuvilliés)',
    icon: '👑',
  },
  {
    id: 'COMMERCIAL_IMPRESARIO',
    label: 'Commercial Impresario & Box Office',
    shortLabel: 'Commercial Impresario',
    badgeLabel: '🎟️ Commercial Impresario',
    description: 'Box-office ticket sales and private boxes underwritten by entrepreneurial impresarios (e.g. Barbaja, Merelli, Ricordi, San Cassiano, La Fenice, La Scala)',
    icon: '🎟️',
  },
  {
    id: 'SUBURBAN_POPULAR',
    label: 'Suburban / Popular Public Theatres',
    shortLabel: 'Suburban Popular',
    badgeLabel: '🎪 Suburban Popular Stage',
    description: 'Commercial suburban stages outside noble court walls catering to popular broad audiences (e.g. Freihaustheater auf der Wieden, Theater an der Wien)',
    icon: '🎪',
  },
  {
    id: 'PRIVATE_BENEFACTOR',
    label: 'Private Benefactors & Patron Societies',
    shortLabel: 'Private Benefactors',
    badgeLabel: '🏰 Private Benefactor / Patron Society',
    description: 'Funded by visionary philanthropic patrons, patron certificates, or private family trusts (e.g. Bayreuth Festspiele, Glyndebourne)',
    icon: '🏰',
  },
  {
    id: 'CIVIC_STATE',
    label: 'Civic & National State Commissions',
    shortLabel: 'Civic / State',
    badgeLabel: '🏛️ Civic & State Commission',
    description: 'Commissioned or produced by municipal public theatres or national ministries of culture (e.g. Post-WWII Vienna, Sadler’s Wells, Paris Opéra-Comique)',
    icon: '🏛️',
  },
  {
    id: 'FESTIVAL_COMMISSION',
    label: 'International Festival Commissions',
    shortLabel: 'Festival Commission',
    badgeLabel: '🌟 International Festival Commission',
    description: 'Bespoke prestige commissions created specifically for prestigious summer or biennial festivals (e.g. Venice Biennale, Salzburg Festival, Aldeburgh)',
    icon: '🌟',
  },
];

export function houseHasPatronagePremiere(house: OperaHouse, patronageId: string): boolean {
  if (patronageId === 'ALL') return true;
  if (!house.historicPremieres || house.historicPremieres.length === 0) return false;
  return house.historicPremieres.some((p) => p.patronageType === patronageId);
}

export function getPatronageFilter(id: string): PatronageFilter | undefined {
  return PATRONAGE_MODELS.find((p) => p.id === id);
}

export function getPatronageBadgeInfo(patronageType?: PatronageType) {
  if (!patronageType) return null;
  return PATRONAGE_MODELS.find((p) => p.id === patronageType) || null;
}

export interface PremiereBadgeInfo {
  label: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
}

export function getPremiereBadgeInfo(type?: string): PremiereBadgeInfo {
  switch (type) {
    case 'WORLD_PREMIERE':
      return {
        label: 'World Premiere',
        badgeBg: 'bg-[#7a101b]',
        badgeBorder: 'border-amber-500/70',
        badgeText: 'text-amber-100',
      };
    case 'CONTINENTAL_PREMIERE':
      return {
        label: 'Continental Premiere',
        badgeBg: 'bg-[#153457]',
        badgeBorder: 'border-sky-400/70',
        badgeText: 'text-sky-200',
      };
    case 'NATIONAL_PREMIERE':
      return {
        label: 'National Premiere',
        badgeBg: 'bg-[#291b48]',
        badgeBorder: 'border-purple-400/70',
        badgeText: 'text-purple-200',
      };
    case 'INAUGURAL_STAGING':
    case 'INAUGURAL_OPERA':
      return {
        label: 'Inaugural Staging',
        badgeBg: 'bg-[#3b2b16]',
        badgeBorder: 'border-amber-400/60',
        badgeText: 'text-amber-200',
      };
    case 'HISTORIC_STAGING':
    default:
      return {
        label: 'Historic Staging',
        badgeBg: 'bg-[#1e2c3e]',
        badgeBorder: 'border-slate-500/60',
        badgeText: 'text-slate-200',
      };
  }
}


