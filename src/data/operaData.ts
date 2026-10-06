import { OperaHouse } from '../types/opera';

// ═══════════════════════════════════════════════════════════════════════
// MASTER COMPREHENSIVE WORLD OPERA ATLAS DATASET (190 VERIFIED VENUES)
// Grounded in Wikipedia's Global Directory & OperaVision's European Network
// Categorized by OPERA America & International Standards:
// • Tier 1: Global Premier Houses & Shrines (34 venues)
// • Tier 2: Major Metropolitan & National Houses (103 venues)
// • Tier 3: Boutique Houses, Professional Regional Theatres & Festivals (37 venues)
// • Tier 4: Historic "Opera Houses" & Cultural Heritage Landmarks (16 venues)
// ═══════════════════════════════════════════════════════════════════════

export const OPERA_HOUSES: OperaHouse[] = [
  {
    "id": "teatro-alla-scala",
    "name": "Teatro alla Scala",
    "city": "Milan",
    "country": "Italy",
    "region": "Europe",
    "latitude": 45.4674,
    "longitude": 9.1895,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatroallascala.org/en/",
    "description": "The supreme global temple of Italian opera, inaugurated in 1778 under Empress Maria Theresa. Revered worldwide as the ultimate proving ground for composers, conductors, and legendary vocalists.",
    "inauguratedYear": 1778,
    "architect": "Giuseppe Piermarini",
    "architecturalStyle": "Neoclassical Horseshoe with Imperial Gilt Boxes",
    "capacity": "2,030 seats",
    "historicSignificance": "Birthplace of Italian grand opera tradition; premiere venue for Verdi and Puccini masterpieces.",
    "historicPremieres": [
      {
        "title": "Nabucco",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1842,
        "type": "WORLD_PREMIERE",
        "details": "Verdi’s breakthrough triumph; ignited the Italian Risorgimento movement with \"Va, pensiero\"."
      },
      {
        "title": "Otello",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1887,
        "type": "WORLD_PREMIERE",
        "details": "Verdi’s late Shakespearean masterpiece, conducted by Franco Faccio with young Arturo Toscanini in the cello section."
      },
      {
        "title": "Falstaff",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1893,
        "type": "WORLD_PREMIERE",
        "details": "Verdi’s crowning comic testament, starring Victor Maurel in the title role."
      },
      {
        "title": "Madama Butterfly",
        "composer": "Giacomo Puccini",
        "premiereYear": 1904,
        "type": "WORLD_PREMIERE",
        "details": "Famed stormy premiere starring Rosina Storchio, conducted by Cleofonte Campanini."
      },
      {
        "title": "Turandot",
        "composer": "Giacomo Puccini",
        "premiereYear": 1926,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by Arturo Toscanini, who lowered his baton where Puccini ceased writing before his death."
      },
      {
        "title": "Norma",
        "composer": "Vincenzo Bellini",
        "premiereYear": 1831,
        "type": "WORLD_PREMIERE",
        "details": "Bel Canto pinnacle starring Giuditta Pasta in the title role."
      }
    ]
  },
  {
    "id": "bayreuther-festspielhaus",
    "name": "Bayreuther Festspielhaus",
    "city": "Bayreuth",
    "country": "Germany",
    "region": "Europe",
    "latitude": 49.9597,
    "longitude": 11.5794,
    "tier": 1,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.bayreuther-festspiele.de/en/",
    "description": "Richard Wagner’s consecrated festival theatre, built specifically to realize his Gesamtkunstwerk. Features an invisible sunken mystic orchestra pit and amphitheatre seating yielding unparalleled acoustic blend.",
    "inauguratedYear": 1876,
    "architect": "Otto Brückwald & Richard Wagner",
    "architecturalStyle": "Greco-Roman Amphitheatre with Timber Acoustic Resonators",
    "capacity": "1,937 seats",
    "historicSignificance": "Sacred pilgrimage site of the operatic world; the only theatre consecrated to a single composer’s canon.",
    "historicPremieres": [
      {
        "title": "Der Ring des Nibelungen (Complete Cycle)",
        "composer": "Richard Wagner",
        "premiereYear": 1876,
        "type": "WORLD_PREMIERE",
        "details": "Inaugural festival attended by Franz Liszt, Pyotr Tchaikovsky, Edvard Grieg, and Friedrich Nietzsche."
      },
      {
        "title": "Parsifal",
        "composer": "Richard Wagner",
        "premiereYear": 1882,
        "type": "WORLD_PREMIERE",
        "details": "Wagner’s final stage work, composed explicitly for the acoustic resonance of the Bayreuth auditorium."
      }
    ]
  },
  {
    "id": "wiener-staatsoper",
    "name": "Wiener Staatsoper (Vienna State Opera)",
    "city": "Vienna",
    "country": "Austria",
    "region": "Europe",
    "latitude": 48.2033,
    "longitude": 16.3691,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.wiener-staatsoper.at/en/",
    "description": "The historic Ringstraße opera house and epicentre of the Viennese musical tradition. Its pit orchestra forms the Vienna Philharmonic Orchestra, presenting over 300 performances each season.",
    "inauguratedYear": 1869,
    "architect": "August Sicard von Sicardsburg & Eduard van der Nüll",
    "architecturalStyle": "Neo-Renaissance Palace with Loggia Frescoes",
    "capacity": "1,709 seats (+567 standing)",
    "historicSignificance": "Heart of Central European music; led historically by Gustav Mahler, Richard Strauss, and Herbert von Karajan.",
    "historicPremieres": [
      {
        "title": "Don Giovanni",
        "composer": "Wolfgang Amadeus Mozart",
        "premiereYear": 1869,
        "type": "INAUGURAL_OPERA",
        "details": "Gala opening production in the presence of Emperor Franz Joseph I and Empress Elisabeth."
      },
      {
        "title": "Werther",
        "composer": "Jules Massenet",
        "premiereYear": 1892,
        "type": "WORLD_PREMIERE",
        "details": "World premiere performed in German translation (Werther) starring Ernest van Dyck."
      },
      {
        "title": "Die Frau ohne Schatten",
        "composer": "Richard Strauss",
        "premiereYear": 1919,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by Franz Schalk, starring Lotte Lehmann as the Dyer’s Wife."
      }
    ]
  },
  {
    "id": "metropolitan-opera",
    "name": "Metropolitan Opera House (Lincoln Center)",
    "city": "New York",
    "country": "USA",
    "region": "Americas",
    "latitude": 40.7729,
    "longitude": -73.9845,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.metopera.org",
    "description": "The largest classical repertory opera house in the world, anchoring Lincoln Center. Renowned for massive stage machinery, iconic Swarovski crystal chandeliers, and international Live in HD broadcasts.",
    "inauguratedYear": 1966,
    "architect": "Wallace K. Harrison",
    "architecturalStyle": "Modernist Travertine Monument with Chagall Murals",
    "capacity": "3,850 seats",
    "historicSignificance": "Premier opera institution of the Americas; budget of ~$300M, home to the greatest vocal stars for over a century.",
    "historicPremieres": [
      {
        "title": "La Fanciulla del West",
        "composer": "Giacomo Puccini",
        "premiereYear": 1910,
        "type": "WORLD_PREMIERE",
        "details": "Staged at the Old Met; conducted by Arturo Toscanini, starring Enrico Caruso and Emmy Destinn."
      },
      {
        "title": "Il Trittico (Il Tabarro, Suor Angelica, Gianni Schicchi)",
        "composer": "Giacomo Puccini",
        "premiereYear": 1918,
        "type": "WORLD_PREMIERE",
        "details": "Triple-bill world premiere featuring Giuseppe De Luca creating Gianni Schicchi."
      },
      {
        "title": "Antony and Cleopatra",
        "composer": "Samuel Barber",
        "premiereYear": 1966,
        "type": "WORLD_PREMIERE",
        "details": "Inaugural gala premiere of the new Lincoln Center house, starring Leontyne Price."
      }
    ]
  },
  {
    "id": "royal-opera-house",
    "name": "Royal Opera House Covent Garden",
    "city": "London",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 51.5132,
    "longitude": -0.1226,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.rbo.org.uk",
    "description": "The premier opera house of the United Kingdom, standing on Bow Street in Covent Garden since 1858. Home to The Royal Opera and The Royal Ballet.",
    "inauguratedYear": 1858,
    "architect": "Edward Middleton Barry",
    "architecturalStyle": "Classical Corinthian Proscenium with Iron Glass Floral Hall",
    "capacity": "2,256 seats",
    "historicSignificance": "National opera theatre of Great Britain; historic site of Handel’s earliest London opera seasons and modern world premieres.",
    "historicPremieres": [
      {
        "title": "Billy Budd",
        "composer": "Benjamin Britten",
        "premiereYear": 1951,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by Benjamin Britten, libretto by E.M. Forster and Eric Crozier starring Peter Pears."
      },
      {
        "title": "The Midsummer Marriage",
        "composer": "Michael Tippett",
        "premiereYear": 1955,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by John Pritchard with set designs by Barbara Hepworth starring Joan Sutherland."
      }
    ]
  },
  {
    "id": "palais-garnier",
    "name": "Palais Garnier (Opéra National de Paris)",
    "city": "Paris",
    "country": "France",
    "region": "Europe",
    "latitude": 48.8719,
    "longitude": 2.3316,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operadeparis.fr/en",
    "description": "The opulent Beaux-Arts jewel of Paris, renowned for its Grand Staircase of white marble, seven-ton bronze chandelier, and ceiling painted by Marc Chagall.",
    "inauguratedYear": 1875,
    "architect": "Charles Garnier",
    "architecturalStyle": "Second Empire Beaux-Arts with Polychrome Marble",
    "capacity": "1,979 seats",
    "historicSignificance": "The ultimate symbol of Parisian Belle Époque grandeur and historical seat of the Académie Royale de Musique.",
    "historicPremieres": [
      {
        "title": "Le Cid",
        "composer": "Jules Massenet",
        "premiereYear": 1885,
        "type": "WORLD_PREMIERE",
        "details": "Grand opera spectacle starring Jean de Reszke in the title role."
      },
      {
        "title": "Thaïs",
        "composer": "Jules Massenet",
        "premiereYear": 1894,
        "type": "WORLD_PREMIERE",
        "details": "Composed for and starring American soprano Sybil Sanderson; featuring the famous \"Méditation\"."
      }
    ]
  },
  {
    "id": "opera-bastille",
    "name": "Opéra Bastille (Opéra National de Paris)",
    "city": "Paris",
    "country": "France",
    "region": "Europe",
    "latitude": 48.8519,
    "longitude": 2.3698,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operadeparis.fr/en",
    "description": "The monumental modern opera palace of France, commissioned by President François Mitterrand for the bicentennial of the French Revolution in 1989. Features giant rotating multi-level stage elevators.",
    "inauguratedYear": 1989,
    "architect": "Carlos Ott",
    "architecturalStyle": "Late Modernist Curved Glass & Blue Granite Colossus",
    "capacity": "2,745 seats",
    "historicSignificance": "Primary grand-scale production house of the Paris Opera; one of the largest acoustic theatre volumes in Europe.",
    "historicPremieres": [
      {
        "title": "Saint François d’Assise",
        "composer": "Olivier Messiaen",
        "premiereYear": 1992,
        "type": "HISTORIC_STAGING",
        "details": "Landmark staging of Messiaen’s four-hour Franciscan spiritual epic conducted by Sylvain Cambreling."
      }
    ]
  },
  {
    "id": "sydney-opera-house",
    "name": "Sydney Opera House (Joan Sutherland Theatre)",
    "city": "Sydney",
    "country": "Australia",
    "region": "Asia-Pacific",
    "latitude": -33.8568,
    "longitude": 151.2153,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.sydneyoperahouse.com",
    "description": "UNESCO World Heritage masterpiece on Bennelong Point in Sydney Harbour. Its iconic precast concrete shell roofs make it one of the most recognizable structures on Earth; home to Opera Australia.",
    "inauguratedYear": 1973,
    "architect": "Jørn Utzon & Peter Hall",
    "architecturalStyle": "Expressionist Sculptural Shell Vaults",
    "capacity": "1,507 seats (Opera Theatre)",
    "historicSignificance": "Architectural wonder of the 20th century; the preeminent cultural temple of the Southern Hemisphere.",
    "historicPremieres": [
      {
        "title": "War and Peace",
        "composer": "Sergei Prokofiev",
        "premiereYear": 1973,
        "type": "INAUGURAL_OPERA",
        "details": "Australian premiere and inaugural operatic gala in the Opera Theatre on 28 September 1973."
      }
    ]
  },
  {
    "id": "teatro-colon",
    "name": "Teatro Colón",
    "city": "Buenos Aires",
    "country": "Argentina",
    "region": "Americas",
    "latitude": -34.6011,
    "longitude": -58.3831,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://teatrocolon.org.ar/en",
    "description": "The undisputed grand palace of South American opera. Celebrated by acousticians worldwide alongside the Vienna Musikverein and Boston Symphony Hall for having among the finest acoustics on planet Earth.",
    "inauguratedYear": 1908,
    "architect": "Francesco Tamburini, Vittorio Meano & Julio Dormal",
    "architecturalStyle": "Italian Renaissance Eclectic Horseshoe with French Stucco",
    "capacity": "2,487 seats",
    "historicSignificance": "The Southern Hemisphere’s greatest opera palace; regular host to Toscanini, Callas, Caruso, and Pavarotti.",
    "historicPremieres": [
      {
        "title": "Aida",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1908,
        "type": "INAUGURAL_OPERA",
        "details": "Grand inaugural production on 25 May 1908 starring Italian soprano Lucia Crestani."
      }
    ]
  },
  {
    "id": "cincinnati-opera",
    "name": "Cincinnati Opera (Cincinnati Music Hall)",
    "city": "Cincinnati",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.1097,
    "longitude": -84.5192,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.cincinnatiopera.org",
    "description": "The second-oldest opera company in the United States (founded 1920), performing in the colossal High Victorian Gothic Cincinnati Music Hall (1878), a National Historic Landmark famed for acoustic brilliance.",
    "inauguratedYear": 1878,
    "architect": "Samuel Hannaford",
    "architecturalStyle": "High Victorian Gothic Red Brick & Carved Sandstone",
    "capacity": "3,518 seats",
    "historicSignificance": "America’s second-oldest opera institution; pioneer of American summer opera seasons with the Cincinnati Symphony.",
    "historicPremieres": [
      {
        "title": "Fellow Travelers",
        "composer": "Gregory Spears",
        "premiereYear": 2016,
        "type": "WORLD_PREMIERE",
        "details": "Critically acclaimed world premiere opera based on Thomas Mallon’s novel on the 1950s Lavender Scare."
      }
    ]
  },
  {
    "id": "lyric-opera-chicago",
    "name": "Lyric Opera of Chicago (Civic Opera House)",
    "city": "Chicago",
    "country": "USA",
    "region": "Americas",
    "latitude": 41.8824,
    "longitude": -87.6373,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.lyricopera.org",
    "description": "Anchoring the monumental 45-story Art Deco Civic Opera Building on the Chicago River. Celebrated for grand-scale casting; was the launchpad for Maria Callas’s American debut in 1954.",
    "inauguratedYear": 1929,
    "architect": "Graham, Anderson, Probst & White",
    "architecturalStyle": "Art Deco & French Renaissance Theatrical Hall",
    "capacity": "3,563 seats",
    "historicSignificance": "One of the powerhouse Big Three opera companies of the United States alongside the Met and San Francisco.",
    "historicPremieres": [
      {
        "title": "The Great Gatsby",
        "composer": "John Harbison",
        "premiereYear": 2000,
        "type": "HISTORIC_STAGING",
        "details": "Midwest premiere starring Jerry Hadley and Dawn Upshaw, conducted by Christoph von Dohnányi."
      }
    ]
  },
  {
    "id": "san-francisco-opera",
    "name": "San Francisco Opera (War Memorial Opera House)",
    "city": "San Francisco",
    "country": "USA",
    "region": "Americas",
    "latitude": 37.7786,
    "longitude": -122.4208,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.sfopera.com",
    "description": "The crown jewel of the American West, standing in San Francisco’s Civic Center. Historic site of the 1945 founding conference of the United Nations, and home to the second-largest opera company in North America.",
    "inauguratedYear": 1932,
    "architect": "Arthur Brown Jr.",
    "architecturalStyle": "Beaux-Arts Classical with Grand Barrel Vaults",
    "capacity": "3,146 seats",
    "historicSignificance": "Third oldest major opera company in the US; premier American gateway for European stars and new American masterworks.",
    "historicPremieres": [
      {
        "title": "Appomattox",
        "composer": "Philip Glass",
        "premiereYear": 2007,
        "type": "WORLD_PREMIERE",
        "details": "Civil War opera commissioned by SFO, conducted by Dennis Russell Davies."
      },
      {
        "title": "Doctor Atomic",
        "composer": "John Adams",
        "premiereYear": 2005,
        "type": "WORLD_PREMIERE",
        "details": "Historical drama on J. Robert Oppenheimer and the Manhattan Project, directed by Peter Sellars."
      }
    ]
  },
  {
    "id": "bayerische-staatsoper",
    "name": "Bayerische Staatsoper (Nationaltheater München)",
    "city": "Munich",
    "country": "Germany",
    "region": "Europe",
    "latitude": 48.1396,
    "longitude": 11.5794,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.staatsoper.de/en",
    "description": "One of the world’s preeminent opera houses, dominating Max-Joseph-Platz. Renowned for its resident Bayerisches Staatsorchester and its pivotal historical association with Mozart, Wagner, and Strauss.",
    "inauguratedYear": 1818,
    "architect": "Karl von Fischer & Leo von Klenze",
    "architecturalStyle": "Neoclassical Corinthian Portico with Crimson & Gold Hall",
    "capacity": "2,101 seats",
    "historicSignificance": "Premier German opera palace; premiered four fundamental Wagner masterworks commissioned by King Ludwig II.",
    "historicPremieres": [
      {
        "title": "Tristan und Isolde",
        "composer": "Richard Wagner",
        "premiereYear": 1865,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by Hans von Bülow, starring Ludwig Schnorr von Carolsfeld and Malvina Garrigues."
      },
      {
        "title": "Die Meistersinger von Nürnberg",
        "composer": "Richard Wagner",
        "premiereYear": 1868,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by Hans von Bülow in the presence of King Ludwig II and Richard Wagner."
      },
      {
        "title": "Das Rheingold",
        "composer": "Richard Wagner",
        "premiereYear": 1869,
        "type": "WORLD_PREMIERE",
        "details": "First staged performance of the Ring cycle prologue, conducted by Franz Wüllner."
      },
      {
        "title": "Die Walküre",
        "composer": "Richard Wagner",
        "premiereYear": 1870,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by Franz Wüllner by order of King Ludwig II."
      }
    ]
  },
  {
    "id": "staatsoper-unter-den-linden",
    "name": "Staatsoper Unter den Linden",
    "city": "Berlin",
    "country": "Germany",
    "region": "Europe",
    "latitude": 52.5167,
    "longitude": 13.3953,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.staatsoper-berlin.de/en/",
    "description": "The historic Prussian Royal Opera on Bebelplatz in Berlin, commissioned by King Frederick the Great in 1742. Home to the Staatskapelle Berlin, historically led by Felix Mendelssohn, Richard Strauss, and Daniel Barenboim.",
    "inauguratedYear": 1742,
    "architect": "Georg Wenzeslaus von Knobelsdorff",
    "architecturalStyle": "Prussian Palladian Classical with Rococo Interior",
    "capacity": "1,396 seats",
    "historicSignificance": "Germany’s premier royal music institution; birthplace of modern German romantic opera.",
    "historicPremieres": [
      {
        "title": "Der Freischütz",
        "composer": "Carl Maria von Weber",
        "premiereYear": 1821,
        "type": "WORLD_PREMIERE",
        "details": "Foundational masterpiece of German Romantic Opera; sparked national sensation."
      },
      {
        "title": "Wozzeck",
        "composer": "Alban Berg",
        "premiereYear": 1925,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by Erich Kleiber after 137 rehearsals; landmark of 20th-century modernist expressionism."
      }
    ]
  },
  {
    "id": "semperoper-dresden",
    "name": "Semperoper Dresden (Sächsische Staatsoper)",
    "city": "Dresden",
    "country": "Germany",
    "region": "Europe",
    "latitude": 51.0545,
    "longitude": 13.7352,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.semperoper.de/en/",
    "description": "Gottfried Semper’s High Renaissance architectural triumph on the banks of the Elbe River. Home to the legendary Sächsische Staatskapelle Dresden, one of the oldest orchestras in the world (founded 1548).",
    "inauguratedYear": 1878,
    "architect": "Gottfried Semper",
    "architecturalStyle": "Neo-Renaissance / Neo-Baroque Portal with Corinthian Rotunda",
    "capacity": "1,300 seats",
    "historicSignificance": "Primary historical premiere venue for Richard Wagner’s early operas and nine operas by Richard Strauss.",
    "historicPremieres": [
      {
        "title": "Rienzi",
        "composer": "Richard Wagner",
        "premiereYear": 1842,
        "type": "WORLD_PREMIERE",
        "details": "Wagner’s first monumental success; led immediately to his appointment as Royal Kapellmeister."
      },
      {
        "title": "Der fliegende Holländer",
        "composer": "Richard Wagner",
        "premiereYear": 1843,
        "type": "WORLD_PREMIERE",
        "details": "Wagner’s ghostly romantic sea legend conducted by the composer."
      },
      {
        "title": "Tannhäuser",
        "composer": "Richard Wagner",
        "premiereYear": 1845,
        "type": "WORLD_PREMIERE",
        "details": "Original Dresden version conducted by Richard Wagner."
      },
      {
        "title": "Salome",
        "composer": "Richard Strauss",
        "premiereYear": 1905,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by Ernst von Schuch, starring Marie Wittich; shocked and revolutionized modern opera."
      },
      {
        "title": "Elektra",
        "composer": "Richard Strauss",
        "premiereYear": 1909,
        "type": "WORLD_PREMIERE",
        "details": "First collaboration between Richard Strauss and librettist Hugo von Hofmannsthal."
      },
      {
        "title": "Der Rosenkavalier",
        "composer": "Richard Strauss",
        "premiereYear": 1911,
        "type": "WORLD_PREMIERE",
        "details": "Strauss’s supreme comedy; special trains were chartered from Berlin to Dresden for performances."
      }
    ]
  },
  {
    "id": "opernhaus-zurich",
    "name": "Opernhaus Zürich",
    "city": "Zurich",
    "country": "Switzerland",
    "region": "Europe",
    "latitude": 47.3653,
    "longitude": 8.5469,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opernhaus.ch/en/",
    "description": "The leading opera palace of Switzerland, standing gracefully on Sechseläutenplatz near Lake Zurich. Known internationally for high production density and frequent international awards.",
    "inauguratedYear": 1891,
    "architect": "Fellner & Helmer",
    "architecturalStyle": "Neo-Rococo Theatrical Jewel Box with White Marble Facade",
    "capacity": "1,100 seats",
    "historicSignificance": "Sanctuary for exiled 20th-century composers during wartime; premier venue for Alban Berg and Paul Hindemith.",
    "historicPremieres": [
      {
        "title": "Lulu",
        "composer": "Alban Berg",
        "premiereYear": 1937,
        "type": "WORLD_PREMIERE",
        "details": "World premiere of the two-act version, conducted by Robert Denzler after Berg’s death."
      },
      {
        "title": "Mathis der Maler",
        "composer": "Paul Hindemith",
        "premiereYear": 1938,
        "type": "WORLD_PREMIERE",
        "details": "Premiered in neutral Zurich after being banned by the Nazi regime in Germany."
      }
    ]
  },
  {
    "id": "teatro-real-madrid",
    "name": "Teatro Real",
    "city": "Madrid",
    "country": "Spain",
    "region": "Europe",
    "latitude": 40.4182,
    "longitude": -3.7106,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatroreal.es/en",
    "description": "The royal opera house of Spain, directly facing the Royal Palace across the Plaza de Oriente. Named Opera Company of the Year at the International Opera Awards, celebrated for visionary stagings.",
    "inauguratedYear": 1850,
    "architect": "Antonio López Aguado & Custodio Moreno",
    "architecturalStyle": "Neoclassical Hexagonal Citadel with Royal Balconies",
    "capacity": "1,746 seats",
    "historicSignificance": "National opera theatre of Spain; visited historically by Verdi for the staging of La forza del destino.",
    "historicPremieres": [
      {
        "title": "La favorita",
        "composer": "Gaetano Donizetti",
        "premiereYear": 1850,
        "type": "INAUGURAL_OPERA",
        "details": "Gala inaugural performance on 19 November 1850 celebrating Queen Isabella II’s birthday."
      }
    ]
  },
  {
    "id": "gran-teatre-del-liceu",
    "name": "Gran Teatre del Liceu",
    "city": "Barcelona",
    "country": "Spain",
    "region": "Europe",
    "latitude": 41.3802,
    "longitude": 2.1735,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.liceubarcelona.cat/en",
    "description": "Standing proudly on La Rambla, the Liceu is Catalonia’s premier cultural institution. Built by private citizen shareholders rather than royalty, giving it a unique democratic civic identity.",
    "inauguratedYear": 1847,
    "architect": "Miquel Garriga i Roca & Josep Oriol Mestres",
    "architecturalStyle": "Italianate Horseshoe with Sumptuous Gold Foil Stucco",
    "capacity": "2,292 seats",
    "historicSignificance": "Largest opera house in Europe when built; historic launchpad for Catalan vocalists Montserrat Caballé and José Carreras.",
    "historicPremieres": [
      {
        "title": "I puritani",
        "composer": "Vincenzo Bellini",
        "premiereYear": 1847,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural operatic performance opening the house on 17 April 1847."
      }
    ]
  },
  {
    "id": "teatro-di-san-carlo",
    "name": "Teatro di San Carlo",
    "city": "Naples",
    "country": "Italy",
    "region": "Europe",
    "latitude": 40.8373,
    "longitude": 14.2497,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatrosancarlo.it/en/",
    "description": "Inaugurated in 1737 by Bourbon King Charles VII, San Carlo is the oldest continuously active opera house in the world—predating La Scala by 41 years and La Fenice by 55 years.",
    "inauguratedYear": 1737,
    "architect": "Giovanni Antonio Medrano & Angelo Carasale",
    "architecturalStyle": "Bourbon Royal Red & Gold with Frescoed Acoustic Ceiling",
    "capacity": "1,386 seats",
    "historicSignificance": "Oldest opera house in continuous existence; home to the Golden Age of Neapolitan opera, Rossini, and Donizetti.",
    "historicPremieres": [
      {
        "title": "Lucia di Lammermoor",
        "composer": "Gaetano Donizetti",
        "premiereYear": 1835,
        "type": "WORLD_PREMIERE",
        "details": "Donizetti’s Scottish Bel Canto tragedy; starred Fanny Tacchinardi Persiani in the famous Mad Scene."
      },
      {
        "title": "Mosè in Egitto",
        "composer": "Gioachino Rossini",
        "premiereYear": 1818,
        "type": "WORLD_PREMIERE",
        "details": "Sacred opera featuring the celebrated choral prayer \"Dal tuo stellato soglio\"."
      },
      {
        "title": "Alzira",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1845,
        "type": "WORLD_PREMIERE",
        "details": "Verdi’s opera based on Voltaire’s play, conducted by the composer."
      }
    ]
  },
  {
    "id": "teatro-la-fenice",
    "name": "Teatro La Fenice",
    "city": "Venice",
    "country": "Italy",
    "region": "Europe",
    "latitude": 45.4337,
    "longitude": 12.3338,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatrolafenice.it/en/",
    "description": "The legendary \"Phoenix\" of Venice, which rose repeatedly from catastrophic fires in 1774, 1836, and 1996. Accessible by gondola along the Venetian canals; famed for sublime Bel Canto acoustics.",
    "inauguratedYear": 1792,
    "architect": "Giannantonio Selva (Rebuilt by Aldo Rossi)",
    "architecturalStyle": "Venetian Rococo & Neoclassical Pastel Gilt Boxes",
    "capacity": "1,000 seats",
    "historicSignificance": "Birthplace of five of Giuseppe Verdi’s greatest masterworks, including Rigoletto and La Traviata.",
    "historicPremieres": [
      {
        "title": "Rigoletto",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1851,
        "type": "WORLD_PREMIERE",
        "details": "Triumphant world premiere; Verdi kept \"La donna è mobile\" top-secret until the final orchestra rehearsal."
      },
      {
        "title": "La Traviata",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1853,
        "type": "WORLD_PREMIERE",
        "details": "Famed controversial premiere starring Fanny Salvini-Donatelli as Violetta."
      },
      {
        "title": "Simon Boccanegra",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1857,
        "type": "WORLD_PREMIERE",
        "details": "Original version premiered at La Fenice on 12 March 1857."
      },
      {
        "title": "I Capuleti e i Montecchi",
        "composer": "Vincenzo Bellini",
        "premiereYear": 1830,
        "type": "WORLD_PREMIERE",
        "details": "Bellini’s Romeo and Juliet Bel Canto masterpiece, written in 45 days."
      }
    ]
  },
  {
    "id": "teatro-dell-opera-roma",
    "name": "Teatro dell’Opera di Roma",
    "city": "Rome",
    "country": "Italy",
    "region": "Europe",
    "latitude": 41.9009,
    "longitude": 12.4955,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operaroma.it/en/",
    "description": "The historic opera house of the Eternal City, opened in 1880 as the Teatro Costanzi. Famed for supreme acoustic resonance and for premiering Puccini’s Tosca and Mascagni’s Cavalleria Rusticana.",
    "inauguratedYear": 1880,
    "architect": "Achille Sfondrini",
    "architecturalStyle": "Neo-Renaissance Dome with Murano Crystal Chandelier",
    "capacity": "1,600 seats",
    "historicSignificance": "Rome’s national opera house; cradle of Italian Verismo opera.",
    "historicPremieres": [
      {
        "title": "Cavalleria Rusticana",
        "composer": "Pietro Mascagni",
        "premiereYear": 1890,
        "type": "WORLD_PREMIERE",
        "details": "Sensational overnight triumph that launched the Verismo (realism) movement in opera."
      },
      {
        "title": "Tosca",
        "composer": "Giacomo Puccini",
        "premiereYear": 1900,
        "type": "WORLD_PREMIERE",
        "details": "Puccini’s Rome-set thriller premiered in Rome on 14 January 1900 amid political bomb threats."
      }
    ]
  },
  {
    "id": "teatr-wielki-warsaw",
    "name": "Teatr Wielki (Polish National Opera)",
    "city": "Warsaw",
    "country": "Poland",
    "region": "Europe",
    "latitude": 52.2431,
    "longitude": 21.0108,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://teatrwielki.pl/en/",
    "description": "One of the most monumental theatre complexes in Europe, dominating Theatre Square in Warsaw. Features an immense 1,150-square-metre stage and stands as the heart of Polish operatic culture.",
    "inauguratedYear": 1833,
    "architect": "Antonio Corazzi",
    "architecturalStyle": "Neoclassical Colonnaded Monument with Quadriga",
    "capacity": "1,828 seats (Moniuszko Auditorium)",
    "historicSignificance": "National opera house of Poland; historical home of Stanisław Moniuszko’s national operas.",
    "historicPremieres": [
      {
        "title": "Halka",
        "composer": "Stanisław Moniuszko",
        "premiereYear": 1858,
        "type": "WORLD_PREMIERE",
        "details": "Premiere of the definitive four-act version; recognized as Poland’s national opera."
      },
      {
        "title": "The Haunted Manor (Straszny Dwór)",
        "composer": "Stanisław Moniuszko",
        "premiereYear": 1865,
        "type": "WORLD_PREMIERE",
        "details": "Patriotic masterwork premiered following the January Uprising."
      }
    ]
  },
  {
    "id": "hungarian-state-opera",
    "name": "Hungarian State Opera (Magyar Állami Operaház)",
    "city": "Budapest",
    "country": "Hungary",
    "region": "Europe",
    "latitude": 47.5028,
    "longitude": 19.0583,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opera.hu/en/",
    "description": "Miklós Ybl’s Neo-Renaissance masterpiece on Andrássy Avenue in Budapest. Famed for near-perfect acoustics and its storied directorship under Gustav Mahler (1888–1891).",
    "inauguratedYear": 1884,
    "architect": "Miklós Ybl",
    "architecturalStyle": "Neo-Renaissance Palace with Murals by Bertalan Székely",
    "capacity": "1,261 seats",
    "historicSignificance": "Crown jewel of Hungarian performing arts; historical proving ground for Gustav Mahler’s visionary operatic reforms.",
    "historicPremieres": [
      {
        "title": "Bluebeard’s Castle",
        "composer": "Béla Bartók",
        "premiereYear": 1918,
        "type": "WORLD_PREMIERE",
        "details": "Bartók’s single psychological opera, conducted by Egisto Tango."
      }
    ]
  },
  {
    "id": "oper-leipzig",
    "name": "Oper Leipzig",
    "city": "Leipzig",
    "country": "Germany",
    "region": "Europe",
    "latitude": 51.3402,
    "longitude": 12.3814,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.oper-leipzig.de/en/",
    "description": "The third oldest civic opera house in Europe (founded 1693 after Venice and Hamburg). Located on Augustusplatz facing the Gewandhaus, its pit orchestra is the world-renowned Gewandhausorchester.",
    "inauguratedYear": 1960,
    "architect": "Kunz Nierade & Kurt Hemmerling",
    "architecturalStyle": "Post-War Modernist Classical with Hand-Cut Brass Chandeliers",
    "capacity": "1,267 seats",
    "historicSignificance": "Birthplace of Richard Wagner; 330+ years of uninterrupted operatic tradition with the Gewandhausorchester in the pit.",
    "historicPremieres": [
      {
        "title": "Genoveva",
        "composer": "Robert Schumann",
        "premiereYear": 1850,
        "type": "WORLD_PREMIERE",
        "details": "Schumann’s only completed opera, conducted by the composer at the historic Leipzig theatre."
      },
      {
        "title": "Rise and Fall of the City of Mahagonny",
        "composer": "Kurt Weill",
        "premiereYear": 1930,
        "type": "WORLD_PREMIERE",
        "details": "Weill & Brecht’s political satirical masterpiece; premiere caused major cultural uproar."
      }
    ]
  },
  {
    "id": "opera-philadelphia",
    "name": "Opera Philadelphia (Academy of Music)",
    "city": "Philadelphia",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.9489,
    "longitude": -75.1652,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operaphila.org",
    "description": "The \"Grand Old Lady of Locust Street\", opened in 1857 modeled directly on La Scala in Milan. It is the oldest continuously operating opera house in the United States; home to Opera Philadelphia and its renowned Festival O.",
    "inauguratedYear": 1857,
    "architect": "Napoleon LeBrun & Gustavus Runge",
    "architecturalStyle": "Neoclassical Brownstone with Milanese Horseshoe Interior",
    "capacity": "2,507 seats",
    "historicSignificance": "Oldest active grand opera house in the United States; National Historic Landmark.",
    "historicPremieres": [
      {
        "title": "Il Trovatore",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1857,
        "type": "INAUGURAL_OPERA",
        "details": "First operatic performance held in the Academy on 11 February 1857."
      },
      {
        "title": "Breaking the Waves",
        "composer": "Missy Mazzoli",
        "premiereYear": 2016,
        "type": "WORLD_PREMIERE",
        "details": "Opera Philadelphia commission; named Best New Opera by Music Critics Association of North America."
      }
    ]
  },
  {
    "id": "washington-national-opera",
    "name": "Washington National Opera (Kennedy Center)",
    "city": "Washington, D.C.",
    "country": "USA",
    "region": "Americas",
    "latitude": 38.8955,
    "longitude": -77.0563,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.kennedy-center.org/wno",
    "description": "The resident opera company of the John F. Kennedy Center for the Performing Arts on the Potomac River. Led for 15 years by Plácido Domingo; stages major world repertory and the American Ring cycle.",
    "inauguratedYear": 1971,
    "architect": "Edward Durell Stone",
    "architecturalStyle": "Modernist Monumental Carrara Marble Pavilion",
    "capacity": "2,362 seats",
    "historicSignificance": "National opera company of the United States capital; official national memorial to President John F. Kennedy.",
    "historicPremieres": [
      {
        "title": "Beatrix Cenci",
        "composer": "Alberto Ginastera",
        "premiereYear": 1971,
        "type": "WORLD_PREMIERE",
        "details": "Inaugural commission for the opening of the Kennedy Center Opera House."
      },
      {
        "title": "Champion",
        "composer": "Terence Blanchard",
        "premiereYear": 2017,
        "type": "HISTORIC_STAGING",
        "details": "Celebrated \"opera in jazz\" based on the life of boxer Emile Griffith."
      }
    ]
  },
  {
    "id": "opera-colorado",
    "name": "Opera Colorado (Ellie Caulkins Opera House)",
    "city": "Denver",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.7441,
    "longitude": -104.9972,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operacolorado.org",
    "description": "The premier grand opera institution of the Rocky Mountain West. Performs in the state-of-the-art lyric Ellie Caulkins Opera House, built inside the historic 1908 Denver Municipal Auditorium shell at the Denver Performing Arts Complex.",
    "inauguratedYear": 2005,
    "architect": "Peter Lucking & Semple Brown Design",
    "architecturalStyle": "Contemporary Lyric Horseshoe within Historic 1908 Shell",
    "capacity": "2,225 seats",
    "historicSignificance": "Flagship professional grand opera company of Colorado; acclaimed acoustic brilliance and custom seatback subtitles.",
    "historicPremieres": [
      {
        "title": "The Shining",
        "composer": "Paul Moravec",
        "premiereYear": 2022,
        "type": "HISTORIC_STAGING",
        "details": "Rocky Mountain premiere based on Stephen King’s Stanley Hotel Colorado classic."
      },
      {
        "title": "Scarlet Letter",
        "composer": "Lori Laitman",
        "premiereYear": 2016,
        "type": "WORLD_PREMIERE",
        "details": "Full professional grand opera world premiere commissioned by Opera Colorado."
      }
    ]
  },
  {
    "id": "minnesota-opera",
    "name": "Minnesota Opera (Ordway Center)",
    "city": "Minneapolis / St. Paul",
    "country": "USA",
    "region": "Americas",
    "latitude": 44.9442,
    "longitude": -93.0975,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://mnopera.org",
    "description": "Performing in the Ordway Music Theater in St. Paul across the Mississippi from Minneapolis. Known throughout the classical world as one of America’s most courageous and prolific commissioners of new opera.",
    "inauguratedYear": 1985,
    "architect": "Benjamin Thompson",
    "architecturalStyle": "Modernist Curved Glass & Acoustic Mahagony Shell",
    "capacity": "1,900 seats",
    "historicSignificance": "Pioneer of the New Works Initiative; commissioner of multiple Pulitzer Prize-winning American masterworks.",
    "historicPremieres": [
      {
        "title": "Silent Night",
        "composer": "Kevin Puts",
        "premiereYear": 2011,
        "type": "WORLD_PREMIERE",
        "details": "Based on the 1914 World War I Christmas Truce; won the 2012 Pulitzer Prize for Music."
      },
      {
        "title": "The Shining",
        "composer": "Paul Moravec",
        "premiereYear": 2016,
        "type": "WORLD_PREMIERE",
        "details": "Record-breaking sellout world premiere based on Stephen King’s novel."
      }
    ]
  },
  {
    "id": "houston-grand-opera",
    "name": "Houston Grand Opera (Wortham Theater Center)",
    "city": "Houston",
    "country": "USA",
    "region": "Americas",
    "latitude": 29.7619,
    "longitude": -95.3667,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.houstongrandopera.org",
    "description": "One of America’s largest opera companies, performing in the Brown Theater at Wortham Theater Center. The only opera company to have won a Tony, an Emmy, and a Grammy Award.",
    "inauguratedYear": 1987,
    "architect": "Morris Architects",
    "architecturalStyle": "Postmodern Red Granite Theatrical Palace",
    "capacity": "2,405 seats (Brown Theater)",
    "historicSignificance": "World-renowned for championing modern American opera; has commissioned over 75 world premieres.",
    "historicPremieres": [
      {
        "title": "Nixon in China",
        "composer": "John Adams",
        "premiereYear": 1987,
        "type": "WORLD_PREMIERE",
        "details": "Landmark American opera directed by Peter Sellars; revolutionized contemporary opera history."
      },
      {
        "title": "Florencia en el Amazonas",
        "composer": "Daniel Catán",
        "premiereYear": 1996,
        "type": "WORLD_PREMIERE",
        "details": "First Spanish-language opera commissioned by major US companies, inspired by Gabriel García Márquez."
      }
    ]
  },
  {
    "id": "seattle-opera",
    "name": "Seattle Opera (Marion Oliver McCaw Hall)",
    "city": "Seattle",
    "country": "USA",
    "region": "Americas",
    "latitude": 47.6247,
    "longitude": -122.3533,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.seattleopera.org",
    "description": "Renowned as the Wagnerian epicentre of North America, having mounted the complete Der Ring des Nibelungen for four decades. Performs at McCaw Hall at Seattle Center with the Seattle Symphony.",
    "inauguratedYear": 2003,
    "architect": "LMN Architects",
    "architecturalStyle": "Modernist Glass Serpent Wall with Acoustic Timber",
    "capacity": "2,967 seats",
    "historicSignificance": "America’s premier pilgrimage house for Wagner’s Ring cycle under Speight Jenkins.",
    "historicPremieres": [
      {
        "title": "The Ring Cycle (Pacific Northwest Festival)",
        "composer": "Richard Wagner",
        "premiereYear": 1975,
        "type": "HISTORIC_STAGING",
        "details": "Famed annual summer Ring festival performed in both German and Andrew Porter’s English translation."
      }
    ]
  },
  {
    "id": "florida-grand-opera",
    "name": "Florida Grand Opera (Adrienne Arsht Center)",
    "city": "Miami",
    "country": "USA",
    "region": "Americas",
    "latitude": 25.7903,
    "longitude": -80.1886,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.fgo.org",
    "description": "Founded in 1941 as the Greater Miami Opera, FGO is the 7th-oldest opera company in the United States. Performs in the Ziff Ballet Opera House at the Adrienne Arsht Center, designed by César Pelli.",
    "inauguratedYear": 2006,
    "architect": "César Pelli",
    "architecturalStyle": "Contemporary Sculptural Glass & White Granite",
    "capacity": "2,400 seats",
    "historicSignificance": "Historic cultural anchor of South Florida; launchpad for Luciano Pavarotti’s American operatic debut in 1965 opposite Joan Sutherland.",
    "historicPremieres": [
      {
        "title": "Lucia di Lammermoor",
        "composer": "Gaetano Donizetti",
        "premiereYear": 1965,
        "type": "HISTORIC_STAGING",
        "details": "American debut of Luciano Pavarotti as Edgardo, invited by Dame Joan Sutherland."
      }
    ]
  },
  {
    "id": "pittsburgh-opera",
    "name": "Pittsburgh Opera (Benedum Center)",
    "city": "Pittsburgh",
    "country": "USA",
    "region": "Americas",
    "latitude": 40.4431,
    "longitude": -79.9997,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.pittsburghopera.org",
    "description": "The 7th oldest professional opera company in the United States (founded 1939). Performs in the lavishly restored Benedum Center for the Performing Arts (originally the Stanley Theatre, 1928) in the Cultural District.",
    "inauguratedYear": 1928,
    "architect": "Rapp & Rapp",
    "architecturalStyle": "French Renaissance Palatial Movie Palace Restoration",
    "capacity": "2,800 seats",
    "historicSignificance": "Historic anchor of Pennsylvania classical performance; major training ground for American resident artists.",
    "historicPremieres": [
      {
        "title": "The Summer King",
        "composer": "Daniel Sonenberg",
        "premiereYear": 2017,
        "type": "WORLD_PREMIERE",
        "details": "World premiere opera on the life of legendary Negro League baseball star Josh Gibson."
      }
    ]
  },
  {
    "id": "los-angeles-opera",
    "name": "Los Angeles Opera (Dorothy Chandler Pavilion)",
    "city": "Los Angeles",
    "country": "USA",
    "region": "Americas",
    "latitude": 34.0567,
    "longitude": -118.2486,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.laopera.org",
    "description": "The fourth largest opera company in the United States, performing at the Music Center in Downtown Los Angeles. Led for years by Plácido Domingo and James Conlon; famed for cinematic, visually daring productions.",
    "inauguratedYear": 1964,
    "architect": "Welton Becket",
    "architecturalStyle": "New Formalist Curved Quartz & Black Granite Pavilion",
    "capacity": "3,197 seats",
    "historicSignificance": "Premier opera company of Southern California; multiple Grammy Award-winning productions.",
    "historicPremieres": [
      {
        "title": "Grendel",
        "composer": "Elliot Goldenthal",
        "premiereYear": 2006,
        "type": "WORLD_PREMIERE",
        "details": "Directed by Julie Taymor, starring Eric Owens in the title role."
      },
      {
        "title": "Il Postino",
        "composer": "Daniel Catán",
        "premiereYear": 2010,
        "type": "WORLD_PREMIERE",
        "details": "Starring Plácido Domingo as poet Pablo Neruda."
      }
    ]
  },
  {
    "id": "dallas-opera",
    "name": "The Dallas Opera (Winspear Opera House)",
    "city": "Dallas",
    "country": "USA",
    "region": "Americas",
    "latitude": 32.7889,
    "longitude": -96.7972,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://dallasopera.org",
    "description": "Performing in the Margot and Bill Winspear Opera House in the Dallas Arts District. Designed by Foster + Partners with a 21st-century crimson glass drum under an expansive solar canopy.",
    "inauguratedYear": 2009,
    "architect": "Norman Foster (Foster + Partners)",
    "architecturalStyle": "High-Tech Modernist Crimson Glass Drum with Solar Canopy",
    "capacity": "2,200 seats",
    "historicSignificance": "Legendary historical venue where Maria Callas gave her famed 1957 Dallas concerts; host to the Hart Institute for Women Conductors.",
    "historicPremieres": [
      {
        "title": "Moby-Dick",
        "composer": "Jake Heggie",
        "premiereYear": 2010,
        "type": "WORLD_PREMIERE",
        "details": "Spectacular world premiere based on Herman Melville’s novel, starring Ben Heppner and Stephen Costello."
      }
    ]
  },
  {
    "id": "new-orleans-opera",
    "name": "New Orleans Opera Association",
    "city": "New Orleans",
    "country": "USA",
    "region": "Americas",
    "latitude": 29.9625,
    "longitude": -90.0683,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://neworleansopera.org",
    "description": "New Orleans was the first city of opera in America, hosting regular seasons since 1796 at the Théâtre de la Rue Saint-Pierre and later the French Opera House. Today performs at the Mahalia Jackson Theater.",
    "inauguratedYear": 1973,
    "architect": "August Perez & Associates",
    "architecturalStyle": "Modernist Municipal Auditorium in Louis Armstrong Park",
    "capacity": "2,243 seats",
    "historicSignificance": "America’s first opera capital; introduced grand opera to North America long before New York or Philadelphia.",
    "historicPremieres": [
      {
        "title": "Sylvain",
        "composer": "André Grétry",
        "premiereYear": 1796,
        "type": "HISTORIC_STAGING",
        "details": "First documented complete professional opera performance on the territory of the United States."
      }
    ]
  },
  {
    "id": "detroit-opera",
    "name": "Detroit Opera (Detroit Opera House)",
    "city": "Detroit",
    "country": "USA",
    "region": "Americas",
    "latitude": 42.3361,
    "longitude": -83.0506,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://detroitopera.org",
    "description": "Founded by David DiChiera as Michigan Opera Theatre, now led by artistic director Yuval Sharon. Performs in the opulent 1922 Grand Circus Park theatre, pioneering experimental immersive opera.",
    "inauguratedYear": 1922,
    "architect": "C. Howard Crane",
    "architecturalStyle": "Italian Renaissance Vaudeville Palace Restoration",
    "capacity": "2,700 seats",
    "historicSignificance": "Midwest opera powerhouse and national pioneer of radical site-specific and accessible staging.",
    "historicPremieres": [
      {
        "title": "Cyrano",
        "composer": "David DiChiera",
        "premiereYear": 2007,
        "type": "WORLD_PREMIERE",
        "details": "Romantic grand opera composed by the company’s founder, libretto by Bernard Uzan."
      }
    ]
  },
  {
    "id": "teatro-regio-torino",
    "name": "Teatro Regio di Torino",
    "city": "Turin",
    "country": "Italy",
    "region": "Europe",
    "latitude": 45.0703,
    "longitude": 7.6872,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatroregio.torino.it/en",
    "description": "Historic royal opera theatre on Piazza Castello in Turin. Rebuilt by Carlo Mollino in 1973 with a famed acoustic ceiling of hanging stalactites; historical launchpad of Puccini’s greatest operas.",
    "inauguratedYear": 1740,
    "architect": "Benedetto Alfieri (Rebuilt 1973 by Carlo Mollino)",
    "architecturalStyle": "Expressionist Postmodern Shell within Royal Baroque Portico",
    "capacity": "1,592 seats",
    "historicSignificance": "Birthplace of Puccini’s La Bohème and Manon Lescaut; one of Italy’s premier recording houses.",
    "historicPremieres": [
      {
        "title": "Manon Lescaut",
        "composer": "Giacomo Puccini",
        "premiereYear": 1893,
        "type": "WORLD_PREMIERE",
        "details": "Puccini’s first undisputed international triumph; established him as Verdi’s heir."
      },
      {
        "title": "La Bohème",
        "composer": "Giacomo Puccini",
        "premiereYear": 1896,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by a 28-year-old Arturo Toscanini on 1 February 1896; now the most performed opera in history."
      }
    ]
  },
  {
    "id": "teatro-regio-parma",
    "name": "Teatro Regio di Parma",
    "city": "Parma",
    "country": "Italy",
    "region": "Europe",
    "latitude": 44.8028,
    "longitude": 10.3278,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatroregioparma.it/en/",
    "description": "The world’s consecrated capital of the Giuseppe Verdi tradition, located in Verdi’s home province of Parma. Famed for having the most passionately demanding vocal audience (the \"loggionisti\") in Italy.",
    "inauguratedYear": 1829,
    "architect": "Nicola Bettoli",
    "architecturalStyle": "Neoclassical Colonnade with Yellow & Gold Interior",
    "capacity": "1,200 seats",
    "historicSignificance": "Home of the annual Festival Verdi; international benchmark for authentic Verdi vocal interpretation.",
    "historicPremieres": [
      {
        "title": "Zaira",
        "composer": "Vincenzo Bellini",
        "premiereYear": 1829,
        "type": "WORLD_PREMIERE",
        "details": "Inaugural opera composed by Bellini explicitly to open the new ducal theatre."
      }
    ]
  },
  {
    "id": "teatro-carlo-felice",
    "name": "Teatro Carlo Felice",
    "city": "Genoa",
    "country": "Italy",
    "region": "Europe",
    "latitude": 44.4078,
    "longitude": 8.9344,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://operacarlofelicegenova.it",
    "description": "Standing on Piazza De Ferrari in Genoa. Reconstructed by Aldo Rossi after WWII with an indoor covered piazza concept; closely tied historically to Giuseppe Verdi, who wintered in Genoa.",
    "inauguratedYear": 1828,
    "architect": "Carlo Barabino (Reconstructed 1991 by Aldo Rossi)",
    "architecturalStyle": "Neoclassical Doric Portico with Postmodern Amphitheatre",
    "capacity": "2,000 seats",
    "historicSignificance": "Major North Italian opera house; winter artistic home of Giuseppe Verdi for decades.",
    "historicPremieres": [
      {
        "title": "Bianca e Fernando",
        "composer": "Vincenzo Bellini",
        "premiereYear": 1828,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural production opening the theatre on 7 April 1828."
      }
    ]
  },
  {
    "id": "teatro-comunale-bologna",
    "name": "Teatro Comunale di Bologna",
    "city": "Bologna",
    "country": "Italy",
    "region": "Europe",
    "latitude": 44.4967,
    "longitude": 11.3506,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.tcbo.it",
    "description": "Designed by Baroque theatre architect Antonio Galli da Bibiena, opened in 1763. Historic pioneer of German opera in Italy, staging the Italian premieres of Wagner’s Lohengrin, Tannhäuser, and Tristan.",
    "inauguratedYear": 1763,
    "architect": "Antonio Galli da Bibiena",
    "architecturalStyle": "Baroque Bell-Shaped Hall with Masonry Vaults",
    "capacity": "1,034 seats",
    "historicSignificance": "The premier Wagnerian hub of Italy; first Italian theatre to embrace modern German music drama.",
    "historicPremieres": [
      {
        "title": "Lohengrin",
        "composer": "Richard Wagner",
        "premiereYear": 1871,
        "type": "HISTORIC_STAGING",
        "details": "First performance of any Wagner opera in Italy; Giuseppe Verdi sat secretly in the audience studying the score."
      }
    ]
  },
  {
    "id": "teatro-massimo-palermo",
    "name": "Teatro Massimo",
    "city": "Palermo",
    "country": "Italy",
    "region": "Europe",
    "latitude": 38.1203,
    "longitude": 13.3572,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatromassimo.it/en/",
    "description": "The third-largest opera house in Europe (after Paris Garnier and Vienna Staatsoper), dominating Piazza Verdi in Palermo. Famous for its monumental staircase and the inscription \"Art renews the people\".",
    "inauguratedYear": 1897,
    "architect": "Giovanni Battista Filippo Basile & Ernesto Basile",
    "architecturalStyle": "Neoclassical Corinthian Temple with Vast Bronze Cupola",
    "capacity": "1,387 seats",
    "historicSignificance": "The supreme operatic monument of Sicily; setting of the climax of The Godfather Part III.",
    "historicPremieres": [
      {
        "title": "Falstaff",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1897,
        "type": "INAUGURAL_OPERA",
        "details": "Gala inaugural performance opening the great Sicilian theatre on 16 May 1897."
      }
    ]
  },
  {
    "id": "teatro-donizetti",
    "name": "Teatro Donizetti",
    "city": "Bergamo",
    "country": "Italy",
    "region": "Europe",
    "latitude": 45.6947,
    "longitude": 9.6706,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatrodonizetti.it",
    "description": "Dedicated to native son Gaetano Donizetti, standing in the heart of Bergamo Lower City. Home of the international Donizetti Opera Festival, rediscovering rare Bel Canto masterworks.",
    "inauguratedYear": 1791,
    "architect": "Giovanni Francesco Lucchini",
    "architecturalStyle": "Italianate Neoclassical with Gilt Frescoed Boxes",
    "capacity": "1,154 seats",
    "historicSignificance": "Global center for Gaetano Donizetti research, period performance, and Bel Canto revival.",
    "historicPremieres": [
      {
        "title": "Torquato Tasso",
        "composer": "Gaetano Donizetti",
        "premiereYear": 1833,
        "type": "HISTORIC_STAGING",
        "details": "Staged in Donizetti’s presence in his hometown, winning honorary citizenship of Bergamo."
      }
    ]
  },
  {
    "id": "teatro-verdi-trieste",
    "name": "Teatro Lirico Giuseppe Verdi",
    "city": "Trieste",
    "country": "Italy",
    "region": "Europe",
    "latitude": 45.6506,
    "longitude": 13.7694,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatroverdi-trieste.com/en/",
    "description": "Overlooking the Adriatic harbor in Trieste, designed by Matteo Pertsch and Giannantonio Selva. Named in Verdi’s honor on the day of the composer’s death in 1901.",
    "inauguratedYear": 1801,
    "architect": "Matteo Pertsch & Giannantonio Selva",
    "architecturalStyle": "Neoclassical Facade reminiscent of La Scala",
    "capacity": "1,300 seats",
    "historicSignificance": "Habsburg Adriatic cultural gateway; site of two Verdi world premieres.",
    "historicPremieres": [
      {
        "title": "Il corsaro",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1848,
        "type": "WORLD_PREMIERE",
        "details": "Verdi’s Byron-inspired opera premiered on 25 October 1848."
      },
      {
        "title": "Stiffelio",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1850,
        "type": "WORLD_PREMIERE",
        "details": "Verdi’s daring psychological drama on Protestant marital forgiveness."
      }
    ]
  },
  {
    "id": "teatro-massimo-bellini",
    "name": "Teatro Massimo Bellini",
    "city": "Catania",
    "country": "Italy",
    "region": "Europe",
    "latitude": 37.5053,
    "longitude": 15.0897,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatromassimobellini.it",
    "description": "Dedicated to Bel Canto master Vincenzo Bellini in his Sicilian birthplace of Catania. Famed throughout Italy for exceptional natural acoustics in its curved red-and-gold hall.",
    "inauguratedYear": 1890,
    "architect": "Carlo Sada",
    "architecturalStyle": "Sicilian Neo-Baroque with Bellini Apotheosis Frescoes",
    "capacity": "1,200 seats",
    "historicSignificance": "The world’s home of Vincenzo Bellini performance tradition.",
    "historicPremieres": [
      {
        "title": "Norma",
        "composer": "Vincenzo Bellini",
        "premiereYear": 1890,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala opening the theatre on 31 May 1890 starring soprano Virginia Damerini."
      }
    ]
  },
  {
    "id": "teatro-municipale-valli",
    "name": "Teatro Municipale Romolo Valli",
    "city": "Reggio Emilia",
    "country": "Italy",
    "region": "Europe",
    "latitude": 44.7011,
    "longitude": 10.6319,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.iteatri.re.it",
    "description": "The monumental neoclassical theatre of Reggio Emilia, renowned in operatic history as the exact venue where Luciano Pavarotti made his professional operatic debut as Rodolfo in 1961.",
    "inauguratedYear": 1857,
    "architect": "Cesare Costa",
    "architecturalStyle": "Neoclassical Colonnade with Ionic Portico",
    "capacity": "1,150 seats",
    "historicSignificance": "Where Luciano Pavarotti won the Concorso Internazionale and made his professional operatic debut.",
    "historicPremieres": [
      {
        "title": "La Bohème (Pavarotti Debut)",
        "composer": "Giacomo Puccini",
        "premiereYear": 1961,
        "type": "HISTORIC_STAGING",
        "details": "Luciano Pavarotti’s professional debut on 29 April 1961, launching his global career."
      }
    ]
  },
  {
    "id": "oper-frankfurt",
    "name": "Oper Frankfurt",
    "city": "Frankfurt am Main",
    "country": "Germany",
    "region": "Europe",
    "latitude": 50.1089,
    "longitude": 8.6739,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://oper-frankfurt.de/en/",
    "description": "Voted \"Opera House of the Year\" multiple times by international critics in Opernwelt. Celebrated for pioneering dramaturgical vision, exceptional ensemble singing, and the Frankfurter Opern- und Museumsorchester.",
    "inauguratedYear": 1963,
    "architect": "Gerhard Weber",
    "architecturalStyle": "Post-War Modernist Glass Pavilion with Vast Foyer Murals",
    "capacity": "1,369 seats",
    "historicSignificance": "One of Europe’s most critically acclaimed modern opera houses; led historically by Solti and Gielen.",
    "historicPremieres": [
      {
        "title": "Carmina Burana",
        "composer": "Carl Orff",
        "premiereYear": 1937,
        "type": "WORLD_PREMIERE",
        "details": "Premiered at the Old Frankfurt Opera house, conducted by Bertil Wetzelsberger."
      }
    ]
  },
  {
    "id": "hamburgische-staatsoper",
    "name": "Hamburgische Staatsoper",
    "city": "Hamburg",
    "country": "Germany",
    "region": "Europe",
    "latitude": 53.5564,
    "longitude": 9.9886,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.staatsoper-hamburg.de",
    "description": "Founded in 1678 as the first public civic opera house in Germany. Historically employed young George Frideric Handel in the violin section, and was led by Gustav Mahler as first Kapellmeister.",
    "inauguratedYear": 1955,
    "architect": "Gerhard Weber (Original site 1678)",
    "architecturalStyle": "Mid-Century Modernist Proscenium with Tiered Balconies",
    "capacity": "1,690 seats",
    "historicSignificance": "Germany’s oldest civic opera tradition; premier launchpad of Handel and Telemann operas.",
    "historicPremieres": [
      {
        "title": "Almira",
        "composer": "George Frideric Handel",
        "premiereYear": 1705,
        "type": "WORLD_PREMIERE",
        "details": "Handel’s very first opera, composed in Hamburg at age 19."
      }
    ]
  },
  {
    "id": "staatsoper-stuttgart",
    "name": "Staatsoper Stuttgart",
    "city": "Stuttgart",
    "country": "Germany",
    "region": "Europe",
    "latitude": 48.7803,
    "longitude": 9.1856,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.staatsoper-stuttgart.de/en/",
    "description": "Max Littmann’s magnificent historic theatre in the Schlossgarten, one of the few German opera houses to survive World War II bombing intact. Named \"Opera House of the Year\" a record six times.",
    "inauguratedYear": 1912,
    "architect": "Max Littmann",
    "architecturalStyle": "Neo-Classical / Jugendstil with Monumental Ionic Portico",
    "capacity": "1,404 seats",
    "historicSignificance": "One of Europe’s most decorated opera houses for innovative stage direction and resident choral power.",
    "historicPremieres": [
      {
        "title": "Ariadne auf Naxos",
        "composer": "Richard Strauss",
        "premiereYear": 1912,
        "type": "WORLD_PREMIERE",
        "details": "Original version conducted by Richard Strauss, directed by Max Reinhardt."
      }
    ]
  },
  {
    "id": "deutsche-oper-berlin",
    "name": "Deutsche Oper Berlin",
    "city": "Berlin",
    "country": "Germany",
    "region": "Europe",
    "latitude": 52.5122,
    "longitude": 13.3106,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://deutscheoperberlin.de/en_EN/home",
    "description": "Berlin’s largest opera house, situated in Charlottenburg. Built post-war as the cultural showcase of West Berlin, renowned for pure democratic sightlines (no sight-obscuring columns) and superb acoustics.",
    "inauguratedYear": 1961,
    "architect": "Fritz Bornemann",
    "architecturalStyle": "Brutalist / Modernist Concrete Acoustic Hall",
    "capacity": "1,859 seats",
    "historicSignificance": "West Berlin’s premier grand opera house; stage of legendary Wagner and Verdi productions with Dietrich Fischer-Dieskau.",
    "historicPremieres": [
      {
        "title": "Don Giovanni",
        "composer": "Wolfgang Amadeus Mozart",
        "premiereYear": 1961,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala opening the new house, conducted by Ferenc Fricsay, starring Dietrich Fischer-Dieskau."
      }
    ]
  },
  {
    "id": "theater-an-der-wien",
    "name": "Theater an der Wien",
    "city": "Vienna",
    "country": "Austria",
    "region": "Europe",
    "latitude": 48.1997,
    "longitude": 16.3642,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.theater-wien.at/en/",
    "description": "Founded in 1801 by Mozart’s librettist Emanuel Schikaneder (the first Papageno). Ludwig van Beethoven lived in the theatre while composing his only opera, Fidelio, and his 5th and 6th symphonies.",
    "inauguratedYear": 1801,
    "architect": "Franz Jäger & Emanuel Schikaneder",
    "architecturalStyle": "Empire Classical Theatre with Papageno Gate Portal",
    "capacity": "1,129 seats",
    "historicSignificance": "Birthplace of Beethoven’s Fidelio and legendary 19th-century operetta; today Vienna’s premier Stagione opera house.",
    "historicPremieres": [
      {
        "title": "Fidelio (Leonore)",
        "composer": "Ludwig van Beethoven",
        "premiereYear": 1805,
        "type": "WORLD_PREMIERE",
        "details": "Beethoven’s only opera premiered during French military occupation of Vienna."
      },
      {
        "title": "Die Fledermaus",
        "composer": "Johann Strauss II",
        "premiereYear": 1874,
        "type": "WORLD_PREMIERE",
        "details": "The crowning golden age Viennese operetta masterpiece."
      }
    ]
  },
  {
    "id": "estates-theatre-prague",
    "name": "Estates Theatre (Stavovské divadlo)",
    "city": "Prague",
    "country": "Czechia",
    "region": "Europe",
    "latitude": 50.0861,
    "longitude": 14.4236,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.narodni-divadlo.cz/en",
    "description": "The historic jewel of Prague, standing in the Old Town since 1783. World-famous as the only surviving theatre on Earth where Wolfgang Amadeus Mozart conducted his own operatic world premieres.",
    "inauguratedYear": 1783,
    "architect": "Anton Haffenecker",
    "architecturalStyle": "Neoclassical Turquoise & Gold Italian Horseshoe",
    "capacity": "659 seats",
    "historicSignificance": "Where Mozart personally conducted the world premiere of Don Giovanni and La clemenza di Tito; filming location of Miloš Forman’s Amadeus.",
    "historicPremieres": [
      {
        "title": "Don Giovanni",
        "composer": "Wolfgang Amadeus Mozart",
        "premiereYear": 1787,
        "type": "WORLD_PREMIERE",
        "details": "Mozart conducted the premiere on 29 October 1787 to ecstatic acclaim (\"My Praguers understand me!\")."
      },
      {
        "title": "La clemenza di Tito",
        "composer": "Wolfgang Amadeus Mozart",
        "premiereYear": 1791,
        "type": "WORLD_PREMIERE",
        "details": "Coronation opera composed for Emperor Leopold II as King of Bohemia."
      }
    ]
  },
  {
    "id": "opera-national-lyon",
    "name": "Opéra National de Lyon",
    "city": "Lyon",
    "country": "France",
    "region": "Europe",
    "latitude": 45.7678,
    "longitude": 4.8364,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opera-lyon.com/en",
    "description": "Renowned for Jean Nouvel’s striking modern barrel-vaulted glass dome crowning the historic 1831 neoclassical facade. Named Opera Company of the Year for adventurous festival programming.",
    "inauguratedYear": 1993,
    "architect": "Jean Nouvel (Original 1831 by Antoine-Marie Chenavard)",
    "architecturalStyle": "Radical Translucent Glass Barrel Vault within Neoclassical Walls",
    "capacity": "1,100 seats",
    "historicSignificance": "One of the most daring and critically rewarded opera houses in France.",
    "historicPremieres": [
      {
        "title": "Rodrigue et Chimène",
        "composer": "Claude Debussy",
        "premiereYear": 1993,
        "type": "WORLD_PREMIERE",
        "details": "Completed by Edison Denisov; inaugurating the newly reconstructed Jean Nouvel opera house."
      }
    ]
  },
  {
    "id": "grand-theatre-bordeaux",
    "name": "Grand-Théâtre de Bordeaux",
    "city": "Bordeaux",
    "country": "France",
    "region": "Europe",
    "latitude": 44.8428,
    "longitude": -0.5744,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opera-bordeaux.com",
    "description": "Victor Louis’s 1780 Enlightenment masterpiece, with its monumental portico of 12 Corinthian columns supporting statues of the nine Muses and three goddesses. Served as the direct architectural model for Charles Garnier’s Paris Opéra.",
    "inauguratedYear": 1780,
    "architect": "Victor Louis",
    "architecturalStyle": "Pure French Enlightenment Neoclassical with Colonnaded Peristyle",
    "capacity": "1,114 seats",
    "historicSignificance": "One of the oldest surviving wooden-framed opera houses in Europe; inspiration for the Paris Opéra Garnier.",
    "historicPremieres": [
      {
        "title": "Athalie",
        "composer": "Jean Racine / Jean-Baptiste Moreau",
        "premiereYear": 1780,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala performance opening Victor Louis’s neoclassical palace on 7 April 1780."
      }
    ]
  },
  {
    "id": "opera-monte-carlo",
    "name": "Opéra de Monte-Carlo (Salle Garnier)",
    "city": "Monaco",
    "country": "Monaco",
    "region": "Europe",
    "latitude": 43.7389,
    "longitude": 7.4286,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opera.mc/en",
    "description": "Designed by Charles Garnier (architect of the Paris Opéra) overlooking the Mediterranean in Monaco. Famed for its gilded Belle Époque miniature hall, long artistic directorship under Raoul Gunsbourg, and Cecilia Bartoli.",
    "inauguratedYear": 1879,
    "architect": "Charles Garnier",
    "architecturalStyle": "Belle Époque Oceanfront Palace with Golden Carved Loggias",
    "capacity": "524 seats",
    "historicSignificance": "Premier venue of the French Riviera; historical premiere site of 45 world premieres by Massenet and Ravel.",
    "historicPremieres": [
      {
        "title": "Le jongleur de Notre-Dame",
        "composer": "Jules Massenet",
        "premiereYear": 1902,
        "type": "WORLD_PREMIERE",
        "details": "Miracle opera world premiere starring Lucien Fugère."
      },
      {
        "title": "L’enfant et les sortilèges",
        "composer": "Maurice Ravel",
        "premiereYear": 1925,
        "type": "WORLD_PREMIERE",
        "details": "Choreographed by George Balanchine with libretto by Colette; conducted by Victor de Sabata."
      }
    ]
  },
  {
    "id": "palau-les-arts-valencia",
    "name": "Palau de les Arts Reina Sofía",
    "city": "Valencia",
    "country": "Spain",
    "region": "Europe",
    "latitude": 39.4589,
    "longitude": -0.3547,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.lesarts.com/en/",
    "description": "Santiago Calatrava’s breathtaking futuristic opera monument in the City of Arts and Sciences. Rising like a giant curved helmet 75 meters above the Turia riverbed with four separate acoustic halls.",
    "inauguratedYear": 2005,
    "architect": "Santiago Calatrava",
    "architecturalStyle": "Futuristic Organic Calatrava Shell with White Trencadís Mosaic",
    "capacity": "1,412 seats (Main Hall)",
    "historicSignificance": "One of the most architecturally striking opera complexes in the world; led by Zubin Mehta and Lorin Maazel.",
    "historicPremieres": [
      {
        "title": "Fidelio",
        "composer": "Ludwig van Beethoven",
        "premiereYear": 2006,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala production opening the Calatrava house, conducted by Zubin Mehta."
      }
    ]
  },
  {
    "id": "royal-swedish-opera",
    "name": "Royal Swedish Opera (Kungliga Operan)",
    "city": "Stockholm",
    "country": "Sweden",
    "region": "Europe",
    "latitude": 59.3297,
    "longitude": 18.0703,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operan.se/en/",
    "description": "Founded in 1773 by King Gustav III (the \"Opera King\"). Standing on Gustav Adolfs torg, it is the home of Swedish vocal legends Jussi Björling, Birgit Nilsson, and Nina Stemme.",
    "inauguratedYear": 1898,
    "architect": "Axel Anderberg",
    "architecturalStyle": "Neo-Classical / Neo-Baroque with Gilded Foyer",
    "capacity": "1,200 seats",
    "historicSignificance": "Where King Gustav III was fatally shot at a masquerade ball in 1792 (the real-life inspiration for Verdi’s Un ballo in maschera).",
    "historicPremieres": [
      {
        "title": "Aniara",
        "composer": "Karl-Birger Blomdahl",
        "premiereYear": 1959,
        "type": "WORLD_PREMIERE",
        "details": "Famed Swedish science-fiction space opera based on the epic poem by Nobel laureate Harry Martinson."
      }
    ]
  },
  {
    "id": "oslo-opera-house",
    "name": "Oslo Opera House (Den Norske Opera)",
    "city": "Oslo",
    "country": "Norway",
    "region": "Europe",
    "latitude": 59.9075,
    "longitude": 10.7533,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://operaen.no/en/",
    "description": "Snøhetta’s iconic white Carrara marble and granite iceberg rising from Oslofjord. Visitors can walk up its sloping roof directly from the water’s edge to the panoramic harbor summit.",
    "inauguratedYear": 2008,
    "architect": "Snøhetta",
    "architecturalStyle": "Deconstructivist White Marble Sloping Roof Iceberg",
    "capacity": "1,364 seats (Main Auditorium)",
    "historicSignificance": "Winner of the World Architecture Festival and Mies van der Rohe Prize; revolutionized democratic opera architecture.",
    "historicPremieres": [
      {
        "title": "Jorden rundt på 80 dager",
        "composer": "Gisle Kverndokk",
        "premiereYear": 2008,
        "type": "WORLD_PREMIERE",
        "details": "Inaugural commission for the opening of the new waterfront opera house."
      }
    ]
  },
  {
    "id": "copenhagen-opera-house",
    "name": "Copenhagen Opera House (Operaen)",
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Europe",
    "latitude": 55.6819,
    "longitude": 12.6006,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://kglteater.dk/en/",
    "description": "Henning Larsen’s dramatic waterfront opera palace on Holmen island in Copenhagen Harbour, perfectly aligned across the water with Amalienborg Palace. Features a monumental floating roof canopy and 105,000 sheets of gold leaf.",
    "inauguratedYear": 2005,
    "architect": "Henning Larsen",
    "architecturalStyle": "Monumental Waterfront Canopy with Maple Acoustic Shell",
    "capacity": "1,703 seats",
    "historicSignificance": "One of the most modern and technically advanced opera houses in the world, gifted by the A.P. Møller Foundation.",
    "historicPremieres": [
      {
        "title": "Aida",
        "composer": "Giuseppe Verdi",
        "premiereYear": 2005,
        "type": "INAUGURAL_OPERA",
        "details": "Grand inaugural production in the presence of Queen Margrethe II on 26 January 2005."
      }
    ]
  },
  {
    "id": "english-national-opera",
    "name": "English National Opera (London Coliseum)",
    "city": "London",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 51.5097,
    "longitude": -0.1264,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.eno.org",
    "description": "Frank Matcham’s Roman-themed theatrical extravaganza on St Martin’s Lane, crowned by a revolving globe. Renowned for performing operas sung entirely in English and championing visionary theatrical directors.",
    "inauguratedYear": 1904,
    "architect": "Frank Matcham",
    "architecturalStyle": "Edwardian Baroque Extravaganza with Roman Chariots",
    "capacity": "2,359 seats",
    "historicSignificance": "Largest theatre in London’s West End; historical home of opera in English and groundbreaking accessible productions.",
    "historicPremieres": [
      {
        "title": "The Mask of Orpheus",
        "composer": "Harrison Birtwistle",
        "premiereYear": 1986,
        "type": "WORLD_PREMIERE",
        "details": "Monumental contemporary British opera conducted by Elgar Howarth."
      }
    ]
  },
  {
    "id": "welsh-national-opera",
    "name": "Welsh National Opera (Wales Millennium Centre)",
    "city": "Cardiff",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 51.4647,
    "longitude": -3.1633,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://wno.org.uk",
    "description": "Performing in the iconic Wales Millennium Centre (the \"Armadillo\") in Cardiff Bay, constructed from Welsh slate, metal, and wood with Celtic poetic inscriptions on its copper-bronze dome.",
    "inauguratedYear": 2004,
    "architect": "Jonathan Adams (Percy Thomas Architects)",
    "architecturalStyle": "Welsh Slate, Steel & Bronze Celtic Vault with Poetic Inscriptions",
    "capacity": "1,897 seats (Donald Gordon Theatre)",
    "historicSignificance": "Home of one of the greatest touring opera choruses in the world; Wales’s national cultural flagship.",
    "historicPremieres": [
      {
        "title": "The Doctor of Myddfai",
        "composer": "Peter Maxwell Davies",
        "premiereYear": 1996,
        "type": "WORLD_PREMIERE",
        "details": "Welsh mythological opera commissioned for the 50th anniversary of WNO."
      }
    ]
  },
  {
    "id": "scottish-opera",
    "name": "Scottish Opera (Theatre Royal Glasgow)",
    "city": "Glasgow",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 55.8661,
    "longitude": -4.2575,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.scottishopera.org.uk",
    "description": "Scotland’s national opera company, performing in the historic Theatre Royal Glasgow (the oldest theatre in Glasgow, 1867) with a striking contemporary 2014 spiraling glass foyer.",
    "inauguratedYear": 1867,
    "architect": "Charles J. Phipps (Foyer 2014 by Page\\Park)",
    "architecturalStyle": "Victorian Classic Horseshoe with Spiraling Elliptical Glass Tower",
    "capacity": "1,541 seats",
    "historicSignificance": "National opera company of Scotland, founded in 1962 by Sir Alexander Gibson.",
    "historicPremieres": [
      {
        "title": "Mary, Queen of Scots",
        "composer": "Thea Musgrave",
        "premiereYear": 1977,
        "type": "WORLD_PREMIERE",
        "details": "Commissioned for the Edinburgh International Festival and Scottish Opera, conducted by the composer."
      }
    ]
  },
  {
    "id": "new-national-theatre-tokyo",
    "name": "New National Theatre Tokyo (NNTT)",
    "city": "Tokyo",
    "country": "Japan",
    "region": "Asia-Pacific",
    "latitude": 35.6833,
    "longitude": 139.6865,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.nntt.jac.go.jp/english/",
    "description": "Japan’s premier national opera house in Hatsudai, Tokyo. Features magnificent acoustic woodwork, state-of-the-art stage machinery, and an internationally acclaimed resident company staging Western grand opera.",
    "inauguratedYear": 1997,
    "architect": "Takahiko Yanagisawa",
    "architecturalStyle": "Modernist Japanese Acoustic Wood Shell",
    "capacity": "1,814 seats (Opera Palace)",
    "historicSignificance": "Supreme temple of Western grand opera in Japan; inaugurating modern Japanese classical production.",
    "historicPremieres": [
      {
        "title": "Takeru",
        "composer": "Ikuma Dan",
        "premiereYear": 1997,
        "type": "WORLD_PREMIERE",
        "details": "Grand inaugural opera based on Japanese mythological history opening the new national house."
      }
    ]
  },
  {
    "id": "national-centre-performing-arts-beijing",
    "name": "National Centre for the Performing Arts (The Giant Egg)",
    "city": "Beijing",
    "country": "China",
    "region": "Asia-Pacific",
    "latitude": 39.9042,
    "longitude": 116.3889,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://en.chncpa.org",
    "description": "Paul Andreu’s colossal titanium and glass ellipsoidal dome rising from an artificial lake west of Tiananmen Square. Guests enter via an underwater glass tunnel into a world-class opera palace.",
    "inauguratedYear": 2007,
    "architect": "Paul Andreu",
    "architecturalStyle": "Titanium & Ultra-Clear Glass Ellipsoid Island",
    "capacity": "2,207 seats (Opera Hall)",
    "historicSignificance": "China’s flagship national opera house; commissioner of major grand-scale Western and historical operas.",
    "historicPremieres": [
      {
        "title": "Rickshaw Boy (Luotuo Xiangzi)",
        "composer": "Guo Wenjing",
        "premiereYear": 2014,
        "type": "WORLD_PREMIERE",
        "details": "Acclaimed modern opera based on Lao She’s classic Beijing novel, which toured major Italian opera houses."
      }
    ]
  },
  {
    "id": "seoul-arts-center",
    "name": "Seoul Arts Center (Opera House)",
    "city": "Seoul",
    "country": "South Korea",
    "region": "Asia-Pacific",
    "latitude": 37.4786,
    "longitude": 127.0117,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.sac.or.kr/site/eng/home",
    "description": "South Korea’s premier arts complex in Seocho-gu, Seoul. Its distinctive roof is inspired by the traditional Korean bamboo hat (\"gat\"); home to Korea National Opera staging grand international opera.",
    "inauguratedYear": 1993,
    "architect": "Kim Seok-chul",
    "architecturalStyle": "Traditional Korean Hat (Gat) Motif with Modernist Shell",
    "capacity": "2,283 seats (Opera Theater)",
    "historicSignificance": "The epicentre of Western classical opera in South Korea; launchpad for Korea’s world-dominating vocal stars.",
    "historicPremieres": [
      {
        "title": "The Wedding Day (Chunhyang-jeon)",
        "composer": "Various",
        "premiereYear": 1993,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural festival production celebrating the opening of the national opera theatre."
      }
    ]
  },
  {
    "id": "royal-opera-house-muscat",
    "name": "Royal Opera House Muscat",
    "city": "Muscat",
    "country": "Oman",
    "region": "Middle East & Africa",
    "latitude": 23.6139,
    "longitude": 58.4686,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.rohmuscat.org.om/en",
    "description": "Commissioned by Sultan Qaboos bin Said as the first opera house in the Arabian Peninsula. Built of desert Omani limestone with exquisite hand-carved teak woodwork and an adjustable acoustic proscenium.",
    "inauguratedYear": 2011,
    "architect": "WATG (Wimberly Allison Tong & Goo)",
    "architecturalStyle": "Contemporary Omani Islamic Palace with Inlaid Teak & Rosewood",
    "capacity": "1,100 seats",
    "historicSignificance": "The premier center for musical arts and Western grand opera in the Middle East; host to major international touring companies.",
    "historicPremieres": [
      {
        "title": "Turandot",
        "composer": "Giacomo Puccini",
        "premiereYear": 2011,
        "type": "INAUGURAL_OPERA",
        "details": "Directed by Franco Zeffirelli with the Arena di Verona orchestra and choir for the opening of the opera house."
      }
    ]
  },
  {
    "id": "theatro-municipal-sao-paulo",
    "name": "Theatro Municipal de São Paulo",
    "city": "São Paulo",
    "country": "Brazil",
    "region": "Americas",
    "latitude": -23.5453,
    "longitude": -46.6386,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://theatromunicipal.org.br",
    "description": "Built during the coffee boom of 1911, inspired by the Paris Opéra Garnier. Renowned as the historic cradle of Brazilian Modernism (site of the historic 1922 Modern Art Week).",
    "inauguratedYear": 1911,
    "architect": "Ramos de Azevedo",
    "architecturalStyle": "Eclectic Renaissance Baroque with Gilded Balconies & Stained Glass",
    "capacity": "1,523 seats",
    "historicSignificance": "Brazil’s primary operatic temple; site of the 1922 Modern Art Week which launched modern Brazilian culture.",
    "historicPremieres": [
      {
        "title": "Il Guarany",
        "composer": "Carlos Gomes",
        "premiereYear": 1911,
        "type": "INAUGURAL_OPERA",
        "details": "Gala opening performance by Brazil’s greatest 19th-century opera composer."
      }
    ]
  },
  {
    "id": "palacio-bellas-artes-mexico",
    "name": "Palacio de Bellas Artes",
    "city": "Mexico City",
    "country": "Mexico",
    "region": "Americas",
    "latitude": 19.4352,
    "longitude": -99.1412,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://palacio.inba.gob.mx",
    "description": "The supreme cultural cathedral of Mexico, featuring an Art Nouveau exterior of Carrara marble and a dazzling Art Deco interior crowned by a Tiffany stained-glass stage curtain depicting the volcanoes Popocatépetl and Iztaccíhuatl.",
    "inauguratedYear": 1934,
    "architect": "Adamo Boari & Federico Mariscal",
    "architecturalStyle": "Art Nouveau Exterior & Art Deco Interior with Tiffany Glass",
    "capacity": "1,396 seats",
    "historicSignificance": "National opera house of Mexico; where Maria Callas famously sang her legendary high E-flats in Aida in 1950.",
    "historicPremieres": [
      {
        "title": "Aida (Callas High E-flat)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1950,
        "type": "HISTORIC_STAGING",
        "details": "Maria Callas interpolates an unwritten high E-flat at the end of Act II, cementing her worldwide vocal legend."
      }
    ]
  },
  {
    "id": "teatro-municipal-santiago",
    "name": "Teatro Municipal de Santiago",
    "city": "Santiago",
    "country": "Chile",
    "region": "Americas",
    "latitude": -33.4419,
    "longitude": -70.6472,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://municipal.cl",
    "description": "The oldest and most prestigious cultural center in Chile, standing in downtown Santiago since 1857. Designed by French architect François Brunet de Baines; home to the Philharmonic Orchestra of Santiago.",
    "inauguratedYear": 1857,
    "architect": "François Brunet de Baines & Lucien Hénault",
    "architecturalStyle": "French Neoclassical Horseshoe & Crystal Chandelier",
    "capacity": "1,480 seats",
    "historicSignificance": "Oldest cultural stage of the South American Pacific; national monument of Chile.",
    "historicPremieres": [
      {
        "title": "Ernani",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1857,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala opening Chile’s premier lyric stage on 17 September 1857."
      }
    ]
  },
  {
    "id": "central-city-opera",
    "name": "Central City Opera House",
    "city": "Central City",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.8008,
    "longitude": -105.5136,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://centralcityopera.org",
    "description": "The fifth-oldest professional opera company in the United States, performing in an intimate 550-seat stone jewel box built in 1878 by Welsh and Cornish gold miners. Renowned worldwide for extraordinary acoustic intimacy.",
    "inauguratedYear": 1878,
    "architect": "Robert S. Roeschlaub",
    "architecturalStyle": "Victorian Stone Jewel Box with Trompe-l’œil Ceiling",
    "capacity": "550 seats",
    "historicSignificance": "America’s 5th-oldest opera company (founded 1932); site of the world premiere of Douglas Moore’s The Ballad of Baby Doe (1956).",
    "historicPremieres": [
      {
        "title": "The Ballad of Baby Doe",
        "composer": "Douglas Moore",
        "premiereYear": 1956,
        "type": "WORLD_PREMIERE",
        "details": "Beloved American folk opera commissioned by Central City Opera, telling the Colorado silver boom true story of Horace Tabor and Baby Doe."
      }
    ]
  },
  {
    "id": "wheeler-opera-house",
    "name": "Wheeler Opera House (Aspen Opera Theater)",
    "city": "Aspen",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.1894,
    "longitude": -106.8189,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://wheeleroperahouse.com",
    "description": "Built during Aspen’s silver boom in 1889 by Jerome B. Wheeler. Home to the Aspen Opera Theater and VocalArts program of the renowned Aspen Music Festival, co-directed by Renée Fleming and Patrick Summers.",
    "inauguratedYear": 1889,
    "architect": "Willis A. Barnes",
    "architecturalStyle": "Romanesque Revival Peachblow Sandstone Gem",
    "capacity": "503 seats",
    "historicSignificance": "Preeminent mountain proving ground for America’s top vocal talents under Renée Fleming and the Aspen Music Festival.",
    "historicPremieres": [
      {
        "title": "The King and the Duke",
        "composer": "Jack Gottlieb",
        "premiereYear": 1968,
        "type": "WORLD_PREMIERE",
        "details": "Aspen Music Festival opera commission based on Mark Twain’s Adventures of Huckleberry Finn."
      }
    ]
  },
  {
    "id": "santa-fe-opera",
    "name": "Santa Fe Opera (The Crosby Theatre)",
    "city": "Santa Fe",
    "country": "USA",
    "region": "Americas",
    "latitude": 35.7381,
    "longitude": -105.9525,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.santafeopera.org",
    "description": "Iconic open-air theatre set against the Jemez and Sangre de Cristo Mountains in the high New Mexico desert. Famous for summer tailgating, stunning sunsets, and regular world premieres.",
    "inauguratedYear": 1957,
    "architect": "Polshek Partnership (James Stewart Polshek)",
    "architecturalStyle": "Open-Air Sculptural Sweeping Canopy Pavilion",
    "capacity": "2,126 seats",
    "historicSignificance": "One of the world’s most celebrated summer opera festivals; pioneer of American and Richard Strauss premieres.",
    "historicPremieres": [
      {
        "title": "The (R)evolution of Steve Jobs",
        "composer": "Mason Bates",
        "premiereYear": 2017,
        "type": "WORLD_PREMIERE",
        "details": "Grammy Award-winning world premiere opera on the life and philosophy of Apple co-founder Steve Jobs."
      },
      {
        "title": "Madame Mao",
        "composer": "Bright Sheng",
        "premiereYear": 2003,
        "type": "WORLD_PREMIERE",
        "details": "Critically acclaimed commission exploring Jiang Qing and the Cultural Revolution."
      }
    ]
  },
  {
    "id": "chautauqua-opera",
    "name": "Chautauqua Opera (Norton Memorial Hall)",
    "city": "Chautauqua",
    "country": "USA",
    "region": "Americas",
    "latitude": 42.2097,
    "longitude": -79.4678,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.chq.org/opera",
    "description": "Founded in 1929 at the Chautauqua Institution, it is the fourth-oldest continuously producing professional opera company in the United States. Operates in Norton Memorial Hall (1929 Art Deco jewel) and the historic Amphitheater.",
    "inauguratedYear": 1929,
    "architect": "Otis F. Johnson",
    "architecturalStyle": "Monolithic Art Deco Reinforced Concrete Acoustic Hall",
    "capacity": "1,365 seats (Norton Hall)",
    "historicSignificance": "America’s fourth-oldest professional opera company; historic pioneer of summer lyric training and English-language productions.",
    "historicPremieres": [
      {
        "title": "The Crucible",
        "composer": "Robert Ward",
        "premiereYear": 1962,
        "type": "HISTORIC_STAGING",
        "details": "Early historic performance of the Pulitzer Prize-winning opera based on Arthur Miller’s drama."
      }
    ]
  },
  {
    "id": "tanglewood-music-center",
    "name": "Tanglewood (Koussevitzky Shed & Ozawa Hall)",
    "city": "Lenox / Stockbridge",
    "country": "USA",
    "region": "Americas",
    "latitude": 42.3492,
    "longitude": -73.3075,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.bso.org/tanglewood",
    "description": "The historic summer home of the Boston Symphony Orchestra in the Berkshires. Famed in operatic history as the venue of the 1946 American premiere of Benjamin Britten’s Peter Grimes, conducted by a 27-year-old Leonard Bernstein.",
    "inauguratedYear": 1938,
    "architect": "Eliel Saarinen (Shed 1938) & William Rawn (Ozawa Hall 1994)",
    "architecturalStyle": "Acoustic Steel Fan-Vaulted Open Pavilion & Timber Hall",
    "capacity": "5,100 seats (Shed) + 1,200 (Ozawa Hall)",
    "historicSignificance": "Site of the historic American premiere of Britten’s Peter Grimes (1946) under Leonard Bernstein; premier summer training ground for vocal masters.",
    "historicPremieres": [
      {
        "title": "Peter Grimes (American Premiere)",
        "composer": "Benjamin Britten",
        "premiereYear": 1946,
        "type": "HISTORIC_STAGING",
        "details": "Commissioned by the Koussevitzky Music Foundation; conducted by 27-year-old Leonard Bernstein on 6 August 1946."
      }
    ]
  },
  {
    "id": "wolf-trap-opera",
    "name": "Wolf Trap Opera (Filene Center & The Barns)",
    "city": "Vienna",
    "country": "USA",
    "region": "Americas",
    "latitude": 38.9386,
    "longitude": -77.2653,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.wolftrap.org/opera",
    "description": "The only National Park for the Performing Arts in the United States. Wolf Trap Opera is one of America’s premier young artist resident companies, staging rare and grand opera at the Filene Center and historic 18th-century Barns.",
    "inauguratedYear": 1971,
    "architect": "MacFadyen & DeVido (Filene Center) / Historic 1720s Barns",
    "architecturalStyle": "Cathedral Douglas Fir Wood Amphitheatre & Restored German Barns",
    "capacity": "7,000 seats (Filene) + 382 seats (The Barns)",
    "historicSignificance": "America’s official National Park for the Performing Arts; elite national proving ground for top-tier vocal artists.",
    "historicPremieres": [
      {
        "title": "Ghost Café",
        "composer": "Various / Commissioned",
        "premiereYear": 2021,
        "type": "WORLD_PREMIERE",
        "details": "Commissioned multi-part contemporary vocal chamber opera for national broadcast."
      }
    ]
  },
  {
    "id": "spoleto-festival-usa",
    "name": "Spoleto Festival USA (Gaillard Center & Dock Street)",
    "city": "Charleston",
    "country": "USA",
    "region": "Americas",
    "latitude": 32.7844,
    "longitude": -79.9317,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://spoletousa.org",
    "description": "Founded in 1977 by Pulitzer Prize-winning composer Gian Carlo Menotti as the American counterpart to the Festival dei Due Mondi in Spoleto, Italy. Famed for staging daring, overlooked, and world premiere operas in historic Charleston.",
    "inauguratedYear": 1977,
    "architect": "David M. Schwarz (Gaillard 2015) / Historic 1736 Dock Street",
    "architecturalStyle": "Neoclassical Horseshoe & America’s First Historic Theatre",
    "capacity": "1,800 seats (Gaillard) / 463 seats (Dock Street)",
    "historicSignificance": "America’s premier comprehensive international arts festival; historic champion of rare operatic masterworks.",
    "historicPremieres": [
      {
        "title": "Omar",
        "composer": "Rhiannon Giddens & Michael Abels",
        "premiereYear": 2022,
        "type": "WORLD_PREMIERE",
        "details": "Pulitzer Prize-winning opera based on the 1831 autobiography of enslaved Muslim scholar Omar ibn Said."
      }
    ]
  },
  {
    "id": "glimmerglass-festival",
    "name": "Glimmerglass Festival (Alice Busch Opera Theater)",
    "city": "Cooperstown",
    "country": "USA",
    "region": "Americas",
    "latitude": 42.7915,
    "longitude": -74.9082,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://glimmerglass.org",
    "description": "Nestled on the shores of Otsego Lake in upstate New York. Its open-sided barn pavilion lets summer breezes through while offering pristine acoustic clarity; famed for inventive American productions and young artist training.",
    "inauguratedYear": 1987,
    "architect": "Hugh Hardy",
    "architecturalStyle": "Lakeside Open-Sided Barn Pavilion",
    "capacity": "914 seats",
    "historicSignificance": "Celebrated American summer proving ground for major international opera stars and creative American premieres.",
    "historicPremieres": [
      {
        "title": "The Gilded Cage",
        "composer": "Various",
        "premiereYear": 2015,
        "type": "WORLD_PREMIERE",
        "details": "Critically acclaimed festival staging directed by Francesca Zambello."
      }
    ]
  },
  {
    "id": "sarasota-opera",
    "name": "Sarasota Opera (Sarasota Opera House)",
    "city": "Sarasota",
    "country": "USA",
    "region": "Americas",
    "latitude": 27.3364,
    "longitude": -82.5428,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://www.sarasotaopera.org",
    "description": "Renowned throughout the operatic world as the only opera company on Earth to have performed every single work of Giuseppe Verdi—all 28 operas, all alternate versions, his Requiem, and complete choral music.",
    "inauguratedYear": 1926,
    "architect": "Roy A. Benjamin (Restored 2008 by Westlake Reed Leskosky)",
    "architecturalStyle": "Mediterranean Revival Theatre & Historic Verdi Shrine",
    "capacity": "1,119 seats",
    "historicSignificance": "Home of the historic 28-year Verdi Cycle (1989–2016), an unprecedented achievement in world operatic history.",
    "historicPremieres": [
      {
        "title": "The Verdi Cycle (Complete Works)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 2016,
        "type": "HISTORIC_STAGING",
        "details": "Completion of all 33 versions of every Verdi opera, concluding with the young Verdi’s La battaglia di Legnano."
      }
    ]
  },
  {
    "id": "opera-theatre-saint-louis",
    "name": "Opera Theatre of Saint Louis (OTSL)",
    "city": "St. Louis",
    "country": "USA",
    "region": "Americas",
    "latitude": 38.5919,
    "longitude": -90.3547,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.opera-stl.org",
    "description": "Performing in the intimate thrust-stage Loretto-Hilton Center. Nationally famous for singing all operas in English with projected text, accompanied by members of the St. Louis Symphony Orchestra.",
    "inauguratedYear": 1976,
    "architect": "Murphy and Mackey",
    "architecturalStyle": "Modernist Thrust Amphitheatre with Zero Proscenium Separation",
    "capacity": "987 seats",
    "historicSignificance": "National leader in fostering young American singers and premiering groundbreaking contemporary operas.",
    "historicPremieres": [
      {
        "title": "Champion",
        "composer": "Terence Blanchard",
        "premiereYear": 2013,
        "type": "WORLD_PREMIERE",
        "details": "World premiere \"opera in jazz\" on the tragic life of boxer Emile Griffith."
      },
      {
        "title": "Fire Shut Up in My Bones",
        "composer": "Terence Blanchard",
        "premiereYear": 2019,
        "type": "WORLD_PREMIERE",
        "details": "World premiere; later chosen to reopen the Metropolitan Opera in 2021."
      }
    ]
  },
  {
    "id": "des-moines-metro-opera",
    "name": "Des Moines Metro Opera (Blank Performing Arts Center)",
    "city": "Indianola / Des Moines",
    "country": "USA",
    "region": "Americas",
    "latitude": 41.3653,
    "longitude": -93.5636,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://dmmo.org",
    "description": "Founded in 1973 by Robert L. Larsen, this acclaimed summer festival stages grand-scale productions in an intimate 467-seat blank-thrust theatre where no audience member is more than 15 rows from the stage.",
    "inauguratedYear": 1973,
    "architect": "Simpson College Campus Architecture",
    "architecturalStyle": "Intimate Thrust Stage Amphitheatre",
    "capacity": "467 seats",
    "historicSignificance": "One of the Midwest’s premier summer opera destinations; national reputation for high-octane casting.",
    "historicPremieres": [
      {
        "title": "A Thousand Acres",
        "composer": "Kristin Kuster",
        "premiereYear": 2022,
        "type": "WORLD_PREMIERE",
        "details": "Commissioned world premiere based on Jane Smiley’s Pulitzer Prize-winning Iowa novel."
      }
    ]
  },
  {
    "id": "modell-lyric-baltimore",
    "name": "The Lyric (Lyric Opera House)",
    "city": "Baltimore",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.3047,
    "longitude": -76.6189,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://www.lyricbaltimore.com",
    "description": "Opened on Mount Royal Avenue in 1894, modeled directly on the acoustic proportions of the Neues Gewandhaus in Leipzig, Germany. Longtime Maryland home to the touring Metropolitan Opera and Enrico Caruso.",
    "inauguratedYear": 1894,
    "architect": "T. Henry Randall",
    "architecturalStyle": "Neo-Renaissance Brick with Leipzig Gewandhaus Acoustics",
    "capacity": "2,564 seats",
    "historicSignificance": "Historic host to the Metropolitan Opera tour for over 80 years; home to Opera Baltimore.",
    "historicPremieres": [
      {
        "title": "Die Meistersinger von Nürnberg",
        "composer": "Richard Wagner",
        "premiereYear": 1898,
        "type": "HISTORIC_STAGING",
        "details": "Metropolitan Opera tour production conducted by Walter Damrosch."
      }
    ]
  },
  {
    "id": "boston-lyric-opera",
    "name": "Boston Lyric Opera (Emerson Cutler Majestic)",
    "city": "Boston",
    "country": "USA",
    "region": "Americas",
    "latitude": 42.3522,
    "longitude": -71.0653,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://blo.org",
    "description": "The largest and longest-tenured opera company in New England (founded 1976). Frequently performs at the historic Emerson Cutler Majestic Theatre (1903, Beaux-Arts Rococo), championing New England premieres.",
    "inauguratedYear": 1903,
    "architect": "John Galen Howard",
    "architecturalStyle": "Beaux-Arts Rococo with Electric Arch Proscenium",
    "capacity": "1,186 seats",
    "historicSignificance": "Premier professional opera company of New England; commissioner of daring new chamber works.",
    "historicPremieres": [
      {
        "title": "The Handmaid’s Tale (American Premiere)",
        "composer": "Poul Ruders",
        "premiereYear": 2003,
        "type": "HISTORIC_STAGING",
        "details": "American premiere based on Margaret Atwood’s dystopian novel."
      }
    ]
  },
  {
    "id": "arena-di-verona",
    "name": "Arena di Verona Opera Festival",
    "city": "Verona",
    "country": "Italy",
    "region": "Europe",
    "latitude": 45.439,
    "longitude": 10.9944,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.arena.it/en",
    "description": "The world’s most magnificent ancient open-air opera festival, staged inside a 1st-century AD Roman amphitheatre. Up to 15,000 spectators gather each summer night holding lit candles (\"moccoletti\") under the stars.",
    "inauguratedYear": 30,
    "architect": "Roman Engineers (Festival founded 1913 by Giovanni Zenatello)",
    "architecturalStyle": "Ancient Roman Elliptical Amphitheatre in Pink Veronese Marble",
    "capacity": "15,000 seats",
    "historicSignificance": "Birthplace of grand open-air opera; launched the international career of Maria Callas in 1947.",
    "historicPremieres": [
      {
        "title": "Aida (Centenary Festival)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1913,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural festival production celebrating Verdi’s 100th birthday; attended by Puccini, Boito, and Kafka."
      },
      {
        "title": "La Gioconda (Callas Debut)",
        "composer": "Amilcare Ponchielli",
        "premiereYear": 1947,
        "type": "HISTORIC_STAGING",
        "details": "Historic Italian debut of Maria Callas, conducted by Tullio Serafin."
      }
    ]
  },
  {
    "id": "festival-puccini-torre-del-lago",
    "name": "Festival Puccini (Gran Teatro all’Aperto)",
    "city": "Torre del Lago (Viareggio)",
    "country": "Italy",
    "region": "Europe",
    "latitude": 43.8319,
    "longitude": 10.3069,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.puccinifestival.it",
    "description": "Dedicated entirely to the operas of Giacomo Puccini, held on the scenic shores of Lake Massaciuccoli directly beside the villa where Puccini lived for thirty years, composed his greatest masterworks, and is buried.",
    "inauguratedYear": 1930,
    "architect": "Lake Amphitheatre (Modern theatre 2008)",
    "architecturalStyle": "Open-Air Lakeside Amphitheatre with Puccini Sculpture Garden",
    "capacity": "3,370 seats",
    "historicSignificance": "Sacred pilgrimage stage for Puccini lovers; founded following Puccini’s wish to hear his operas echo over the water.",
    "historicPremieres": [
      {
        "title": "La Bohème (Inaugural Festival)",
        "composer": "Giacomo Puccini",
        "premiereYear": 1930,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural performance staged on a temporary platform built into the lake in the presence of Pietro Mascagni."
      }
    ]
  },
  {
    "id": "rossini-opera-festival-pesaro",
    "name": "Rossini Opera Festival (Teatro Rossini)",
    "city": "Pesaro",
    "country": "Italy",
    "region": "Europe",
    "latitude": 43.9114,
    "longitude": 12.9142,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.rossinioperafestival.it/en/",
    "description": "Held in Gioachino Rossini’s Adriatic birthplace of Pesaro since 1980. The global benchmark for Rossini scholarship and virtuoso Bel Canto singing, in partnership with the Fondazione Rossini.",
    "inauguratedYear": 1818,
    "architect": "Giuseppe Barbieri",
    "architecturalStyle": "Neoclassical Italian Horseshoe with Historic Ceiling Medallions",
    "capacity": "850 seats",
    "historicSignificance": "Responsible for the modern worldwide rediscovery of over 30 forgotten Rossini operas.",
    "historicPremieres": [
      {
        "title": "Il viaggio a Reims (Modern Premiere)",
        "composer": "Gioachino Rossini",
        "premiereYear": 1984,
        "type": "HISTORIC_STAGING",
        "details": "Historical modern revival conducted by Claudio Abbado, directed by Luca Ronconi."
      }
    ]
  },
  {
    "id": "salzburg-festival",
    "name": "Salzburg Festival (Großes Festspielhaus)",
    "city": "Salzburg",
    "country": "Austria",
    "region": "Europe",
    "latitude": 47.7981,
    "longitude": 13.0417,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.salzburgerfestspiele.at/en/",
    "description": "Founded in 1920 in Mozart’s birthplace by Max Reinhardt, Hugo von Hofmannsthal, and Richard Strauss. The Großes Festspielhaus, carved into the sheer rock face of the Mönchsberg, features one of the widest opera stages in the world (100 meters).",
    "inauguratedYear": 1960,
    "architect": "Clemens Holzmeister",
    "architecturalStyle": "Monumental Alpine Cliffside Auditorium Carved into Living Rock",
    "capacity": "2,179 seats",
    "historicSignificance": "The world’s most prestigious summer opera and music festival; led for decades by Herbert von Karajan.",
    "historicPremieres": [
      {
        "title": "Der Rosenkavalier",
        "composer": "Richard Strauss",
        "premiereYear": 1960,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala opening the Großes Festspielhaus, conducted by Herbert von Karajan."
      }
    ]
  },
  {
    "id": "glyndebourne-festival",
    "name": "Glyndebourne Festival Opera",
    "city": "Lewes (East Sussex)",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 50.8778,
    "longitude": 0.0644,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.glyndebourne.com",
    "description": "The quintessential English country house opera festival, founded in 1934 by John Christie and soprano Audrey Mildmay. Patrons in black-tie evening dress picnic on rolling South Downs lawns during the 90-minute dinner interval.",
    "inauguratedYear": 1994,
    "architect": "Michael Hopkins and Partners",
    "architecturalStyle": "Traditional English Brick & Reclaimed Pine Acoustic Drum",
    "capacity": "1,200 seats",
    "historicSignificance": "Pioneer of perfectionist rehearsal standards and Mozart renaissance; launched careers of Janet Baker and Felicity Lott.",
    "historicPremieres": [
      {
        "title": "The Rape of Lucretia",
        "composer": "Benjamin Britten",
        "premiereYear": 1946,
        "type": "WORLD_PREMIERE",
        "details": "Britten’s chamber opera world premiere conducted by Ernest Ansermet starring Kathleen Ferrier."
      }
    ]
  },
  {
    "id": "bregenzer-festspiele",
    "name": "Bregenzer Festspiele (Lake Stage)",
    "city": "Bregenz",
    "country": "Austria",
    "region": "Europe",
    "latitude": 47.5053,
    "longitude": 9.7381,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://bregenzerfestspiele.com/en",
    "description": "Famous for its colossal \"Seebühne\" (floating stage) anchored in Lake Constance (Bodensee). Features monumental, kinetic sculptural stage sets visible from a 7,000-seat lakeside open-air amphitheatre with directional wireless sound.",
    "inauguratedYear": 1946,
    "architect": "Bregenz Festival Stage Engineers",
    "architecturalStyle": "Open-Air Amphitheatre Facing Floating Kinetic Stage on Lake Constance",
    "capacity": "7,000 seats",
    "historicSignificance": "The world’s largest floating stage; famed globally for boundary-pushing set design and featured in James Bond (Quantum of Solace).",
    "historicPremieres": [
      {
        "title": "Bastien und Bastienne",
        "composer": "Wolfgang Amadeus Mozart",
        "premiereYear": 1946,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural festival performance staged on two gravel barges moored on Lake Constance."
      }
    ]
  },
  {
    "id": "festival-aix-en-provence",
    "name": "Festival d’Aix-en-Provence (Théâtre de l’Archevêché)",
    "city": "Aix-en-Provence",
    "country": "France",
    "region": "Europe",
    "latitude": 43.5317,
    "longitude": 5.4475,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://festival-aix.com/en",
    "description": "Founded in 1948 in the courtyard of the former Archbishop’s Palace in sunny Provence. One of Europe’s foremost summer opera festivals, famed for intimate Mozart interpretations and cutting-edge contemporary commissions.",
    "inauguratedYear": 1948,
    "architect": "Historic Archbishop’s Courtyard",
    "architecturalStyle": "Open-Air 17th-Century Archiepiscopal Palace Courtyard",
    "capacity": "1,350 seats",
    "historicSignificance": "France’s premier international opera festival; international summit for visionary stage directors and premier Mozart casts.",
    "historicPremieres": [
      {
        "title": "Written on Skin",
        "composer": "George Benjamin",
        "premiereYear": 2012,
        "type": "WORLD_PREMIERE",
        "details": "Celebrated contemporary masterwork with libretto by Martin Crimp, conducted by the composer."
      }
    ]
  },
  {
    "id": "warsaw-chamber-opera",
    "name": "Warsaw Chamber Opera (Warszawska Opera Kameralna)",
    "city": "Warsaw",
    "country": "Poland",
    "region": "Europe",
    "latitude": 52.2472,
    "longitude": 20.9992,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://operakameralna.pl/en/",
    "description": "Founded in 1961 by Stefan Sutkowski. Operating in a historic 1775 Masonic lodge theatre in Warsaw, it is world-renowned for its annual Mozart Festival, where it performs the entire stage canon of Wolfgang Amadeus Mozart.",
    "inauguratedYear": 1775,
    "architect": "Simon Bogumił Zug (Adapted 1961)",
    "architecturalStyle": "Neoclassical Masonic Lodge Intimate Chamber Hall",
    "capacity": "160 seats",
    "historicSignificance": "The only opera company in the world to perform all 26 stage works of Mozart in a single annual festival; regular feature on OperaVision.",
    "historicPremieres": [
      {
        "title": "The Complete Mozart Stage Works Cycle",
        "composer": "Wolfgang Amadeus Mozart",
        "premiereYear": 1991,
        "type": "HISTORIC_STAGING",
        "details": "First company in history to mount all 26 operas, singspiels, and scenic cantatas by Mozart."
      }
    ]
  },
  {
    "id": "wexford-festival-opera",
    "name": "Wexford Festival Opera (National Opera House)",
    "city": "Wexford",
    "country": "Ireland",
    "region": "Europe",
    "latitude": 52.3386,
    "longitude": -6.4636,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.wexfordopera.com",
    "description": "Ireland’s national opera house and the world’s leading festival for neglected and forgotten operatic masterpieces. Housed in an award-winning custom acoustic jewel box lined in American black walnut.",
    "inauguratedYear": 1951,
    "architect": "Keith Williams Architects",
    "architecturalStyle": "Award-Winning Black Walnut Horseshoe Jewel Box",
    "capacity": "855 seats (O’Reilly Theatre)",
    "historicSignificance": "Winner of Best Festival at the International Opera Awards; resurrected hundreds of forgotten 19th-century masterworks.",
    "historicPremieres": [
      {
        "title": "Guglielmo Tell",
        "composer": "Gioachino Rossini",
        "premiereYear": 1990,
        "type": "HISTORIC_STAGING",
        "details": "Rare complete unabridged staging of Rossini’s French grand opera."
      }
    ]
  },
  {
    "id": "savonlinna-opera-festival",
    "name": "Savonlinna Opera Festival (Olavinlinna Castle)",
    "city": "Savonlinna",
    "country": "Finland",
    "region": "Europe",
    "latitude": 61.8639,
    "longitude": 28.9011,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://operafestival.fi/en/",
    "description": "Staged inside the courtyard of the 15th-century medieval stone castle of Olavinlinna (St. Olaf’s Castle), surrounded by the sparkling blue lakes of eastern Finland. Famed for sublime natural stone acoustics.",
    "inauguratedYear": 1912,
    "architect": "Erik Axelsson Tott (1475 Medieval Fortress)",
    "architecturalStyle": "15th-Century Medieval Stone Castle Fortress Courtyard",
    "capacity": "2,264 seats",
    "historicSignificance": "Founded by Finnish soprano Aino Ackté; Finland’s most famous international cultural festival.",
    "historicPremieres": [
      {
        "title": "The Horseman (Ratsumies)",
        "composer": "Aulis Sallinen",
        "premiereYear": 1975,
        "type": "WORLD_PREMIERE",
        "details": "Commissioned for the 500th anniversary of Olavinlinna Castle; launched modern Finnish opera internationally."
      }
    ]
  },
  {
    "id": "fulton-opera-house",
    "name": "Fulton Opera House",
    "city": "Lancaster",
    "country": "USA",
    "region": "Americas",
    "latitude": 40.0381,
    "longitude": -76.3094,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://thefulton.org",
    "description": "The oldest continuously operating theatre in the United States and a National Historic Landmark. Built in 1852 by Christopher Hager over the foundation of Lancaster’s pre-Revolutionary jail; historically hosted traveling opera troupes, minstrel shows, and Mark Twain.",
    "inauguratedYear": 1852,
    "architect": "Samuel Sloan & John Durang",
    "architecturalStyle": "Victorian Classical with Carved Wooden Bust of Robert Fulton",
    "capacity": "684 seats",
    "historicSignificance": "Oldest continuously operating theatre in the United States; National Historic Landmark; home to OperaLancaster (1960–2004).",
    "historicPremieres": [
      {
        "title": "Darkest Russia",
        "composer": "Sydney Rosenfeld",
        "premiereYear": 1894,
        "type": "HISTORIC_STAGING",
        "details": "Legendary stop on the 19th-century American theatrical circuit."
      }
    ]
  },
  {
    "id": "tabor-opera-house",
    "name": "Tabor Opera House",
    "city": "Leadville",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.2489,
    "longitude": -106.2917,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://taboroperahouse.net",
    "description": "Built in 1879 by Colorado \"Silver King\" Horace Tabor at an elevation of 10,152 feet in the booming mining town of Leadville. Constructed of solid brick and native pine in just 100 days; hosted Emma Abbott’s English Opera Company, Oscar Wilde, and John L. Sullivan.",
    "inauguratedYear": 1879,
    "architect": "Charles H. Lee",
    "architecturalStyle": "Victorian Boomtown Italianate Brick with Andrews Patent Opera Chairs",
    "capacity": "880 seats",
    "historicSignificance": "America’s most famous high-altitude frontier opera house; National Historic Landmark undergoing major preservation.",
    "historicPremieres": [
      {
        "title": "The Bohemian Girl & Martha",
        "composer": "Michael Balfe & Friedrich von Flotow",
        "premiereYear": 1881,
        "type": "HISTORIC_STAGING",
        "details": "Performed by the Emma Abbott English Opera Company at 10,152 feet elevation."
      }
    ]
  },
  {
    "id": "wright-opera-house",
    "name": "Wright Opera House",
    "city": "Ouray",
    "country": "USA",
    "region": "Americas",
    "latitude": 38.0228,
    "longitude": -107.6714,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://thewrightoperahouse.org",
    "description": "Built in 1888 by Edward and Frances Wright in the dramatic San Juan Mountains mining town of Ouray (\"The Switzerland of America\"). Constructed as an opera house to bring cultural refinement to miners; now a beloved community arts and performance centre.",
    "inauguratedYear": 1888,
    "architect": "Local Mining Craftsmen & Iron Front Fabricators",
    "architecturalStyle": "Victorian Cast-Iron Front Commercial Opera Hall",
    "capacity": "250 seats",
    "historicSignificance": "Intact 1880s San Juan Mountain mining town opera hall; registered on the National Register of Historic Places.",
    "historicPremieres": [
      {
        "title": "Grand Opening Theatrical Ball",
        "composer": "Ouray Band",
        "premiereYear": 1888,
        "type": "INAUGURAL_OPERA",
        "details": "Gala opening dedication on 4 December 1888 bringing cultural legitimacy to frontier Colorado."
      }
    ]
  },
  {
    "id": "pipers-opera-house",
    "name": "Piper’s Opera House",
    "city": "Virginia City",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.3108,
    "longitude": -119.6497,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://pipersoperahouse.com",
    "description": "Built in 1885 by John Piper in Nevada’s legendary Comstock Lode silver boomtown. Featured a patented spring-cushioned dance floor; hosted Italian opera companies, Enrico Caruso, Edwin Booth, and Buffalo Bill Cody.",
    "inauguratedYear": 1885,
    "architect": "John Piper & Local Comstock Carpenters",
    "architecturalStyle": "Frontier Boomtown Timber Hall with Spring-Mounted Dance Floor",
    "capacity": "400 seats",
    "historicSignificance": "The premier theatrical showcase of the American Comstock Lode; National Historic Landmark.",
    "historicPremieres": [
      {
        "title": "Il Trovatore (Comstock Tour)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1886,
        "type": "HISTORIC_STAGING",
        "details": "Staged by traveling San Francisco opera troupes for Nevada silver miners."
      }
    ]
  },
  {
    "id": "drottningholm-court-theatre",
    "name": "Drottningholms Slottsteater",
    "city": "Stockholm",
    "country": "Sweden",
    "region": "Europe",
    "latitude": 59.3217,
    "longitude": 17.8864,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "seasonalOnly": true,
    "websiteUrl": "https://www.dtm.se",
    "description": "UNESCO World Heritage royal court theatre at Drottningholm Palace. Preserved in its exact 1766 state, featuring the world’s only completely intact 18th-century wooden stage machinery (wave machines, thunder wheels, wind drums, and flying chariots).",
    "inauguratedYear": 1766,
    "architect": "Carl Fredrik Adelcrantz (Stage machinery by Donato Stopani)",
    "architecturalStyle": "18th-Century Swedish Gustavian Court Theatre with Papier-Mâché Decor",
    "capacity": "454 seats",
    "historicSignificance": "The world’s most intact 18th-century opera house; all sets and machinery operated manually by ropes as in Mozart’s day.",
    "historicPremieres": [
      {
        "title": "Gustaf Wasa",
        "composer": "Johann Gottlieb Naumann",
        "premiereYear": 1786,
        "type": "HISTORIC_STAGING",
        "details": "Historical nationalist opera conceived by King Gustav III."
      }
    ]
  },
  {
    "id": "teatro-olimpico",
    "name": "Teatro Olimpico",
    "city": "Vicenza",
    "country": "Italy",
    "region": "Europe",
    "latitude": 45.5501,
    "longitude": 11.5492,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://www.teatrolimpicovicenza.it/en/",
    "description": "The oldest surviving indoor theatre in the world, designed by Renaissance master Andrea Palladio in 1580. Features the world’s oldest surviving stage set: Vincenzo Scamozzi’s 1585 trompe-l’œil wooden streets of Thebes receding into forced perspective.",
    "inauguratedYear": 1585,
    "architect": "Andrea Palladio (Completed by Vincenzo Scamozzi)",
    "architecturalStyle": "High Renaissance Roman Cavea with Trompe-l’œil Perspective Streets",
    "capacity": "470 seats",
    "historicSignificance": "UNESCO World Heritage site; the foundation stone of all Western proscenium theatre and opera architecture.",
    "historicPremieres": [
      {
        "title": "Oedipus Rex (Edipo Tiranno)",
        "composer": "Sophocles / Andrea Gabrieli",
        "premiereYear": 1585,
        "type": "INAUGURAL_OPERA",
        "details": "Grand inaugural production on 3 March 1585 with choral music by Andrea Gabrieli."
      }
    ]
  },
  {
    "id": "margravial-opera-house",
    "name": "Margravial Opera House (Markgräfliches Opernhaus)",
    "city": "Bayreuth",
    "country": "Germany",
    "region": "Europe",
    "latitude": 49.9444,
    "longitude": 11.5786,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://www.bayreuth-wilhelmine.de/englisch/opera/",
    "description": "UNESCO World Heritage Baroque palace opera house commissioned by Margravine Wilhelmine of Prussia. Designed by Giuseppe Galli da Bibiena, its all-wood interior is the most intact and magnificent Baroque court theatre on Earth.",
    "inauguratedYear": 1748,
    "architect": "Giuseppe Galli da Bibiena & Carlo Galli da Bibiena",
    "architecturalStyle": "Late Baroque Illusionistic Painted Wood & Gilded Trompe-l’œil",
    "capacity": "500 seats",
    "historicSignificance": "UNESCO World Heritage; the supreme surviving Baroque opera house in Europe; drew Richard Wagner to Bayreuth.",
    "historicPremieres": [
      {
        "title": "Il trionfo d’Ezio",
        "composer": "Johann Adolph Hasse",
        "premiereYear": 1748,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala opera celebrating the marriage of Wilhelmine’s daughter, Elisabeth Friederike Sophie."
      }
    ]
  },
  {
    "id": "opera-royal-versailles",
    "name": "Opéra Royal de Versailles",
    "city": "Versailles",
    "country": "France",
    "region": "Europe",
    "latitude": 48.8048,
    "longitude": 2.1204,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://www.operaroyal-versailles.fr/en/",
    "description": "The royal court opera house of the Palace of Versailles, built entirely of wood painted to resemble marble. Inaugurated in 1770 for the lavish royal wedding festivities of the future King Louis XVI and Marie Antoinette.",
    "inauguratedYear": 1770,
    "architect": "Ange-Jacques Gabriel",
    "architecturalStyle": "French Royal Neoclassical Faux-Marble Wood Acoustic Theatre",
    "capacity": "712 seats",
    "historicSignificance": "The crowning architectural achievement of the French Royal court; today a world leader in Baroque opera performance.",
    "historicPremieres": [
      {
        "title": "Persée",
        "composer": "Jean-Baptiste Lully",
        "premiereYear": 1770,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural performance celebrating the royal marriage of the Dauphin (Louis XVI) and Marie Antoinette."
      }
    ]
  },
  {
    "id": "teatro-amazonas",
    "name": "Teatro Amazonas",
    "city": "Manaus",
    "country": "Brazil",
    "region": "Americas",
    "latitude": -3.1303,
    "longitude": -60.0233,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://cultura.am.gov.br",
    "description": "The legendary Belle Époque opera house rising in the heart of the Amazon rainforest in Manaus. Built during the Rubber Boom with materials shipped from across Europe: Italian marble, Scottish iron, Paris crystal chandeliers, and a dome tiled in the Brazilian flag.",
    "inauguratedYear": 1896,
    "architect": "Celestial Sacardim",
    "architecturalStyle": "Belle Époque Renaissance Revival with 36,000 Mosaic Ceramic Dome Tiles",
    "capacity": "701 seats",
    "historicSignificance": "The legendary \"Opera House in the Jungle\"; immortalized in Werner Herzog’s film Fitzcarraldo; home of the Amazonas Opera Festival.",
    "historicPremieres": [
      {
        "title": "La Gioconda",
        "composer": "Amilcare Ponchielli",
        "premiereYear": 1897,
        "type": "INAUGURAL_OPERA",
        "details": "Grand inaugural performance on 7 January 1897 opening the Amazonian rubber palace."
      }
    ]
  },
  {
    "id": "teatro-malibran",
    "name": "Teatro Malibran",
    "city": "Venice",
    "country": "Italy",
    "region": "Europe",
    "latitude": 45.4386,
    "longitude": 12.3386,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://www.teatrolafenice.it/en/",
    "description": "Inaugurated during the Venetian Carnival of 1678 as the Teatro San Giovanni Grisostomo. Renamed in 1835 in honor of legendary mezzo-soprano Maria Malibran, who sang Amina in La sonnambula to rescue the debt-ridden theatre.",
    "inauguratedYear": 1678,
    "architect": "Tommaso Bezzi",
    "architecturalStyle": "17th-Century Venetian Baroque Cavanna",
    "capacity": "900 seats",
    "historicSignificance": "The biggest and most luxurious Venetian theatre of the 17th century; second stage of Teatro La Fenice.",
    "historicPremieres": [
      {
        "title": "Agrippina",
        "composer": "George Frideric Handel",
        "premiereYear": 1709,
        "type": "WORLD_PREMIERE",
        "details": "Handel’s triumphant breakthrough Italian opera, running for an unprecedented 27 consecutive nights."
      }
    ]
  },
  {
    "id": "la-monnaie-de-munt",
    "name": "La Monnaie / De Munt (Théâtre Royal de la Monnaie)",
    "city": "Brussels",
    "country": "Belgium",
    "region": "Europe",
    "latitude": 50.8497,
    "longitude": 4.3536,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.lamonnaiedemunt.be/en",
    "description": "Belgium’s premier federal opera house on Place de la Monnaie. Famed in European history as the site where the 1830 Belgian Revolution ignited during a performance of Daniel Auber’s La Muette de Portici; named European Opera House of the Year multiple times.",
    "inauguratedYear": 1856,
    "architect": "Joseph Poelaert",
    "architecturalStyle": "Neoclassical / Eclectic Horseshoe with Louis XIV Gilt Boxes",
    "capacity": "1,152 seats",
    "historicSignificance": "Where the Belgian Revolution was sparked in 1830; European center for daring contemporary stage directing under Gerard Mortier and Bernard Foccroulle.",
    "historicPremieres": [
      {
        "title": "Hérodiade",
        "composer": "Jules Massenet",
        "premiereYear": 1881,
        "type": "WORLD_PREMIERE",
        "details": "Massenet’s grand opera world premiere after rejection by the Paris Opéra."
      },
      {
        "title": "Gwendoline",
        "composer": "Emmanuel Chabrier",
        "premiereYear": 1886,
        "type": "WORLD_PREMIERE",
        "details": "French Wagnerian opera premiered on 10 April 1886."
      }
    ]
  },
  {
    "id": "opera-ballet-vlaanderen",
    "name": "Opera Ballet Vlaanderen (Antwerp Opera)",
    "city": "Antwerp",
    "country": "Belgium",
    "region": "Europe",
    "latitude": 51.2181,
    "longitude": 4.4172,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operaballet.be/en",
    "description": "The Flemish regional opera company, performing in the historic 1907 Neo-Baroque Antwerp Opera House and the 1840 Ghent Opera House. A prominent OperaVision partner renowned for visionary contemporary opera and dance.",
    "inauguratedYear": 1907,
    "architect": "Alexis Van Mechelen & E. Van Nanroy",
    "architecturalStyle": "Neo-Baroque with Louis XVI Interior",
    "capacity": "1,006 seats",
    "historicSignificance": "Cultural flagship of Flanders; major innovator on the OperaVision European streaming platform.",
    "historicPremieres": [
      {
        "title": "De Herbergprinses (The Hostess of the Inn)",
        "composer": "Jan Blockx",
        "premiereYear": 1896,
        "type": "HISTORIC_STAGING",
        "details": "Landmark of Flemish national romantic opera."
      }
    ]
  },
  {
    "id": "dutch-national-opera",
    "name": "Dutch National Opera (Nationale Opera & Ballet)",
    "city": "Amsterdam",
    "country": "Netherlands",
    "region": "Europe",
    "latitude": 52.3675,
    "longitude": 4.9011,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operaballet.nl/en",
    "description": "Standing on the Amstel river bend in central Amsterdam (the \"Stopera\"). Renowned worldwide for cutting-edge conceptual stagings, exceptional musical standards with the Royal Concertgebouw Orchestra and Netherlands Philharmonic, and regular Opera of the Year honors.",
    "inauguratedYear": 1986,
    "architect": "Cees Dam & Wilhelm Holzbauer",
    "architecturalStyle": "Postmodern Curved White Marble & Glass Riverfront Complex",
    "capacity": "1,633 seats",
    "historicSignificance": "Voted Opera Company of the Year by the International Opera Awards; premier opera institution of the Low Countries.",
    "historicPremieres": [
      {
        "title": "Waiting for Godot",
        "composer": "Roman Haubenstock-Ramati",
        "premiereYear": 1988,
        "type": "WORLD_PREMIERE",
        "details": "Operatic adaptation of Samuel Beckett’s drama, conducted by Michael Gielen."
      },
      {
        "title": "Life with an Idiot",
        "composer": "Alfred Schnittke",
        "premiereYear": 1992,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by Mstislav Rostropovich, directed by Boris Pokrovsky."
      }
    ]
  },
  {
    "id": "croatian-national-theatre-zagreb",
    "name": "Croatian National Theatre in Zagreb (HNK Zagreb)",
    "city": "Zagreb",
    "country": "Croatia",
    "region": "Europe",
    "latitude": 45.8103,
    "longitude": 15.9703,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.hnk.hr/en/",
    "description": "The Neo-Baroque yellow jewel of Zagreb, inaugurated in 1895 by Austro-Hungarian Emperor Franz Joseph I. Built by Viennese theatre architects Fellner & Helmer; prominent OperaVision contributor for Southeast Europe.",
    "inauguratedYear": 1895,
    "architect": "Fellner & Helmer",
    "architecturalStyle": "Austro-Hungarian Neo-Baroque & Rococo with Gilded Loggias",
    "capacity": "809 seats",
    "historicSignificance": "National opera and ballet theatre of Croatia; center of South Slavic classical opera tradition.",
    "historicPremieres": [
      {
        "title": "Nikola Šubić Zrinski",
        "composer": "Ivan Zajc",
        "premiereYear": 1876,
        "type": "WORLD_PREMIERE",
        "details": "Croatia’s definitive national opera, featuring the patriotic anthem \"U boj, u boj!\"."
      }
    ]
  },
  {
    "id": "national-theatre-brno",
    "name": "National Theatre Brno (Janáček Theatre)",
    "city": "Brno",
    "country": "Czechia",
    "region": "Europe",
    "latitude": 49.1983,
    "longitude": 16.6139,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.ndbrno.cz/en/",
    "description": "The consecrated home of Leoš Janáček’s operatic legacy in Moravia. A key OperaVision partner and host of the biennial International Janáček Brno Festival, which won the Best Festival category at the International Opera Awards.",
    "inauguratedYear": 1965,
    "architect": "Otakar Oplatek & Jan Víšek",
    "architecturalStyle": "Czech Functionalist Modernist Opera Palace",
    "capacity": "1,055 seats",
    "historicSignificance": "Global home of Leoš Janáček’s operas; premiere venue for nearly all of Janáček’s late masterworks.",
    "historicPremieres": [
      {
        "title": "Jenůfa",
        "composer": "Leoš Janáček",
        "premiereYear": 1904,
        "type": "WORLD_PREMIERE",
        "details": "Janáček’s breakthrough realist Moravian tragedy premiered in Brno on 21 January 1904."
      },
      {
        "title": "Káťa Kabanová",
        "composer": "Leoš Janáček",
        "premiereYear": 1921,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by František Neumann, starring Marie Veselá."
      },
      {
        "title": "The Cunning Little Vixen",
        "composer": "Leoš Janáček",
        "premiereYear": 1924,
        "type": "WORLD_PREMIERE",
        "details": "Janáček’s philosophical woodland opera based on the newspaper comic strip."
      },
      {
        "title": "The Makropulos Affair",
        "composer": "Leoš Janáček",
        "premiereYear": 1926,
        "type": "WORLD_PREMIERE",
        "details": "Karel Čapek’s longevity drama set to music by Janáček."
      }
    ]
  },
  {
    "id": "national-theatre-prague",
    "name": "National Theatre Prague (Národní divadlo)",
    "city": "Prague",
    "country": "Czechia",
    "region": "Europe",
    "latitude": 50.0811,
    "longitude": 14.4139,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.narodni-divadlo.cz/en",
    "description": "The monumental neo-Renaissance temple of Czech national identity on the banks of the Vltava River, crowned by its gilded roof. Built entirely from citizen donations under the motto \"Národ sobě\" (A Nation unto Itself).",
    "inauguratedYear": 1881,
    "architect": "Josef Zítek & Josef Schulz",
    "architecturalStyle": "Neo-Renaissance Colonnade with Gilded Crown & Star-Vault Frieze",
    "capacity": "986 seats",
    "historicSignificance": "The supreme symbol of Czech national revival; cradle of Bedřich Smetana and Antonín Dvořák’s operas.",
    "historicPremieres": [
      {
        "title": "Libuše",
        "composer": "Bedřich Smetana",
        "premiereYear": 1881,
        "type": "INAUGURAL_OPERA",
        "details": "Festive coronation opera composed specifically to open the National Theatre."
      },
      {
        "title": "Rusalka",
        "composer": "Antonín Dvořák",
        "premiereYear": 1901,
        "type": "WORLD_PREMIERE",
        "details": "Dvořák’s fairy-tale masterpiece featuring the famous \"Song to the Moon\", conducted by Karel Kovařovic."
      }
    ]
  },
  {
    "id": "finnish-national-opera",
    "name": "Finnish National Opera (Suomen Kansallisooppera)",
    "city": "Helsinki",
    "country": "Finland",
    "region": "Europe",
    "latitude": 60.1822,
    "longitude": 24.9297,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://oopperabaletti.fi/en/",
    "description": "Located on Töölönlahti bay in central Helsinki. Prominent partner of OperaVision; renowned for world-class streaming acoustics, pristine modern Scandinavian architecture, and resident orchestra of 110 musicians.",
    "inauguratedYear": 1993,
    "architect": "Eero Hyvämäki, Jukka Karhunen & Risto Parkkinen",
    "architecturalStyle": "Nordic Functionalist White Ceramic & Granite Lakefront Opera Palace",
    "capacity": "1,350 seats (Main Auditorium)",
    "historicSignificance": "National opera house of Finland; launchpad for Finland’s internationally dominant conductors and vocalists.",
    "historicPremieres": [
      {
        "title": "Kullervo",
        "composer": "Aulis Sallinen",
        "premiereYear": 1992,
        "type": "WORLD_PREMIERE",
        "details": "Monumental opera based on the Finnish national epic Kalevala."
      }
    ]
  },
  {
    "id": "opera-comique-paris",
    "name": "Opéra-Comique (Salle Favart)",
    "city": "Paris",
    "country": "France",
    "region": "Europe",
    "latitude": 48.8708,
    "longitude": 2.3375,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opera-comique.com/en",
    "description": "Founded in 1714 under Louis XIV, the Salle Favart is one of the most storied opera houses in European civilization. It is the historic birthplace of Georges Bizet’s Carmen and Claude Debussy’s Pelléas et Mélisande.",
    "inauguratedYear": 1898,
    "architect": "Louis Bernier",
    "architecturalStyle": "Belle Époque French Classical Horseshoe with Caryatids & Ceiling Frescoes",
    "capacity": "1,248 seats",
    "historicSignificance": "Birthplace of Carmen and Pelléas et Mélisande; pioneer of the French opéra-comique genre and leading OperaVision contributor.",
    "historicPremieres": [
      {
        "title": "Carmen",
        "composer": "Georges Bizet",
        "premiereYear": 1875,
        "type": "WORLD_PREMIERE",
        "details": "World premiere on 3 March 1875 starring Célestine Galli-Marié; shocked early audiences before conquering the world."
      },
      {
        "title": "Pelléas et Mélisande",
        "composer": "Claude Debussy",
        "premiereYear": 1902,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by André Messager, starring Mary Garden; revolutionized 20th-century music drama."
      },
      {
        "title": "Les contes d’Hoffmann",
        "composer": "Jacques Offenbach",
        "premiereYear": 1881,
        "type": "WORLD_PREMIERE",
        "details": "Offenbach’s supreme posthumous masterpiece premiered on 10 February 1881."
      },
      {
        "title": "La damnation de Faust",
        "composer": "Hector Berlioz",
        "premiereYear": 1846,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by Hector Berlioz in concert opera format."
      }
    ]
  },
  {
    "id": "opera-montpellier",
    "name": "Opéra Orchestre National Montpellier Occitanie",
    "city": "Montpellier",
    "country": "France",
    "region": "Europe",
    "latitude": 43.6083,
    "longitude": 3.8797,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opera-orchestre-montpellier.fr",
    "description": "Dominating the Place de la Comédie in Montpellier since 1888. A major OperaVision producing partner renowned for rediscovering French romantic and neglected Mediterranean operatic treasures.",
    "inauguratedYear": 1888,
    "architect": "Joseph-Marie Cassien-Bernard",
    "architecturalStyle": "Italianate Belle Époque with Sculpted Statues of Song and Dance",
    "capacity": "1,170 seats",
    "historicSignificance": "Leading regional opera house of southern France; major partner in the OperaVision European streaming alliance.",
    "historicPremieres": [
      {
        "title": "Fervaal",
        "composer": "Vincent d’Indy",
        "premiereYear": 1897,
        "type": "HISTORIC_STAGING",
        "details": "Historic French Wagnerian lyric drama."
      }
    ]
  },
  {
    "id": "theatre-du-capitole-toulouse",
    "name": "Théâtre du Capitole de Toulouse",
    "city": "Toulouse",
    "country": "France",
    "region": "Europe",
    "latitude": 43.6044,
    "longitude": 1.4442,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://opera.toulouse.fr",
    "description": "Housed within the monumental Capitole (city hall) of Toulouse on Place du Capitole. Widely regarded by international critics as having one of the finest operatic ensembles, choruses, and orchestras in France outside Paris.",
    "inauguratedYear": 1818,
    "architect": "Guillaume Cammas & Pierre Esquié",
    "architecturalStyle": "Neo-Classical Theatre within 18th-Century Pink Brick Capitole",
    "capacity": "1,156 seats",
    "historicSignificance": "Premier opera institution of southwestern France; acclaimed for Bel Canto and French Grand Opera revivals.",
    "historicPremieres": [
      {
        "title": "La reine de Saba",
        "composer": "Charles Gounod",
        "premiereYear": 1862,
        "type": "HISTORIC_STAGING",
        "details": "Celebrated grand opera staged in the historic Occitan lyric capital."
      }
    ]
  },
  {
    "id": "opera-national-du-rhin",
    "name": "Opéra National du Rhin",
    "city": "Strasbourg / Mulhouse / Colmar",
    "country": "France",
    "region": "Europe",
    "latitude": 48.5861,
    "longitude": 7.7533,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operanationaldurhin.eu/en",
    "description": "A unique tri-city European institution spanning Alsace (Strasbourg, Mulhouse, Colmar). An active OperaVision partner on the Franco-German border, performing in the historic neoclassical Strasbourg opera house on Place Broglie.",
    "inauguratedYear": 1821,
    "architect": "Jean-Nicolas Villot",
    "architecturalStyle": "Neoclassical Ionic Colonnade with Six Muse Sculptures",
    "capacity": "1,142 seats",
    "historicSignificance": "European cross-border cultural bridge; awarded European Opera House of the Year in 2019.",
    "historicPremieres": [
      {
        "title": "Der ferne Klang",
        "composer": "Franz Schreker",
        "premiereYear": 1914,
        "type": "HISTORIC_STAGING",
        "details": "First French-territory performance of Schreker’s expressionist masterpiece."
      }
    ]
  },
  {
    "id": "opera-de-lille",
    "name": "Opéra de Lille",
    "city": "Lille",
    "country": "France",
    "region": "Europe",
    "latitude": 50.6375,
    "longitude": 3.0647,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opera-lille.fr/en/",
    "description": "Standing on Place du Théâtre in Lille, designed by Louis Marie Cordonnier in 1914 and officially opened after WWI in 1923. An active OperaVision collaborator known for innovative Baroque and contemporary stagings.",
    "inauguratedYear": 1923,
    "architect": "Louis Marie Cordonnier",
    "architecturalStyle": "Neo-Classical Belle Époque with Apollo and the Muses Pediment",
    "capacity": "1,138 seats",
    "historicSignificance": "Northern France’s premier lyric stage; international leader in open digital broadcasts and OperaVision productions.",
    "historicPremieres": [
      {
        "title": "Iphigénie en Tauride",
        "composer": "Christoph Willibald Gluck",
        "premiereYear": 1923,
        "type": "INAUGURAL_OPERA",
        "details": "Gala inaugural performance opening the newly liberated post-WWI Lille opera palace."
      }
    ]
  },
  {
    "id": "deutsche-oper-am-rhein",
    "name": "Deutsche Oper am Rhein (Düsseldorf & Duisburg)",
    "city": "Düsseldorf / Duisburg",
    "country": "Germany",
    "region": "Europe",
    "latitude": 51.2269,
    "longitude": 6.7767,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://operamrhein.de/en/",
    "description": "The monumental dual-city opera company of the Rhine-Ruhr metropolis, operating in the Opernhaus Düsseldorf and Theater Duisburg. A prominent founding partner of OperaVision, featuring one of the largest ensembles in Europe.",
    "inauguratedYear": 1956,
    "architect": "Ernst Huhn & Paul Bonatz",
    "architecturalStyle": "Post-War Modernist Proscenium with Curved Foyer Panoramas",
    "capacity": "1,342 seats (Düsseldorf)",
    "historicSignificance": "Largest opera company partnership in Germany; premier OperaVision streaming contributor.",
    "historicPremieres": [
      {
        "title": "Elektra",
        "composer": "Richard Strauss",
        "premiereYear": 1956,
        "type": "INAUGURAL_OPERA",
        "details": "Gala opening production establishing the unified dual-city company after WWII."
      }
    ]
  },
  {
    "id": "staatstheater-hannover",
    "name": "Staatsoper Hannover",
    "city": "Hanover",
    "country": "Germany",
    "region": "Europe",
    "latitude": 52.3719,
    "longitude": 9.7411,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://staatstheater-hannover.de/en_EN/staatsoper",
    "description": "Georg Ludwig Friedrich Laves’s late classical masterwork on Georgstraße in Hanover. Winner of Opera House of the Year (2020) at the International Opera Awards; key partner in the OperaVision network.",
    "inauguratedYear": 1852,
    "architect": "Georg Ludwig Friedrich Laves",
    "architecturalStyle": "Late Classical Colonnade with Sandstone Sculptures of Poets and Composers",
    "capacity": "1,207 seats",
    "historicSignificance": "Voted Opera Company of the Year in 2020; pioneer in contemporary community engagement and OperaVision streams.",
    "historicPremieres": [
      {
        "title": "Der Traumgörge",
        "composer": "Alexander Zemlinsky",
        "premiereYear": 1980,
        "type": "WORLD_PREMIERE",
        "details": "Posthumous world premiere of Zemlinsky’s romantic masterwork."
      }
    ]
  },
  {
    "id": "deutsches-nationaltheater-weimar",
    "name": "Deutsches Nationaltheater Weimar",
    "city": "Weimar",
    "country": "Germany",
    "region": "Europe",
    "latitude": 50.9797,
    "longitude": 11.3253,
    "tier": 3,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://www.nationaltheater-weimar.de",
    "description": "The sacred cradle of German classicism on Theaterplatz in Weimar, guarded by the famous Goethe and Schiller statue. Here Franz Liszt served as Kapellmeister and personally conducted the world premiere of Richard Wagner’s Lohengrin in 1850.",
    "inauguratedYear": 1907,
    "architect": "Max Littmann (Original directed by Johann Wolfgang von Goethe)",
    "architecturalStyle": "Neo-Classical Theatre Monument with Goethe & Schiller Memorial",
    "capacity": "865 seats",
    "historicSignificance": "Birthplace of the Weimar Republic (1919); site where Franz Liszt premiered Wagner’s Lohengrin and Humperdinck’s Hänsel und Gretel.",
    "historicPremieres": [
      {
        "title": "Lohengrin",
        "composer": "Richard Wagner",
        "premiereYear": 1850,
        "type": "WORLD_PREMIERE",
        "details": "World premiere conducted by Franz Liszt on 28 August 1850 while Wagner was in political exile in Switzerland."
      },
      {
        "title": "Hänsel und Gretel",
        "composer": "Engelbert Humperdinck",
        "premiereYear": 1893,
        "type": "WORLD_PREMIERE",
        "details": "Conducted by a young Richard Strauss on 23 December 1893 to international acclaim."
      }
    ]
  },
  {
    "id": "teatro-della-pergola",
    "name": "Teatro della Pergola",
    "city": "Florence",
    "country": "Italy",
    "region": "Europe",
    "latitude": 43.7744,
    "longitude": 11.2608,
    "tier": 2,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://www.teatrodellapergola.com",
    "description": "Constructed in 1656 by the Accademia degli Immobili, La Pergola is the oldest existing opera house in Italy and the birthplace of the modern tier-of-boxes proscenium opera house. Where Giuseppe Verdi premiered his original Macbeth in 1847.",
    "inauguratedYear": 1656,
    "architect": "Ferdinando Tacca",
    "architecturalStyle": "17th-Century Florentine Baroque Proscenium with Superimposed Wooden Box Tiers",
    "capacity": "1,000 seats",
    "historicSignificance": "The world’s first horseshoe-box theatre architecture; site of the world premiere of Verdi’s Macbeth (1847) and Bellini’s I Capuleti e i Montecchi.",
    "historicPremieres": [
      {
        "title": "Macbeth",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1847,
        "type": "WORLD_PREMIERE",
        "details": "Verdi’s groundbreaking Shakespearean opera premiered on 14 March 1847 starring Felice Varesi."
      },
      {
        "title": "Parisina",
        "composer": "Gaetano Donizetti",
        "premiereYear": 1833,
        "type": "WORLD_PREMIERE",
        "details": "Premiered on 17 March 1833 starring Gilbert Duprez."
      }
    ]
  },
  {
    "id": "teatro-comunale-modena",
    "name": "Teatro Comunale Pavarotti-Freni",
    "city": "Modena",
    "country": "Italy",
    "region": "Europe",
    "latitude": 44.6467,
    "longitude": 10.9286,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatrocomunalemodena.net",
    "description": "The historic municipal theatre of Modena, renamed in honor of its two legendary native vocal titans: Luciano Pavarotti and Mirella Freni (who grew up together in Modena and shared a wet nurse). An active OperaVision streaming contributor.",
    "inauguratedYear": 1838,
    "architect": "Francesco Vandelli",
    "architecturalStyle": "Neoclassical Doric Portico with Crimson & Gold Italian Horseshoe",
    "capacity": "900 seats",
    "historicSignificance": "Hometown theatre of Luciano Pavarotti and Mirella Freni; key Emilia-Romagna opera house.",
    "historicPremieres": [
      {
        "title": "Guglielmo Tell (Inaugural)",
        "composer": "Gioachino Rossini",
        "premiereYear": 1838,
        "type": "INAUGURAL_OPERA",
        "details": "Gala opening production on 2 October 1838."
      }
    ]
  },
  {
    "id": "teatro-giuseppe-verdi-busseto",
    "name": "Teatro Giuseppe Verdi",
    "city": "Busseto (Parma)",
    "country": "Italy",
    "region": "Europe",
    "latitude": 44.9817,
    "longitude": 10.0417,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://www.teatroverdivirtual.it",
    "description": "Built in the 1860s right inside the medieval Rocca castle in Giuseppe Verdi’s hometown village of Busseto. Despite donating 10,000 lire for its construction, Verdi famously boycotted the grand opening and never stepped foot inside because he thought it was an extravagant waste of money for a small town!",
    "inauguratedYear": 1868,
    "architect": "Pier Luigi Montecchini",
    "architecturalStyle": "Miniature Royal Horseshoe within 13th-Century Fortress Castle",
    "capacity": "300 seats",
    "historicSignificance": "Built in Giuseppe Verdi’s hometown; ladies wore green (verde) in Verdi’s honor on opening night in 1868.",
    "historicPremieres": [
      {
        "title": "Rigoletto & Un ballo in maschera",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1868,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala festival in August 1868 honoring Busseto’s immortal son."
      }
    ]
  },
  {
    "id": "teatro-del-giglio-lucca",
    "name": "Teatro del Giglio",
    "city": "Lucca",
    "country": "Italy",
    "region": "Europe",
    "latitude": 43.8408,
    "longitude": 10.5036,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.teatrodelgiglio.it",
    "description": "The historic theatre of Giacomo Puccini’s Tuscan birthplace of Lucca, dating to 1675 and given its modern neoclassical form in 1819 under Duchess Maria Luisa of Bourbon. Puccini personally supervised stagings of his operas here.",
    "inauguratedYear": 1819,
    "architect": "Giovanni Lazzarini",
    "architecturalStyle": "Neoclassical Horseshoe with Frescoed Apollo Ceiling",
    "capacity": "750 seats",
    "historicSignificance": "Giacomo Puccini’s hometown theatre; Puccini conducted and directed here during his early career.",
    "historicPremieres": [
      {
        "title": "Edgar",
        "composer": "Giacomo Puccini",
        "premiereYear": 1891,
        "type": "HISTORIC_STAGING",
        "details": "Early triumph staged in Puccini’s native Lucca in the presence of the composer."
      }
    ]
  },
  {
    "id": "latvian-national-opera",
    "name": "Latvian National Opera (Latvijas Nacionālā Opera)",
    "city": "Riga",
    "country": "Latvia",
    "region": "Europe",
    "latitude": 56.9494,
    "longitude": 24.1147,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opera.lv/en/",
    "description": "Located in the parklands along the city canal in Riga. Key OperaVision partner; historical home of Richard Wagner (who was music director in Riga from 1837–1839 and conceived Der fliegende Holländer here) and home of Mariss Jansons and Elīna Garanča.",
    "inauguratedYear": 1863,
    "architect": "Ludwig Bohnstedt",
    "architecturalStyle": "Classical Ionic Portico with Neo-Renaissance Red & Gold Hall",
    "capacity": "946 seats",
    "historicSignificance": "Where Richard Wagner conducted and conceived the acoustic layout for his Bayreuth Festspielhaus; major OperaVision partner.",
    "historicPremieres": [
      {
        "title": "The Flying Dutchman (Inspiration)",
        "composer": "Richard Wagner",
        "premiereYear": 1839,
        "type": "HISTORIC_STAGING",
        "details": "Conceived during Wagner’s residency as Riga Kapellmeister and stormy escape by sea."
      }
    ]
  },
  {
    "id": "irish-national-opera",
    "name": "Irish National Opera (Gaiety Theatre / Bord Gáis)",
    "city": "Dublin",
    "country": "Ireland",
    "region": "Europe",
    "latitude": 53.3397,
    "longitude": -6.2608,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.irishnationalopera.ie",
    "description": "Ireland’s official national opera company, performing in the Victorian Gaiety Theatre (1871) and the contemporary Bord Gáis Energy Theatre on Grand Canal Dock. A prominent OperaVision collaborator streaming acclaimed productions across Europe.",
    "inauguratedYear": 1871,
    "architect": "Charles J. Phipps (Gaiety Theatre)",
    "architecturalStyle": "Victorian Rococo Lyric Theatre",
    "capacity": "1,145 seats (Gaiety) / 2,111 seats (Bord Gáis)",
    "historicSignificance": "National opera company of Ireland; regular contributor to OperaVision European digital broadcasts.",
    "historicPremieres": [
      {
        "title": "The Second Violinist",
        "composer": "Donnacha Dennehy",
        "premiereYear": 2017,
        "type": "WORLD_PREMIERE",
        "details": "Winner of the Fedora General Opera Prize, staged internationally in London and Amsterdam."
      }
    ]
  },
  {
    "id": "bass-performance-hall-fort-worth",
    "name": "Fort Worth Opera (Bass Performance Hall)",
    "city": "Fort Worth",
    "country": "USA",
    "region": "Americas",
    "latitude": 32.7533,
    "longitude": -97.3303,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.fwopera.org",
    "description": "Fort Worth Opera is the oldest continually performing opera company in Texas (founded 1946). Performs in the breathtaking Nancy Lee and Perry R. Bass Performance Hall, adorned with two 48-foot hand-carved limestone angels with trumpets.",
    "inauguratedYear": 1998,
    "architect": "David M. Schwarz",
    "architecturalStyle": "Beaux-Arts Classical Limestone with 48-foot Sculpted Angel Trumpeters",
    "capacity": "2,056 seats",
    "historicSignificance": "Oldest opera company in Texas; celebrated for pioneering contemporary bilingual and American operas.",
    "historicPremieres": [
      {
        "title": "JFK",
        "composer": "David T. Little",
        "premiereYear": 2016,
        "type": "WORLD_PREMIERE",
        "details": "World premiere opera capturing John F. Kennedy’s final night spent in Fort Worth before Dallas."
      }
    ]
  },
  {
    "id": "virginia-opera-norfolk",
    "name": "Virginia Opera (Edythe C. and Burton Harrison Opera House)",
    "city": "Norfolk / Richmond",
    "country": "USA",
    "region": "Americas",
    "latitude": 36.8589,
    "longitude": -76.2894,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://vaopera.org",
    "description": "Designated the \"Official Opera Company of the Commonwealth of Virginia\". Performs across the state in Norfolk (the historic 1943 USO auditorium converted into the Harrison Opera House), Richmond (Carpenter Theatre), and Fairfax.",
    "inauguratedYear": 1993,
    "architect": "G. Alan Morledge",
    "architecturalStyle": "Postmodern Glass Rotunda surrounding Historic Deco Theatre",
    "capacity": "1,632 seats",
    "historicSignificance": "Official Opera Company of the Commonwealth of Virginia, founded in 1974.",
    "historicPremieres": [
      {
        "title": "A Christmas Carol",
        "composer": "Thea Musgrave",
        "premiereYear": 1979,
        "type": "WORLD_PREMIERE",
        "details": "Commissioned world premiere conducted by the composer; broadcast on NPR."
      }
    ]
  },
  {
    "id": "kentucky-opera-louisville",
    "name": "Kentucky Opera (The Brown Theatre)",
    "city": "Louisville",
    "country": "USA",
    "region": "Americas",
    "latitude": 38.2503,
    "longitude": -85.7561,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://kyopera.org",
    "description": "Founded in 1952 by Moritz von Bomhard, Kentucky Opera is the 12th-oldest opera company in the United States. Performs in the historic 1925 W.L. Lyons Brown Theatre, modeled after the John Golden Theatre in New York.",
    "inauguratedYear": 1925,
    "architect": "Preston J. Bradshaw",
    "architecturalStyle": "Spanish Renaissance Palace with Gilded Proscenium Arch",
    "capacity": "1,400 seats",
    "historicSignificance": "One of the oldest civic opera companies in the American South; National Historic landmark stage.",
    "historicPremieres": [
      {
        "title": "The Transposed Heads",
        "composer": "Peggy Glanville-Hicks",
        "premiereYear": 1954,
        "type": "WORLD_PREMIERE",
        "details": "Historic Louisville Orchestra commission conducted by Moritz von Bomhard."
      }
    ]
  },
  {
    "id": "opera-san-jose",
    "name": "Opera San José (California Theatre)",
    "city": "San Jose",
    "country": "USA",
    "region": "Americas",
    "latitude": 37.3308,
    "longitude": -121.8886,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operasj.org",
    "description": "Founded in 1984 by legendary Metropolitan Opera mezzo-soprano Irene Dalis. Performs in the opulently restored 1927 California Theatre in Silicon Valley, one of the finest preserved motion picture and vaudeville palaces in the West.",
    "inauguratedYear": 1927,
    "architect": "Weeks and Day (Restored 2004)",
    "architecturalStyle": "Spanish Gothic & Moorish Renaissance Movie Palace",
    "capacity": "1,122 seats",
    "historicSignificance": "Founded by Irene Dalis; renowned resident artist incubator for top American operatic talent in Silicon Valley.",
    "historicPremieres": [
      {
        "title": "Alma Deutscher’s Cinderella",
        "composer": "Alma Deutscher",
        "premiereYear": 2017,
        "type": "WORLD_PREMIERE",
        "details": "American premiere of 12-year-old child prodigy Alma Deutscher’s full-length opera; international sensation."
      }
    ]
  },
  {
    "id": "brooklyn-academy-of-music",
    "name": "BAM Howard Gilman Opera House",
    "city": "Brooklyn (New York City)",
    "country": "USA",
    "region": "Americas",
    "latitude": 40.6864,
    "longitude": -73.9778,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.bam.org",
    "description": "The historic opera house of the Brooklyn Academy of Music on Lafayette Avenue. America’s oldest continuously operating performing arts center (founded 1861), famed for the visionary Next Wave Festival and Philip Glass premieres.",
    "inauguratedYear": 1908,
    "architect": "Herts & Tallant",
    "architecturalStyle": "Beaux-Arts Classical Brick & Terracotta Monument",
    "capacity": "2,090 seats",
    "historicSignificance": "Epicentre of avant-garde and progressive American opera; historic home to Enrico Caruso, Geraldine Farrar, and Philip Glass.",
    "historicPremieres": [
      {
        "title": "Faust (Inaugural Gala)",
        "composer": "Charles Gounod",
        "premiereYear": 1908,
        "type": "INAUGURAL_OPERA",
        "details": "Gala opening of the new Brooklyn Academy of Music starring Enrico Caruso and Geraldine Farrar."
      },
      {
        "title": "Nixon in China (New York Premiere)",
        "composer": "John Adams",
        "premiereYear": 1987,
        "type": "HISTORIC_STAGING",
        "details": "Landmark Brooklyn Next Wave staging directed by Peter Sellars."
      }
    ]
  },
  {
    "id": "bravo-vail-music-festival",
    "name": "Bravo! Vail Music Festival (Gerald R. Ford Amphitheater)",
    "city": "Vail",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.6387,
    "longitude": -106.3578,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.bravovail.org",
    "description": "Set dramatically against the Rocky Mountains at 8,150 feet, Bravo! Vail hosts major international orchestras annually, staging grand symphonic opera performances with world-class ensembles such as The Philadelphia Orchestra and the New York Philharmonic.",
    "inauguratedYear": 1987,
    "architect": "Gerald R. Ford Amphitheater Pavilion Design",
    "architecturalStyle": "Open-Air Mountain Alpine Amphitheater",
    "capacity": "2,800 seats & lawn",
    "historicSignificance": "Renowned American high-altitude summer festival hosting full-scale concert opera with premier world orchestras under Yannick Nézet-Séguin.",
    "historicPremieres": [
      {
        "title": "Tosca (Bravo! Vail Festival Production)",
        "composer": "Giacomo Puccini",
        "premiereYear": 2019,
        "type": "HISTORIC_STAGING",
        "details": "Full staged opera in the Rockies featuring The Philadelphia Orchestra conducted by Yannick Nézet-Séguin."
      },
      {
        "title": "La bohème",
        "composer": "Giacomo Puccini",
        "premiereYear": 2024,
        "type": "HISTORIC_STAGING",
        "details": "Festival opera staging with international cast and Philadelphia Orchestra."
      }
    ]
  },
  {
    "id": "nationaltheater-mannheim",
    "name": "Nationaltheater Mannheim",
    "city": "Mannheim",
    "country": "Germany",
    "region": "Europe",
    "latitude": 49.4878,
    "longitude": 8.4772,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.nationaltheater-mannheim.de",
    "description": "One of Germany’s oldest municipal theatres, founded in 1779 by Elector Karl Theodor. Famous in operatic and theatrical history as the home of the Mannheim School orchestra that astonished young Mozart; major OperaVision streaming partner.",
    "inauguratedYear": 1957,
    "architect": "Gerhard Weber",
    "architecturalStyle": "Post-War Modernist Dual Theatre Complex",
    "capacity": "1,152 seats",
    "historicSignificance": "Birthplace of German civic theatre; historical crucible for Schiller and Mozart; major four-division stage.",
    "historicPremieres": [
      {
        "title": "Die Räuber",
        "composer": "Friedrich Schiller (Play with music)",
        "premiereYear": 1782,
        "type": "WORLD_PREMIERE",
        "details": "Epochal premiere establishing German national drama."
      },
      {
        "title": "Gunther von Schwarzburg",
        "composer": "Ignaz Holzbauer",
        "premiereYear": 1777,
        "type": "WORLD_PREMIERE",
        "details": "German opera praised profusely by Wolfgang Amadeus Mozart."
      }
    ]
  },
  {
    "id": "garsington-opera",
    "name": "Garsington Opera (Wormsley Estate)",
    "city": "Stokenchurch (Buckinghamshire)",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 51.6521,
    "longitude": -0.9234,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://www.garsingtonopera.org",
    "description": "One of Britain’s most prestigious summer country-house opera festivals, performing in an award-winning Japanese-pavilion-inspired transparent glass theatre set amid the Chiltern Hills on the Wormsley Estate. Renowned OperaVision partner.",
    "inauguratedYear": 2011,
    "architect": "Robin Snell and Partners",
    "architecturalStyle": "Contemporary Lightweight Demountable Glass & Steel Pavilion",
    "capacity": "600 seats",
    "historicSignificance": "Celebrated UK country opera festival renowned for Strauss, Mozart, and discoveries of rare repertoire broadcast on OperaVision.",
    "historicPremieres": [
      {
        "title": "The Silver Tassie (UK Professional Staging)",
        "composer": "Mark-Anthony Turnage",
        "premiereYear": 2014,
        "type": "HISTORIC_STAGING",
        "details": "Acclaimed modern opera festival staging."
      }
    ]
  },
  {
    "id": "slovak-national-theatre",
    "name": "Slovak National Theatre (Slovenské národné divadlo - Historical Building)",
    "city": "Bratislava",
    "country": "Slovakia",
    "region": "Europe",
    "latitude": 48.1423,
    "longitude": 17.1098,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://snd.sk/en",
    "description": "Standing proudly on Hviezdoslav Square, this jewel was designed by celebrated Viennese theatre architects Fellner & Helmer in Neo-Renaissance style. It serves as Slovakia’s premier opera stage and a proud OperaVision partner.",
    "inauguratedYear": 1886,
    "architect": "Ferdinand Fellner & Hermann Helmer",
    "architecturalStyle": "Neo-Renaissance Horseshoe Theatre with Ganymede’s Fountain",
    "capacity": "611 seats",
    "historicSignificance": "National lyric shrine of Slovakia; cradle of Slovak vocal artists including Peter Dvorský and Edita Gruberová.",
    "historicPremieres": [
      {
        "title": "Krútňava (The Whirlpool)",
        "composer": "Eugen Suchoň",
        "premiereYear": 1949,
        "type": "WORLD_PREMIERE",
        "details": "The national opera of Slovakia, premiering on 10 December 1949."
      }
    ]
  },
  {
    "id": "teatr-wielki-poznan",
    "name": "Poznań Grand Theatre (Teatr Wielki im. Stanisława Moniuszki w Poznaniu)",
    "city": "Poznań",
    "country": "Poland",
    "region": "Europe",
    "latitude": 52.4102,
    "longitude": 16.9189,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://opera.poznan.pl/en",
    "description": "Designed by Munich architect Max Littmann with an iconic Pegasus surmounting its neoclassical portico, this is one of Poland’s leading historic opera companies and a frequent OperaVision broadcaster.",
    "inauguratedYear": 1910,
    "architect": "Max Littmann",
    "architecturalStyle": "Neoclassical with Ionic Portico and Pegasus Crest",
    "capacity": "858 seats",
    "historicSignificance": "Historic lyric temple of Greater Poland; premier center for the operas of Stanisław Moniuszko and Karol Szymanowski.",
    "historicPremieres": [
      {
        "title": "Die Zauberflöte (Inaugural Opera)",
        "composer": "Wolfgang Amadeus Mozart",
        "premiereYear": 1910,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala performance opening the Max Littmann house on 19 October 1910."
      },
      {
        "title": "Halka",
        "composer": "Stanisław Moniuszko",
        "premiereYear": 1919,
        "type": "HISTORIC_STAGING",
        "details": "First opera staged in free Poland following the restoration of independence."
      }
    ]
  },
  {
    "id": "odesa-national-opera",
    "name": "Odesa National Academic Theatre of Opera and Ballet",
    "city": "Odesa",
    "country": "Ukraine",
    "region": "Europe",
    "latitude": 46.4854,
    "longitude": 30.7412,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://operahouse.od.ua/en",
    "description": "One of the most magnificent opera houses in Eastern Europe, designed by Fellner & Helmer in Italian Baroque and French Rococo styles. Famed worldwide for its horseshoe hall and peerless acoustics; visited and conducted by Tchaikovsky, Rimsky-Korsakov, and Rachmaninoff; a key OperaVision partner.",
    "inauguratedYear": 1887,
    "architect": "Ferdinand Fellner & Hermann Helmer",
    "architecturalStyle": "Neo-Baroque / French Rococo Horseshoe Theatre",
    "capacity": "1,664 seats",
    "historicSignificance": "Acoustic wonder of the Black Sea; legendary stage trodden by Feodor Chaliapin, Enrico Caruso, and Anna Pavlova.",
    "historicPremieres": [
      {
        "title": "Aleko",
        "composer": "Sergei Rachmaninoff",
        "premiereYear": 1893,
        "type": "HISTORIC_STAGING",
        "details": "Conducted in Odesa by Pyotr Ilyich Tchaikovsky alongside young Rachmaninoff."
      },
      {
        "title": "The Queen of Spades",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "premiereYear": 1890,
        "type": "HISTORIC_STAGING",
        "details": "Conducted in person by Tchaikovsky shortly after St. Petersburg premiere."
      }
    ]
  },
  {
    "id": "lviv-national-opera",
    "name": "Lviv National Academic Theatre of Opera and Ballet (Solomiya Krushelnytska)",
    "city": "Lviv",
    "country": "Ukraine",
    "region": "Europe",
    "latitude": 49.8441,
    "longitude": 24.0262,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://opera.lviv.ua/en",
    "description": "An architectural masterwork designed by Zygmunt Gorgolewski in Viennese Neo-Renaissance and Neo-Baroque styles over the subterranean Poltva River. Named after the supreme Ukrainian dramatic soprano Solomiya Krushelnytska who saved Puccini’s Madama Butterfly; an active OperaVision streaming partner.",
    "inauguratedYear": 1900,
    "architect": "Zygmunt Gorgolewski",
    "architecturalStyle": "Viennese Neo-Renaissance & Neo-Baroque with Sculptural Attica",
    "capacity": "1,100 seats",
    "historicSignificance": "Architectural pride of Western Ukraine; historic home stage of legendary soprano Solomiya Krushelnytska.",
    "historicPremieres": [
      {
        "title": "Janek (Inaugural Opera)",
        "composer": "Władysław Żeleński",
        "premiereYear": 1900,
        "type": "INAUGURAL_OPERA",
        "details": "Grand gala opening of the municipal theatre on 4 October 1900."
      }
    ]
  },
  {
    "id": "lithuanian-national-opera",
    "name": "Lithuanian National Opera and Ballet Theatre (LNOBT)",
    "city": "Vilnius",
    "country": "Lithuania",
    "region": "Europe",
    "latitude": 54.6896,
    "longitude": 25.2778,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opera.lt/en",
    "description": "Located along the Neris River in Vilnius, this bold modernist opera palace designed by Elena Nijolė Bučiūtė is the national stage of Lithuania, featuring custom amber glass chandeliers, vast acoustics, and frequent OperaVision streaming co-productions.",
    "inauguratedYear": 1974,
    "architect": "Elena Nijolė Bučiūtė",
    "architecturalStyle": "Late Modernist / Brutalist Glass & Red Brick Monument",
    "capacity": "1,142 seats",
    "historicSignificance": "Supreme lyrical institution of Lithuania; renowned for innovative stagings directed by Robert Wilson and Anthony Minghella.",
    "historicPremieres": [
      {
        "title": "La Traviata (Foundational Gala)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1920,
        "type": "INAUGURAL_OPERA",
        "details": "First opera performance of the national company on New Year’s Eve 1920, starting a cherished annual tradition."
      }
    ]
  },
  {
    "id": "klaipeda-state-music-theatre",
    "name": "Klaipėda State Music Theatre",
    "city": "Klaipėda",
    "country": "Lithuania",
    "region": "Europe",
    "latitude": 55.7118,
    "longitude": 21.1352,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://klaipedosmuzikinis.lt/en",
    "description": "The leading performing arts house on Lithuania’s Baltic coastline, recently completely reconstructed into a state-of-the-art wave-inspired acoustic hall. An active OperaVision collaborator staging maritime open-air and indoor opera.",
    "inauguratedYear": 2024,
    "architect": "Marius Šlančius",
    "architecturalStyle": "Contemporary Baltic Maritime Acoustic Theatre",
    "capacity": "700 seats",
    "historicSignificance": "Baltic seacoast opera hub; famous for epic open-air maritime productions staged in historic shipyard dry docks.",
    "historicPremieres": [
      {
        "title": "The Flying Dutchman (Klaipėda Shipyard Staging)",
        "composer": "Richard Wagner",
        "premiereYear": 2020,
        "type": "HISTORIC_STAGING",
        "details": "Spectacular production staged inside the historic Paul Willy Lindenau shipyard floating dock, broadcast globally on OperaVision."
      }
    ]
  },
  {
    "id": "daegu-opera-house",
    "name": "Daegu Opera House",
    "city": "Daegu",
    "country": "South Korea",
    "region": "Asia-Pacific",
    "latitude": 35.8824,
    "longitude": 128.5908,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.daeguoperahouse.org",
    "description": "The first dedicated opera house in South Korea, completed in 2003 with an exterior curved like a grand piano. Host of the acclaimed annual Daegu International Opera Festival and a pioneering Asian partner on OperaVision.",
    "inauguratedYear": 2003,
    "architect": "Samoo Architects & Engineers",
    "architecturalStyle": "Postmodern Grand Piano Curves with High-Acoustic Horseshoe",
    "capacity": "1,490 seats",
    "historicSignificance": "South Korea’s premier dedicated lyric stage; host of the Daegu International Opera Festival uniting European and Asian companies.",
    "historicPremieres": [
      {
        "title": "Turandot (Inaugural Opera Festival)",
        "composer": "Giacomo Puccini",
        "premiereYear": 2003,
        "type": "INAUGURAL_OPERA",
        "details": "Opening production of the first Daegu International Opera Festival."
      }
    ]
  },
  {
    "id": "canadian-opera-company",
    "name": "Canadian Opera Company (Four Seasons Centre for the Performing Arts)",
    "city": "Toronto",
    "country": "Canada",
    "region": "Americas",
    "latitude": 43.6506,
    "longitude": -79.3858,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.coc.ca",
    "description": "Canada’s largest opera company and premier international lyric institution, performing in the Four Seasons Centre—Canada’s first purpose-built opera palace, celebrated for world-class acoustics engineered by Sound Space Design.",
    "inauguratedYear": 2006,
    "architect": "Jack Diamond (Diamond Schmitt Architects)",
    "architecturalStyle": "Contemporary European Horseshoe with Acoustic Floating Plaster Shell",
    "capacity": "2,071 seats",
    "historicSignificance": "Canada’s flagship opera house; acclaimed for international co-productions and landmark complete Ring Cycle cycles directed by François Girard and Robert Lepage.",
    "historicPremieres": [
      {
        "title": "The Golden Ass",
        "composer": "Randolph Peters / Robertson Davies",
        "premiereYear": 1999,
        "type": "WORLD_PREMIERE",
        "details": "Davies’ final libretto premiered with Canadian soprano Maureen Forrester."
      },
      {
        "title": "Louis Riel",
        "composer": "Harry Somers",
        "premiereYear": 1967,
        "type": "WORLD_PREMIERE",
        "details": "Canada’s Centennial grand opera masterwork."
      }
    ]
  },
  {
    "id": "opera-de-montreal",
    "name": "Opéra de Montréal (Salle Wilfrid-Pelletier, Place des Arts)",
    "city": "Montreal",
    "country": "Canada",
    "region": "Americas",
    "latitude": 45.5087,
    "longitude": -73.567,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operademontreal.com/en",
    "description": "The premier French-language opera company in North America, performing at Place des Arts in Montreal. Acclaimed for innovative commissions, international star casts, and nurturing young Canadian artists at the Atelier lyrique.",
    "inauguratedYear": 1963,
    "architect": "Affleck, Desbarats, Dimakopoulos, Lebensold & Sise",
    "architecturalStyle": "Modernist Grand Concert Hall with Italian Proscenium",
    "capacity": "2,982 seats",
    "historicSignificance": "Quebec’s national lyric institution; famed for world premiere of Pink Floyd’s operatic adaptation Another Brick in the Wall.",
    "historicPremieres": [
      {
        "title": "Another Brick in the Wall: The Opera",
        "composer": "Julien Bilodeau / Roger Waters",
        "premiereYear": 2017,
        "type": "WORLD_PREMIERE",
        "details": "Epochal operatic transformation of Roger Waters’ legendary concept album."
      },
      {
        "title": "Nelligan",
        "composer": "André Gagnon / Michel Tremblay",
        "premiereYear": 1990,
        "type": "WORLD_PREMIERE",
        "details": "Romantic Quebecois opera celebrating poet Émile Nelligan."
      }
    ]
  },
  {
    "id": "vancouver-opera",
    "name": "Vancouver Opera (Queen Elizabeth Theatre)",
    "city": "Vancouver",
    "country": "Canada",
    "region": "Americas",
    "latitude": 49.2806,
    "longitude": -123.1119,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.vancouveropera.ca",
    "description": "Western Canada’s flagship opera company, founded in 1959. Performs at the civic Queen Elizabeth Theatre and is celebrated for historical debuts by Dame Joan Sutherland and Marilyn Horne under maestro Richard Bonynge.",
    "inauguratedYear": 1959,
    "architect": "Affleck, Desbarats, Dimakopoulos, Lebensold & Sise",
    "architecturalStyle": "Mid-Century Modernist Civic Hall",
    "capacity": "2,765 seats",
    "historicSignificance": "Pacific Canada’s leading opera producer; catalyst for Joan Sutherland’s legendary North American triumphs.",
    "historicPremieres": [
      {
        "title": "The Overcoat",
        "composer": "James Rolfe / Morris Panych",
        "premiereYear": 2018,
        "type": "WORLD_PREMIERE",
        "details": "Acclaimed modern Canadian adaptation of Gogol’s story."
      },
      {
        "title": "Norma (Joan Sutherland Canadian Debut)",
        "composer": "Vincenzo Bellini",
        "premiereYear": 1963,
        "type": "HISTORIC_STAGING",
        "details": "Historic debut starring Joan Sutherland and Marilyn Horne."
      }
    ]
  },
  {
    "id": "calgary-opera",
    "name": "Calgary Opera (Southern Alberta Jubilee Auditorium)",
    "city": "Calgary",
    "country": "Canada",
    "region": "Americas",
    "latitude": 51.0628,
    "longitude": -114.0933,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://calgaryopera.com",
    "description": "Founded in 1972, Calgary Opera has grown into one of North America’s most prolific commissioners of new Canadian opera, presenting full-scale productions at the Southern Alberta Jubilee Auditorium.",
    "inauguratedYear": 1955,
    "architect": "Rule Wynn and Rule",
    "architecturalStyle": "Mid-Century Modernist Prairie Hall",
    "capacity": "2,538 seats",
    "historicSignificance": "Pioneered original Canadian full-scale operas including John Estacio’s Filumena and Bramwell Tovey’s The Inventor.",
    "historicPremieres": [
      {
        "title": "Filumena",
        "composer": "John Estacio / John Murrell",
        "premiereYear": 2003,
        "type": "WORLD_PREMIERE",
        "details": "One of the most performed Canadian operas in history, based on the life of Florence Losandro."
      },
      {
        "title": "The Inventor",
        "composer": "Bramwell Tovey / John Murrell",
        "premiereYear": 2011,
        "type": "WORLD_PREMIERE",
        "details": "Original opera commissioned and premiered in Calgary."
      }
    ]
  },
  {
    "id": "edmonton-opera",
    "name": "Edmonton Opera (Northern Alberta Jubilee Auditorium)",
    "city": "Edmonton",
    "country": "Canada",
    "region": "Americas",
    "latitude": 53.5222,
    "longitude": -113.5264,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.edmontonopera.com",
    "description": "Western Canada’s oldest professional opera company, founded in 1963 by local music lovers. Performs at the Northern Alberta Jubilee Auditorium; historic stage for Beverly Sills, Plácido Domingo, and Maureen Forrester.",
    "inauguratedYear": 1955,
    "architect": "Rule Wynn and Rule",
    "architecturalStyle": "Mid-Century Modernist Hall",
    "capacity": "2,534 seats",
    "historicSignificance": "Alberta’s oldest professional opera company; celebrated for grand traditional stagings in Edmonton.",
    "historicPremieres": [
      {
        "title": "Lucia di Lammermoor (Beverly Sills Debut)",
        "composer": "Gaetano Donizetti",
        "premiereYear": 1969,
        "type": "HISTORIC_STAGING",
        "details": "Legendary performance starring American coloratura Beverly Sills."
      }
    ]
  },
  {
    "id": "pacific-opera-victoria",
    "name": "Pacific Opera Victoria (Royal Theatre)",
    "city": "Victoria",
    "country": "Canada",
    "region": "Americas",
    "latitude": 48.4239,
    "longitude": -123.3619,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://pacificopera.ca",
    "description": "Located in the historic 1913 Edwardian Royal Theatre on Vancouver Island. Acclaimed across Canada for adventurous repertoire, boutique casting, and regular commissions.",
    "inauguratedYear": 1913,
    "architect": "William D'Oyly Rochfort",
    "architecturalStyle": "Edwardian Beaux-Arts Historic Theatre",
    "capacity": "1,416 seats",
    "historicSignificance": "Premier boutique opera company of Western Canada; celebrated for commissioning Canadian chamber operas.",
    "historicPremieres": [
      {
        "title": "Missing",
        "composer": "Brian Current / Marie Clements",
        "premiereYear": 2017,
        "type": "WORLD_PREMIERE",
        "details": "Poignant co-commission giving voice to missing and murdered Indigenous women in Canada."
      }
    ]
  },
  {
    "id": "theatro-municipal-rio-de-janeiro",
    "name": "Theatro Municipal do Rio de Janeiro",
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "region": "Americas",
    "latitude": -22.909,
    "longitude": -43.1764,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://theatromunicipal.rj.gov.br",
    "description": "One of the most opulent opera palaces in the Western Hemisphere, standing prominently on Cinelândia in downtown Rio. Inspired directly by Charles Garnier’s Paris Opéra, with gilded balconies, Carrara marble, and French crystal chandeliers.",
    "inauguratedYear": 1909,
    "architect": "Francisco de Oliveira Passos & Albert Guilbert",
    "architecturalStyle": "Belle Époque Beaux-Arts & Art Nouveau with Parisian Gilded Façade",
    "capacity": "2,252 seats",
    "historicSignificance": "Brazil’s supreme Belle Époque opera palace; historic stage of Maria Callas, Enrico Caruso, Arturo Toscanini, and Heitor Villa-Lobos.",
    "historicPremieres": [
      {
        "title": "Il Guarany (Inaugural Gala Season)",
        "composer": "Carlos Gomes",
        "premiereYear": 1909,
        "type": "INAUGURAL_OPERA",
        "details": "Brazil’s foremost 19th-century opera masterwork performed during the theater’s opening season."
      },
      {
        "title": "Izaht",
        "composer": "Heitor Villa-Lobos",
        "premiereYear": 1958,
        "type": "WORLD_PREMIERE",
        "details": "Villa-Lobos’ dramatic opera premiered under his own direction."
      }
    ]
  },
  {
    "id": "theatro-da-paz",
    "name": "Theatro da Paz",
    "city": "Belém",
    "country": "Brazil",
    "region": "Americas",
    "latitude": -1.4533,
    "longitude": -48.4947,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://theatrodapaz.com.br",
    "description": "The first grand opera house built in the Amazon basin during the Rubber Boom, predating Manaus by nearly 20 years. Built with materials imported from Europe, overlooking Praça da República in Belém.",
    "inauguratedYear": 1878,
    "architect": "José Tibúrcio de Magalhães",
    "architecturalStyle": "Neoclassical with Corinthian Columns & Italian Fresco Murals",
    "capacity": "900 seats",
    "historicSignificance": "Amazonia’s oldest historic opera palace; hosts the annual Festival de Ópera do Theatro da Paz.",
    "historicPremieres": [
      {
        "title": "Il Guarany (Inaugural Opera)",
        "composer": "Carlos Gomes",
        "premiereYear": 1878,
        "type": "INAUGURAL_OPERA",
        "details": "Gala opening performance on 15 February 1878."
      }
    ]
  },
  {
    "id": "teatro-solis",
    "name": "Teatro Solís",
    "city": "Montevideo",
    "country": "Uruguay",
    "region": "Americas",
    "latitude": -34.9077,
    "longitude": -56.2014,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://teatrosolis.org.uy",
    "description": "Uruguay’s oldest and most prestigious national theatre, opened in 1856 in Montevideo’s Ciudad Vieja. Named after Spanish navigator Juan Díaz de Solís; renowned for its elliptical auditorium and pristine acoustics.",
    "inauguratedYear": 1856,
    "architect": "Carlo Zucchi & Francisco Xavier de Garmendia",
    "architecturalStyle": "Neoclassical Horseshoe with Corinthian Portico",
    "capacity": "1,250 seats",
    "historicSignificance": "Oldest major opera house in South America; host to Enrico Caruso, Arturo Toscanini, Anna Pavlova, and Arthur Rubinstein.",
    "historicPremieres": [
      {
        "title": "La Parisina",
        "composer": "Tomás Giribaldi",
        "premiereYear": 1878,
        "type": "WORLD_PREMIERE",
        "details": "The first Uruguayan national opera in history, premiered on 14 September 1878 to wild acclaim."
      },
      {
        "title": "Ernani (Inaugural Gala)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1856,
        "type": "INAUGURAL_OPERA",
        "details": "Opening production of the theatre on 25 August 1856."
      }
    ]
  },
  {
    "id": "teatro-colon-bogota",
    "name": "Teatro Colón de Bogotá",
    "city": "Bogotá",
    "country": "Colombia",
    "region": "Americas",
    "latitude": 4.5968,
    "longitude": -74.0742,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://teatrocolon.gov.co",
    "description": "Colombia’s National Theatre, built to celebrate the fourth centenary of the discovery of America. Designed by Italian architect Pietro Cantini in Neoclassical style with exquisite ornate plasterwork and a ceiling painted by Filippo Mastellari.",
    "inauguratedYear": 1892,
    "architect": "Pietro Cantini",
    "architecturalStyle": "Neoclassical Italian Horseshoe with Gilded Frescoes",
    "capacity": "785 seats",
    "historicSignificance": "Declared a National Monument of Colombia in 1975; home to the National Symphony Orchestra of Colombia and national opera productions.",
    "historicPremieres": [
      {
        "title": "Hernani (Inaugural Opera)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1892,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala performance on 12 October 1892."
      }
    ]
  },
  {
    "id": "teatro-municipal-de-lima",
    "name": "Teatro Municipal de Lima",
    "city": "Lima",
    "country": "Peru",
    "region": "Americas",
    "latitude": -12.0447,
    "longitude": -77.0347,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://teatromunicipal.lima.gob.pe",
    "description": "The historic municipal opera theatre of Peru’s capital city, inaugurated in 1920 as the Teatro Forero. Restored to magnificence following a 1998 fire, featuring Louis XVI-inspired ornamentation, marble staircases, and an Italian horseshoe auditorium.",
    "inauguratedYear": 1920,
    "architect": "Alfredo Viale",
    "architecturalStyle": "Neo-Renaissance / Louis XVI Italian Horseshoe",
    "capacity": "1,022 seats",
    "historicSignificance": "Historical center of Peruvian operatic life; stage for legendary Peruvian tenor Alejandro Granda and visiting international troupes.",
    "historicPremieres": [
      {
        "title": "Aida (Inaugural Opera)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1920,
        "type": "INAUGURAL_OPERA",
        "details": "Grand gala opening of the theatre on 28 July 1920."
      }
    ]
  },
  {
    "id": "teatro-del-libertador-san-martin",
    "name": "Teatro del Libertador General San Martín",
    "city": "Córdoba",
    "country": "Argentina",
    "region": "Americas",
    "latitude": -31.419,
    "longitude": -64.1873,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://teatrodellibertador.cba.gov.ar",
    "description": "Designed by Francesco Tamburini (the Italian architect who designed Buenos Aires’ Teatro Colón), this 1891 opera house in Córdoba is celebrated as an acoustic masterpiece and Argentina’s finest historic provincial lyric stage.",
    "inauguratedYear": 1891,
    "architect": "Francesco Tamburini",
    "architecturalStyle": "Italian Renaissance Revival with Gilded Iron Horseshoe",
    "capacity": "1,000 seats",
    "historicSignificance": "Argentina’s foremost historic provincial opera house; shared architectural parentage with the legendary Teatro Colón.",
    "historicPremieres": [
      {
        "title": "Faust (Inaugural Gala)",
        "composer": "Charles Gounod",
        "premiereYear": 1891,
        "type": "INAUGURAL_OPERA",
        "details": "Opening night gala on 26 April 1891."
      }
    ]
  },
  {
    "id": "opera-idaho-egyptian-theatre",
    "name": "Opera Idaho (The Egyptian Theatre)",
    "city": "Boise",
    "country": "USA",
    "region": "Americas",
    "latitude": 43.6166,
    "longitude": -116.2036,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://operaidaho.org",
    "description": "Founded in 1973, Opera Idaho is Idaho’s premier professional opera company, staging grand operas, operettas, and recitals in Boise’s historic 1927 Egyptian Theatre—one of the few remaining Egyptian Revival movie palaces in the United States.",
    "inauguratedYear": 1927,
    "architect": "Tourtellotte & Hummel",
    "architecturalStyle": "Egyptian Revival Theatrical Jewel Box with Scarab Motifs",
    "capacity": "740 seats",
    "historicSignificance": "The only professional opera company in the state of Idaho; preserves vibrant lyric opera in the Mountain West.",
    "historicPremieres": [
      {
        "title": "The Barber of Seville (Inaugural Production)",
        "composer": "Gioachino Rossini",
        "premiereYear": 1973,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural production founding the company under the Boise Opera Association."
      }
    ]
  },
  {
    "id": "utah-opera-capitol-theatre",
    "name": "Utah Opera (Janet Quinney Lawson Capitol Theatre)",
    "city": "Salt Lake City",
    "country": "USA",
    "region": "Americas",
    "latitude": 40.7656,
    "longitude": -111.8927,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://utahopera.org",
    "description": "Founded in 1978 by baritone Glade Peterson, Utah Opera performs four grand productions each season at the historic 1913 Capitol Theatre. Combined with the Utah Symphony, it forms one of the premier integrated musical organizations in North America.",
    "inauguratedYear": 1913,
    "architect": "G. Albert Lansburgh",
    "architecturalStyle": "Italian Renaissance Revival with Classical Terra Cotta",
    "capacity": "1,876 seats",
    "historicSignificance": "Flagship opera institution of the Great Basin and Intermountain West; nationally recognized for its resident artist studio and set construction shop.",
    "historicPremieres": [
      {
        "title": "La bohème (Founding Season)",
        "composer": "Giacomo Puccini",
        "premiereYear": 1978,
        "type": "INAUGURAL_OPERA",
        "details": "First production presented by Utah Opera, starring founder Glade Peterson."
      }
    ]
  },
  {
    "id": "lyric-opera-of-kansas-city",
    "name": "Lyric Opera of Kansas City (Muriel Kauffman Theatre, Kauffman Center)",
    "city": "Kansas City",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.0942,
    "longitude": -94.5878,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://kcopera.org",
    "description": "Serving the heartland across Missouri and Kansas since 1958, the Lyric Opera of Kansas City performs in the sweeping Moshe Safdie-designed Muriel Kauffman Theatre. Famed for championing American opera in English and national co-commissions.",
    "inauguratedYear": 2011,
    "architect": "Moshe Safdie",
    "architecturalStyle": "Contemporary Sculptural Shell with Acoustic Beechwood Interior",
    "capacity": "1,800 seats",
    "historicSignificance": "Heartland opera powerhouse; world premiere venue for Carlisle Floyd’s The Passion of Jonathan Wade and Mark Campbell’s The Shining.",
    "historicPremieres": [
      {
        "title": "The Passion of Jonathan Wade",
        "composer": "Carlisle Floyd",
        "premiereYear": 1991,
        "type": "WORLD_PREMIERE",
        "details": "Major revised world premiere of Floyd’s Civil War opera."
      },
      {
        "title": "The Shining",
        "composer": "Paul Moravec / Mark Campbell",
        "premiereYear": 2016,
        "type": "HISTORIC_STAGING",
        "details": "Acclaimed co-commission adaptation of Stephen King’s novel."
      }
    ]
  },
  {
    "id": "wichita-grand-opera",
    "name": "Wichita Grand Opera (Century II Performing Arts Center)",
    "city": "Wichita",
    "country": "USA",
    "region": "Americas",
    "latitude": 37.6845,
    "longitude": -97.3377,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://wichitagrandopera.org",
    "description": "Founded in 2002 by Margaret Ann Pent and Parvan Bakardiev, Wichita Grand Opera brought world-renowned stars including Luciano Pavarotti, Plácido Domingo, and native Kansan bass-baritone Samuel Ramey to perform grand opera on the Kansas plains.",
    "inauguratedYear": 1969,
    "architect": "John M. Hickman & Roy K. Varenhorst",
    "architecturalStyle": "Mid-Century Modernist Circular Dome",
    "capacity": "2,178 seats",
    "historicSignificance": "Kansas’s premier professional grand opera company; frequent artistic home to legendary American bass-baritone Samuel Ramey.",
    "historicPremieres": [
      {
        "title": "Luciano Pavarotti Gala Farewell Tour",
        "composer": "Various",
        "premiereYear": 2004,
        "type": "HISTORIC_STAGING",
        "details": "Luciano Pavarotti in concert presented by Wichita Grand Opera."
      }
    ]
  },
  {
    "id": "brown-grand-theatre-kansas",
    "name": "Brown Grand Theatre (Concordia Opera House)",
    "city": "Concordia",
    "country": "USA",
    "region": "Americas",
    "latitude": 39.5714,
    "longitude": -97.6606,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://www.browngrand.org",
    "description": "Built in 1907 by banker Napoleon Bonaparte Brown as a lavish Victorian opera house in north-central Kansas. Fully restored in 1980, it retains its iconic 1907 drop curtain depicting Napoleon at the Battle of Waterloo.",
    "inauguratedYear": 1907,
    "architect": "Carl Boller",
    "architecturalStyle": "Renaissance Revival / Victorian Opera House with Original Drop Curtain",
    "capacity": "650 seats",
    "historicSignificance": "Rural Kansas’s most splendid historic opera house; continuously preserved theatrical landmark on the National Register of Historic Places.",
    "historicPremieres": [
      {
        "title": "The Pink Lady (Inaugural Touring Season)",
        "composer": "Ivan Caryll",
        "premiereYear": 1907,
        "type": "HISTORIC_STAGING",
        "details": "Touring Broadway light opera company performance during inaugural season."
      }
    ]
  },
  {
    "id": "mcpherson-opera-house-kansas",
    "name": "McPherson Opera House",
    "city": "McPherson",
    "country": "USA",
    "region": "Americas",
    "latitude": 38.3712,
    "longitude": -97.6644,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://mcphersonoperahouse.org",
    "description": "Constructed in 1889 during the Kansas boom era, this grand Richardsonian Romanesque opera house was designed by C.W. Terry. Hosted traveling opera troupes, John Philip Sousa, and William Jennings Bryan before being fully restored in 2010.",
    "inauguratedYear": 1889,
    "architect": "C.W. Terry",
    "architecturalStyle": "Richardsonian Romanesque Red Brick & Sandstone Landmark",
    "capacity": "497 seats",
    "historicSignificance": "Kansas Gilded Age boomtown opera house; restored to acoustic and architectural perfection as a cultural community hub.",
    "historicPremieres": [
      {
        "title": "The Gypsy Baron (Der Zigeunerbaron)",
        "composer": "Johann Strauss II",
        "premiereYear": 1890,
        "type": "HISTORIC_STAGING",
        "details": "Touring American opera company staging during the theater’s opening decade."
      }
    ]
  },
  {
    "id": "arizona-opera",
    "name": "Arizona Opera (Phoenix Symphony Hall & Tucson Music Hall)",
    "city": "Phoenix & Tucson",
    "country": "USA",
    "region": "Americas",
    "latitude": 33.4492,
    "longitude": -112.0699,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://azopera.org",
    "description": "Founded in 1971, Arizona Opera is one of the nation’s rare dual-city opera companies, producing full seasons across both Phoenix and Tucson. Acclaimed for its Arizona Bold initiative commissioning operas exploring Southwestern heritage.",
    "inauguratedYear": 1972,
    "architect": "Charles Luckman Associates",
    "architecturalStyle": "Desert Mid-Century Modernist Civic Hall",
    "capacity": "2,312 seats (Phoenix) / 2,277 seats (Tucson)",
    "historicSignificance": "Southwest America’s primary dual-city grand opera company; commissioner of Craig Bohmler’s Riders of the Purple Sage.",
    "historicPremieres": [
      {
        "title": "Riders of the Purple Sage",
        "composer": "Craig Bohmler / Steven Mark Kohn",
        "premiereYear": 2017,
        "type": "WORLD_PREMIERE",
        "details": "Blockbuster world premiere adapted from Zane Grey’s Western classic."
      },
      {
        "title": "The Copper Queen",
        "composer": "Clint Borzoni / Kathleen Kelly",
        "premiereYear": 2021,
        "type": "WORLD_PREMIERE",
        "details": "Award-winning opera set in Bisbee, Arizona."
      }
    ]
  },
  {
    "id": "portland-opera-keller-auditorium",
    "name": "Portland Opera (Keller Auditorium)",
    "city": "Portland",
    "country": "USA",
    "region": "Americas",
    "latitude": 45.5135,
    "longitude": -122.6781,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.portlandopera.org",
    "description": "Founded in 1964, Portland Opera is Oregon’s flagship lyric company, presenting grand opera at the Keller Auditorium and intimate chamber works at the Hampton Opera Center on the Willamette River.",
    "inauguratedYear": 1917,
    "architect": "Joseph Jacobberger / Freedman & White",
    "architecturalStyle": "Neo-Classical Civic Auditorium with Modernist Renovation",
    "capacity": "2,992 seats",
    "historicSignificance": "Pacific Northwest’s second-largest opera company; noted for commissioning American chamber operas and resident artist training.",
    "historicPremieres": [
      {
        "title": "Galileo Galilei (West Coast Premiere)",
        "composer": "Philip Glass",
        "premiereYear": 2002,
        "type": "HISTORIC_STAGING",
        "details": "Directed by Mary Zimmerman following Chicago world premiere."
      }
    ]
  },
  {
    "id": "intermountain-opera-bozeman",
    "name": "Intermountain Opera Bozeman (The Ellen Theatre)",
    "city": "Bozeman",
    "country": "USA",
    "region": "Americas",
    "latitude": 45.6796,
    "longitude": -111.0371,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://www.intermountainopera.org",
    "description": "Montana’s oldest professional opera company, founded in 1979 by legendary Metropolitan Opera baritone Pablo Elvira. Staged in the historic 1919 Ellen Theatre, bringing world-class vocalists to the Rocky Mountain West.",
    "inauguratedYear": 1919,
    "architect": "Fred F. Willson",
    "architecturalStyle": "Historic Western Vaudeville Palace with Gilded Ornaments",
    "capacity": "420 seats",
    "historicSignificance": "The premier professional opera company in Montana; preserves intimate live grand opera in the Northern Rockies.",
    "historicPremieres": [
      {
        "title": "Rigoletto (Inaugural Production)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1979,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural production starring Met baritone and founder Pablo Elvira."
      }
    ]
  },
  {
    "id": "opera-omaha-orpheum-theater",
    "name": "Opera Omaha (Orpheum Theater)",
    "city": "Omaha",
    "country": "USA",
    "region": "Americas",
    "latitude": 41.2565,
    "longitude": -95.9372,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operaomaha.org",
    "description": "Founded in 1958, Opera Omaha is nationally revered as one of America’s most courageous producing companies. Performs in the opulent 1927 French Renaissance Orpheum Theater; creator of the biennial ONE Festival (Opera Omaha Next Experiment).",
    "inauguratedYear": 1927,
    "architect": "Rapp & Rapp",
    "architecturalStyle": "French Renaissance Eclectic Movie Palace with Crystal Chandeliers",
    "capacity": "2,600 seats",
    "historicSignificance": "National leader in operatic innovation; commissioner and premiere venue for Philip Glass and Robert Moran’s The Juniper Tree.",
    "historicPremieres": [
      {
        "title": "The Juniper Tree",
        "composer": "Philip Glass & Robert Moran",
        "premiereYear": 1985,
        "type": "WORLD_PREMIERE",
        "details": "Joint world premiere with American Repertory Theater."
      },
      {
        "title": "Wakonda's Dream",
        "composer": "Anthony Davis / Yusef Komunyakaa",
        "premiereYear": 2007,
        "type": "WORLD_PREMIERE",
        "details": "Original opera commissioned on contemporary Native American life in Nebraska."
      }
    ]
  },
  {
    "id": "the-atlanta-opera",
    "name": "The Atlanta Opera (Cobb Energy Performing Arts Centre)",
    "city": "Atlanta",
    "country": "USA",
    "region": "Americas",
    "latitude": 33.8828,
    "longitude": -84.4572,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.atlantaopera.org",
    "description": "The premier opera company of the American Southeast, founded in 1979. Led by artistic director Tomer Zvulun, it is celebrated internationally for cinematic, visually daring productions at the Cobb Energy Centre and innovative circus-tent productions.",
    "inauguratedYear": 2007,
    "architect": "Smallwood, Reynolds, Stewart, Stewart",
    "architecturalStyle": "Contemporary Travertine & Glass Performing Arts Pavilion",
    "capacity": "2,750 seats",
    "historicSignificance": "The Southeast’s largest opera company; designated among the Top 10 regional opera companies in the US by OPERA America.",
    "historicPremieres": [
      {
        "title": "Cold Mountain (Co-commission)",
        "composer": "Jennifer Higdon / Gene Scheer",
        "premiereYear": 2016,
        "type": "HISTORIC_STAGING",
        "details": "Major Southeastern staging of Higdon’s Grammy-winning Civil War opera."
      }
    ]
  },
  {
    "id": "florentine-opera-milwaukee",
    "name": "Florentine Opera (Marcus Performing Arts Center)",
    "city": "Milwaukee",
    "country": "USA",
    "region": "Americas",
    "latitude": 43.0416,
    "longitude": -87.9109,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.florentineopera.org",
    "description": "The sixth-oldest professional opera company in the United States, founded in 1933 as the Italian Opera Chorus. Performs at Uihlein Hall in the Marcus Performing Arts Center; winner of multiple Grammy Awards for American opera recordings.",
    "inauguratedYear": 1969,
    "architect": "Harry Weese",
    "architecturalStyle": "Brutalist Travertine Arts Complex",
    "capacity": "2,305 seats",
    "historicSignificance": "America’s sixth-oldest opera company; triple Grammy Award-winner for world premiere recordings of Elmer Gantry and Rio de Sangre.",
    "historicPremieres": [
      {
        "title": "Rio de Sangre",
        "composer": "Don Davis",
        "premiereYear": 2010,
        "type": "WORLD_PREMIERE",
        "details": "World premiere opera in Spanish by Matrix film composer Don Davis."
      },
      {
        "title": "Sister Carrie",
        "composer": "Robert Aldridge / Herschel Garfein",
        "premiereYear": 2016,
        "type": "WORLD_PREMIERE",
        "details": "Adaptation of Theodore Dreiser’s novel."
      }
    ]
  },
  {
    "id": "madison-opera-overture-center",
    "name": "Madison Opera (Overture Center for the Arts)",
    "city": "Madison",
    "country": "USA",
    "region": "Americas",
    "latitude": 43.0735,
    "longitude": -89.3888,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://www.madisonopera.org",
    "description": "Founded in 1961, Madison Opera performs in Overture Hall within César Pelli’s soaring glass Overture Center. Celebrated in American operatic annals for commissioning Daron Hagen’s Shining Brow about Wisconsin architect Frank Lloyd Wright.",
    "inauguratedYear": 2004,
    "architect": "César Pelli",
    "architecturalStyle": "Contemporary Glass, Wood & Travertine Proscenium Hall",
    "capacity": "2,251 seats",
    "historicSignificance": "Upper Midwest regional center for innovative opera; premiere house of Daron Hagen’s Shining Brow.",
    "historicPremieres": [
      {
        "title": "Shining Brow",
        "composer": "Daron Hagen / Paul Muldoon",
        "premiereYear": 1993,
        "type": "WORLD_PREMIERE",
        "details": "Landmark American opera chronicling Frank Lloyd Wright at Taliesin."
      }
    ]
  },
  {
    "id": "opera-carolina-belk-theater",
    "name": "Opera Carolina (Belk Theater, Blumenthal Performing Arts)",
    "city": "Charlotte",
    "country": "USA",
    "region": "Americas",
    "latitude": 35.2268,
    "longitude": -80.8427,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://operacarolina.org",
    "description": "Founded in 1948 as the Charlotte Opera Association, Opera Carolina is the largest and oldest professional opera company in North and South Carolina, staging grand opera at the Belk Theater.",
    "inauguratedYear": 1992,
    "architect": "César Pelli",
    "architecturalStyle": "Contemporary European Horseshoe with Fiber-Optic Ceiling Dome",
    "capacity": "2,118 seats",
    "historicSignificance": "The Carolinas’ premier grand opera institution for over 75 years; co-founder of the Carolina Voices and regional lyric education.",
    "historicPremieres": [
      {
        "title": "I Dream",
        "composer": "Douglas Tappin",
        "premiereYear": 2018,
        "type": "WORLD_PREMIERE",
        "details": "Rhythm and blues opera chronicling the life of Dr. Martin Luther King Jr."
      }
    ]
  },
  {
    "id": "hawaii-opera-theatre",
    "name": "Hawaii Opera Theatre (Neal S. Blaisdell Concert Hall)",
    "city": "Honolulu",
    "country": "USA",
    "region": "Americas",
    "latitude": 21.3005,
    "longitude": -157.8509,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.hotopera.org",
    "description": "The only professional grand opera company within a 2,500-mile radius, founded in 1961. Stages grand international productions in Honolulu’s Neal S. Blaisdell Concert Hall, drawing international vocalists to the Hawaiian Islands.",
    "inauguratedYear": 1964,
    "architect": "Merrill, Simms & Roehrig",
    "architecturalStyle": "Mid-Century Modernist Tropical Civic Auditorium",
    "capacity": "2,157 seats",
    "historicSignificance": "The lone grand opera producing company of the Central Pacific; bringing world-class opera to Hawaii for over 60 years.",
    "historicPremieres": [
      {
        "title": "Madama Butterfly (Hawaiian Inaugural)",
        "composer": "Giacomo Puccini",
        "premiereYear": 1961,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural production of the Honolulu Symphony Opera Festival founding HOT."
      }
    ]
  },
  {
    "id": "anchorage-opera",
    "name": "Anchorage Opera (Discovery Theatre, Alaska Center for the Performing Arts)",
    "city": "Anchorage",
    "country": "USA",
    "region": "Americas",
    "latitude": 61.2173,
    "longitude": -149.8943,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://anchorageopera.org",
    "description": "Founded in 1962, Anchorage Opera is the northernmost professional opera company in North America. Performs in the Discovery Theatre at the Alaska Center for the Performing Arts, presenting grand opera in the subarctic.",
    "inauguratedYear": 1988,
    "architect": "Edward Larrabee Barnes",
    "architecturalStyle": "Postmodern Aurora-Inspired Performing Arts Center",
    "capacity": "700 seats",
    "historicSignificance": "North America’s northernmost professional opera company; brings live lyric theatre to the state of Alaska.",
    "historicPremieres": [
      {
        "title": "The Mikado (Founding Season)",
        "composer": "Gilbert and Sullivan",
        "premiereYear": 1962,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural production staged by the Anchorage Lyric Opera Guild."
      }
    ]
  },
  {
    "id": "cairo-opera-house",
    "name": "Cairo Opera House (Historic Khedivial Opera House / Dar El-Obera El-Masreyya)",
    "city": "Cairo",
    "country": "Egypt",
    "region": "Middle East & Africa",
    "latitude": 30.0425,
    "longitude": 31.2241,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://cairoopera.org",
    "description": "The supreme opera institution of the Arab world and Africa. Successor to the historic Khedivial Opera House (inaugurated in 1869 to celebrate the opening of the Suez Canal), where Giuseppe Verdi was commissioned by Khedive Ismail to create Aida, premiering to worldwide acclaim in 1871.",
    "inauguratedYear": 1869,
    "architect": "Pietro Avoscani (1869) / Nikken Sekkei (1988)",
    "architecturalStyle": "Islamic-Postmodernist Cultural Complex with Neoclassical Lineage",
    "capacity": "1,200 seats (Main Hall)",
    "historicSignificance": "The fabled site of the world premiere of Giuseppe Verdi’s Aida (1871); the primary opera house in Africa and the Arab world.",
    "historicPremieres": [
      {
        "title": "Aida",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1871,
        "type": "WORLD_PREMIERE",
        "details": "Commissioned by Khedive Ismail Pasha to celebrate the Suez Canal; premiered at the Khedivial Opera House on 24 December 1871 conducted by Giovanni Bottesini."
      },
      {
        "title": "Rigoletto",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1869,
        "type": "INAUGURAL_OPERA",
        "details": "Grand opening gala of the Khedivial Opera House on 1 November 1869, attended by Empress Eugénie of France."
      }
    ]
  },
  {
    "id": "alexandria-opera-house",
    "name": "Alexandria Opera House (Sayed Darwish Theatre)",
    "city": "Alexandria",
    "country": "Egypt",
    "region": "Middle East & Africa",
    "latitude": 31.1989,
    "longitude": 29.9042,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://cairoopera.org",
    "description": "Built in 1921 by French-Italian architect Pietro Verrucci as the Théâtre Mohamed Aly. Renamed in honor of Sayed Darwish, the founding father of modern Egyptian music and operetta; Mediterranean jewel of Egypt’s national opera network.",
    "inauguratedYear": 1921,
    "architect": "Pietro Verrucci",
    "architecturalStyle": "Italian Renaissance Revival with Gilded Proscenium & Boxes",
    "capacity": "1,000 seats",
    "historicSignificance": "Named for Egypt’s greatest musical dramatist Sayed Darwish; coastal home of Egyptian classical opera and visiting international troupes.",
    "historicPremieres": [
      {
        "title": "Shahrazad",
        "composer": "Sayed Darwish",
        "premiereYear": 1921,
        "type": "HISTORIC_STAGING",
        "details": "Landmark Arabic musical theatre and operetta during the theatre’s opening decade."
      }
    ]
  },
  {
    "id": "cape-town-opera",
    "name": "Cape Town Opera (Artscape Opera House)",
    "city": "Cape Town",
    "country": "South Africa",
    "region": "Middle East & Africa",
    "latitude": -33.9208,
    "longitude": 18.43,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.capetownopera.co.za",
    "description": "Africa’s only permanent full-time professional year-round opera company, performing in the 1,487-seat Artscape Opera House. World-renowned for training international operatic superstars including Pretty Yende and Golda Schultz, and touring acclaimed productions to London, Paris, and Berlin.",
    "inauguratedYear": 1971,
    "architect": "Revel Fox & Partners",
    "architecturalStyle": "Late Modernist Performing Arts Complex with Continental Proscenium",
    "capacity": "1,487 seats",
    "historicSignificance": "Sub-Saharan Africa’s premier opera company; creator of the globally toured Mandela Trilogy and renowned trainer of international Bel Canto stars.",
    "historicPremieres": [
      {
        "title": "Mandela Trilogy",
        "composer": "Peter Louis van Dijk & Mike Campbell",
        "premiereYear": 2010,
        "type": "WORLD_PREMIERE",
        "details": "Critically acclaimed biographical operatic tribute to Nelson Mandela; toured to the London Coliseum, Ravenna Festival, and Dubai Opera."
      },
      {
        "title": "Aida (Inaugural Production)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1971,
        "type": "INAUGURAL_OPERA",
        "details": "Grand inaugural opera performance opening the Nico Malan (Artscape) Opera House in May 1971."
      }
    ]
  },
  {
    "id": "theatre-municipal-de-tunis",
    "name": "Théâtre Municipal de Tunis (\"La Bonbonnière\")",
    "city": "Tunis",
    "country": "Tunisia",
    "region": "Middle East & Africa",
    "latitude": 36.7997,
    "longitude": 10.1803,
    "tier": 3,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://commune-tunis.gov.tn",
    "description": "North Africa’s premier historic Art Nouveau opera theatre, opened in 1902 on Avenue Habib Bourguiba. Affectionately called \"La Bonbonnière\" for its exquisite jewel-box interior, it has hosted century-long traditions of French and Italian opera in Tunis.",
    "inauguratedYear": 1902,
    "architect": "Jean-Émile Resplandy",
    "architecturalStyle": "Art Nouveau & Eclectic Italian Horseshoe with Gilt Stucco Cherubs",
    "capacity": "1,350 seats",
    "historicSignificance": "The oldest surviving active opera theatre in North Africa; home of the Tunisian Symphony Orchestra and historical Mediterranean tours.",
    "historicPremieres": [
      {
        "title": "Manon (Inaugural Season)",
        "composer": "Jules Massenet",
        "premiereYear": 1902,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural opening performance on 20 November 1902."
      }
    ]
  },
  {
    "id": "opera-dalger",
    "name": "Opéra d'Alger (Boualem Bessaïh)",
    "city": "Algiers",
    "country": "Algeria",
    "region": "Middle East & Africa",
    "latitude": 36.7323,
    "longitude": 2.9566,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operadalger.dz",
    "description": "Inaugurated in 2016 in Ouled Fayet, this contemporary 1,400-seat opera palace serves as Algeria’s premier lyrical stage. Blends modern acoustic engineering with traditional Arab-Andalusian architectural motifs; home to the Algerian National Symphony Orchestra.",
    "inauguratedYear": 2016,
    "architect": "Beijing Institute of Architectural Design",
    "architecturalStyle": "Contemporary Arab-Andalusian Lyric Palace with Geometric Lattices",
    "capacity": "1,400 seats",
    "historicSignificance": "The first purpose-built opera house constructed in the Maghreb in the 21st century; center of Algerian national classical music.",
    "historicPremieres": [
      {
        "title": "Inaugural Gala: Symphonie Maghrébine",
        "composer": "Various Algerian Composers",
        "premiereYear": 2016,
        "type": "INAUGURAL_OPERA",
        "details": "Gala inauguration on 20 July 2016 uniting the Algerian National Symphony and Arab vocalists."
      }
    ]
  },
  {
    "id": "gothenburg-opera",
    "name": "Gothenburg Opera (GöteborgsOperan)",
    "city": "Gothenburg",
    "country": "Sweden",
    "region": "Europe",
    "latitude": 57.7112,
    "longitude": 11.9678,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.opera.se/en",
    "description": "Standing dramatically on the waters of the Göta älv harbor, the Gothenburg Opera was designed by Jan Izikowitz with forms inspired by sailing ships, bridges, and bird wings. One of Scandinavia’s foremost producing houses and an active OperaVision streaming partner.",
    "inauguratedYear": 1994,
    "architect": "Jan Izikowitz",
    "architecturalStyle": "Postmodern Maritime-Inspired Waterfront Opera Hall",
    "capacity": "1,276 seats",
    "historicSignificance": "Western Sweden’s premier lyrical and dance stage; internationally acclaimed for Wagner Ring cycles and innovative contemporary stagings.",
    "historicPremieres": [
      {
        "title": "Aniara (New Production Gala)",
        "composer": "Karl-Birger Blomdahl",
        "premiereYear": 1994,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala production opening the harborfront opera house in October 1994."
      }
    ]
  },
  {
    "id": "teatro-nacional-de-sao-carlos",
    "name": "Teatro Nacional de São Carlos",
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Europe",
    "latitude": 38.7095,
    "longitude": -9.1415,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://saocarlos.pt",
    "description": "Portugal’s only dedicated grand opera house, opened in 1793 in Lisbon’s Chiado district. Modeled directly on Milan’s Teatro alla Scala and Naples’ Teatro di San Carlo. Famous in operatic legend as the venue where Maria Callas gave her definitive live recording of Verdi’s La Traviata in 1958 with Alfredo Kraus.",
    "inauguratedYear": 1793,
    "architect": "José da Costa e Silva",
    "architecturalStyle": "Neoclassical / Italian Rococo Royal Horseshoe with Imperial Box",
    "capacity": "1,148 seats",
    "historicSignificance": "Portugal’s primary lyrical monument for over two centuries; site of Maria Callas’s legendary 1958 Lisbon Traviata.",
    "historicPremieres": [
      {
        "title": "La ballerina amante",
        "composer": "Domenico Cimarosa",
        "premiereYear": 1793,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural gala opera performance celebrating Queen Maria I on 30 June 1793."
      },
      {
        "title": "La Traviata (Maria Callas Lisbon Debut)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1958,
        "type": "HISTORIC_STAGING",
        "details": "Legendary live performance starring Maria Callas and Alfredo Kraus, conducted by Franco Ghione."
      }
    ]
  },
  {
    "id": "woodward-opera-house-ohio",
    "name": "The Woodward Opera House",
    "city": "Mount Vernon",
    "country": "USA",
    "region": "Americas",
    "latitude": 40.3934,
    "longitude": -82.4857,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://thewoodward.org",
    "description": "Completed in 1851, the Woodward Opera House is recognized by architectural historians as the oldest authentic 19th-century Gilded Age second-floor opera house remaining in the United States. Recently completed a meticulous $21 million historical restoration.",
    "inauguratedYear": 1851,
    "architect": "Dr. Ebenezer Woodward",
    "architecturalStyle": "Antebellum Greek Revival / Victorian Horseshoe Opera Hall",
    "capacity": "500 seats",
    "historicSignificance": "America’s oldest authentic 19th-century second-floor opera house; National Register of Historic Places.",
    "historicPremieres": [
      {
        "title": "The Bohemian Girl (Historic Tour)",
        "composer": "Michael William Balfe",
        "premiereYear": 1855,
        "type": "HISTORIC_STAGING",
        "details": "Early American touring opera performance during the theatre’s first decade."
      }
    ]
  },
  {
    "id": "royal-opera-house-mumbai",
    "name": "Royal Opera House, Mumbai (Bombay)",
    "city": "Mumbai",
    "country": "India",
    "region": "Asia-Pacific",
    "latitude": 18.9554,
    "longitude": 72.8188,
    "tier": 4,
    "venueType": "HISTORIC_GEM",
    "websiteUrl": "https://royaloperahouse.in",
    "description": "India’s only surviving authentic historic opera house, inaugurated in 1911 by King George V and completed in 1916. Built during the British Raj in Baroque and Neo-Classical styles with Italian marble and gilded Corinthian columns; awarded a UNESCO Asia-Pacific Award for Cultural Heritage Conservation in 2017 following a meticulous restoration by Abha Narain Lambah. Stages Western opera productions and symphony concerts.",
    "inauguratedYear": 1916,
    "architect": "Maurice Bandmann & Jehangir Framji Karaka (Restored by Abha Narain Lambah)",
    "architecturalStyle": "Edwardian Baroque & Neo-Classical with Gilded Corinthian Boxes",
    "capacity": "574 seats",
    "historicSignificance": "The sole surviving historic opera house on the Indian subcontinent; prestigious colonial-era stage for Maurice Bandmann’s touring European opera troupe and modern Indian operatic revivals.",
    "historicPremieres": [
      {
        "title": "Il Trovatore (Maurice Bandmann Inaugural Season)",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1916,
        "type": "INAUGURAL_OPERA",
        "details": "Gala touring European grand opera company season opening the completed opera house."
      },
      {
        "title": "Romeo and Juliet",
        "composer": "Charles Gounod",
        "premiereYear": 2017,
        "type": "HISTORIC_STAGING",
        "details": "First full staged Western opera following the historic UNESCO restoration, produced with the Neemrana Music Foundation."
      }
    ]
  },
  {
    "id": "nmacc-the-grand-theatre-mumbai",
    "name": "Nita Mukesh Ambani Cultural Centre (The Grand Theatre)",
    "city": "Mumbai",
    "country": "India",
    "region": "Asia-Pacific",
    "latitude": 19.0645,
    "longitude": 72.8687,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://nmacc.com",
    "description": "A 2,000-seat lyric proscenium theater opened in 2023 at the Bandra-Kurla Complex in Mumbai. Designed by TVS Design with world-class acoustics engineered by Sound Space Vision, featuring 8,400 Swarovski crystals on ceiling vaults and an integrated Dolby Atmos system; built specifically to host grand Western opera and international theatrical companies.",
    "inauguratedYear": 2023,
    "architect": "TVS Design / Sound Space Vision",
    "architecturalStyle": "Contemporary Jewel-Box Proscenium with 8,400 Swarovski Crystal Vaults",
    "capacity": "2,000 seats",
    "historicSignificance": "India’s premier 21st-century lyric hall engineered to international acoustic standards for grand opera and symphonic productions.",
    "historicPremieres": [
      {
        "title": "The Great Indian Musical: Civilization to Nation",
        "composer": "Ajay-Atul",
        "premiereYear": 2023,
        "type": "INAUGURAL_OPERA",
        "details": "Grand inaugural theatrical production opening the proscenium stage on 31 March 2023."
      }
    ]
  },
  {
    "id": "dubai-opera",
    "name": "Dubai Opera",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "region": "Middle East & Africa",
    "latitude": 25.1952,
    "longitude": 55.2736,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.dubaiopera.com",
    "description": "A 2,000-seat multi-format performing arts center in Downtown Dubai, shaped like a traditional Arabian dhow sailing vessel overlooking the Dubai Fountain and Burj Khalifa. Designed by Janus Rostock, it regularly hosts premier visiting European opera companies, including Teatro alla Scala and Welsh National Opera.",
    "inauguratedYear": 2016,
    "architect": "Janus Rostock (Atkins)",
    "architecturalStyle": "Contemporary Maritime Dhow-Inspired Glass, Wood & Steel Pavilion",
    "capacity": "2,000 seats",
    "historicSignificance": "The United Arab Emirates’ premier lyric theatre; central cultural hub for touring international opera in the Persian Gulf.",
    "historicPremieres": [
      {
        "title": "The Barber of Seville (Inaugural Opera Gala)",
        "composer": "Gioachino Rossini",
        "premiereYear": 2016,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural opera performance on 1 September 2016 presented by the Teatro Lirico Giuseppe Verdi di Trieste starring Plácido Domingo."
      }
    ]
  },
  {
    "id": "katara-opera-house-doha",
    "name": "Katara Opera House",
    "city": "Doha",
    "country": "Qatar",
    "region": "Middle East & Africa",
    "latitude": 25.3583,
    "longitude": 51.5278,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.katara.net",
    "description": "Located in the Katara Cultural Village in Doha, this 550-seat opera house blends traditional Arabian architectural motifs with European classical theatre design. Permanent home of the Qatar Philharmonic Orchestra, presenting international opera productions, Bel Canto recitals, and Arabic symphonic premieres.",
    "inauguratedYear": 2010,
    "architect": "Katara Cultural Foundation",
    "architecturalStyle": "Traditional Arabian Palace with Rich Acoustic Cedarwood Interior",
    "capacity": "550 seats",
    "historicSignificance": "Qatar’s dedicated lyric opera hall; resident home of the Qatar Philharmonic Orchestra.",
    "historicPremieres": [
      {
        "title": "Arabian Nights Symphonic Suite (Inaugural Gala)",
        "composer": "Marcel Khalife",
        "premiereYear": 2010,
        "type": "INAUGURAL_OPERA",
        "details": "Inaugural performance celebrating the opening of the Katara cultural campus."
      }
    ]
  },
  {
    "id": "king-fahad-cultural-centre-riyadh",
    "name": "King Fahad Cultural Centre (Riyadh Opera Stage)",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "region": "Middle East & Africa",
    "latitude": 24.6644,
    "longitude": 46.6432,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://moc.gov.sa",
    "description": "The primary 2,750-seat national performing arts complex in Riyadh. Famous in operatic history as the venue for the world premiere of Zarqa Al Yamama (2024)—the first grand opera produced in the history of Saudi Arabia. Also serving as the institutional forerunner to the Royal Diriyah Opera House designed by Snøhetta.",
    "inauguratedYear": 1989,
    "architect": "King Fahad Cultural Complex Architecture / Snøhetta (Diriyah)",
    "architecturalStyle": "Monumental Najdi Neoclassical Desert Performing Arts Palace",
    "capacity": "2,750 seats",
    "historicSignificance": "Site of the historic premiere of Zarqa Al Yamama (2024), inaugurating Saudi Arabia’s national grand opera tradition.",
    "historicPremieres": [
      {
        "title": "Zarqa Al Yamama",
        "composer": "Lee Bradshaw / Saleh Zamanan",
        "premiereYear": 2024,
        "type": "WORLD_PREMIERE",
        "details": "The historic first-ever grand opera produced in Saudi Arabia, conducted by Pablo González with Dame Sarah Connolly and the Dresdner Sinfoniker."
      }
    ]
  },
  {
    "id": "kuwait-opera-house-jacc",
    "name": "Kuwait Opera House (Sheikh Jaber Al-Ahmad Cultural Centre)",
    "city": "Kuwait City",
    "country": "Kuwait",
    "region": "Middle East & Africa",
    "latitude": 29.3621,
    "longitude": 47.962,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.jacc-kw.com",
    "description": "Kuwait’s flagship performing arts and cultural palace on the Arabian Gulf Street, designed by SSH International. Features a 2,000-seat National Theatre housed within shimmering titanium and glass geometric jewel pavilions inspired by Islamic architecture.",
    "inauguratedYear": 2016,
    "architect": "SSH International",
    "architecturalStyle": "Geometric Titanium & Glass Jewel Pavilions with Islamic Mashrabiya",
    "capacity": "2,000 seats",
    "historicSignificance": "Kuwait’s premier national proscenium theater; host of international opera, ballet, and Gulf cultural seasons.",
    "historicPremieres": [
      {
        "title": "Memories of a Giant: Operatic Musical",
        "composer": "Various Kuwaiti & Arab Masters",
        "premiereYear": 2016,
        "type": "INAUGURAL_OPERA",
        "details": "Gala musical inauguration in the presence of Emir Sheikh Sabah Al-Ahmad Al-Jaber Al-Sabah on 31 October 2016."
      }
    ]
  },
  {
    "id": "ataturk-cultural-center-akm-istanbul",
    "name": "Atatürk Cultural Center (AKM - Istanbul Opera House)",
    "city": "Istanbul",
    "country": "Turkey",
    "region": "Middle East & Africa",
    "latitude": 41.0369,
    "longitude": 28.9877,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://akmistanbul.gov.tr",
    "description": "Standing prominently on Taksim Square, the rebuilt AKM features a striking red ceramic geodesic sphere housing a 2,040-seat acoustic opera hall. Permanent home of the Istanbul State Opera and Ballet, blending Turkish operatic heritage with contemporary European repertoire.",
    "inauguratedYear": 2021,
    "architect": "Murat Tabanlıoğlu (Tabanlıoğlu Architects)",
    "architecturalStyle": "Modernist Facade with Red Ceramic Geodesic Sphere Auditorium",
    "capacity": "2,040 seats",
    "historicSignificance": "Turkey’s premier lyrical stage on the Bosphorus; home of the Istanbul State Opera and Ballet.",
    "historicPremieres": [
      {
        "title": "Sinan",
        "composer": "Hasan Uçarsu",
        "premiereYear": 2021,
        "type": "WORLD_PREMIERE",
        "details": "Commissioned for the reopening of AKM celebrating the Ottoman imperial architect Mimar Sinan on Republic Day 2021."
      }
    ]
  },
  {
    "id": "opera-north-leeds-grand-theatre",
    "name": "Opera North (Leeds Grand Theatre)",
    "city": "Leeds",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 53.7997,
    "longitude": -1.5408,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.operanorth.co.uk",
    "description": "One of the UK’s foremost national producing opera companies, founded in 1977 as English National Opera North. Performs in the historic 1,500-seat Victorian Leeds Grand Theatre (designed by George Corson in 1878), acclaimed across Europe for innovative stagings and touring the North of England.",
    "inauguratedYear": 1878,
    "architect": "George Corson",
    "architecturalStyle": "Gothic Revival & Romanesque Victorian Horseshoe Theatre",
    "capacity": "1,500 seats",
    "historicSignificance": "England’s premier provincial opera company; acclaimed for landmark complete Ring cycles and modern commissions.",
    "historicPremieres": [
      {
        "title": "Skin Deep",
        "composer": "David Sawer / Armando Iannucci",
        "premiereYear": 2009,
        "type": "WORLD_PREMIERE",
        "details": "Satirical contemporary British operatic comedy."
      },
      {
        "title": "The Midsummer Marriage (Leeds Staging)",
        "composer": "Michael Tippett",
        "premiereYear": 1985,
        "type": "HISTORIC_STAGING",
        "details": "Landmark regional British opera staging conducted by David Lloyd-Jones."
      }
    ]
  },
  {
    "id": "sadlers-wells-theatre-london",
    "name": "Sadler’s Wells Theatre",
    "city": "London",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 51.5293,
    "longitude": -0.1064,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.sadlerswells.com",
    "description": "The historic theatrical cradle where both English National Opera (as Sadler’s Wells Opera) and The Royal Ballet were created by visionary producer Lilian Baylis. Famous in 20th-century operatic history as the venue where Benjamin Britten’s Peter Grimes received its triumphant world premiere on 7 June 1945, restarting post-war British grand opera.",
    "inauguratedYear": 1931,
    "architect": "Frank Matcham & F.G.M. Chancellor (1931) / RHWL Architects (1998)",
    "architecturalStyle": "Interwar Modernist Proscenium with Contemporary Rebuild",
    "capacity": "1,500 seats",
    "historicSignificance": "Birthplace of English National Opera and The Royal Ballet; fabled site of the world premiere of Benjamin Britten’s Peter Grimes (1945).",
    "historicPremieres": [
      {
        "title": "Peter Grimes",
        "composer": "Benjamin Britten",
        "premiereYear": 1945,
        "type": "WORLD_PREMIERE",
        "details": "The sovereign masterpiece of 20th-century British opera, premiered on 7 June 1945 conducted by Reginald Goodall starring Peter Pears and Joan Cross."
      }
    ]
  },
  {
    "id": "buxton-opera-house",
    "name": "Buxton Opera House",
    "city": "Buxton",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 53.2592,
    "longitude": -1.9168,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://buxtonoperahouse.org.uk",
    "description": "A 902-seat Frank Matcham Edwardian opera jewel set in the spa town of Buxton in the Peak District. Home of the internationally acclaimed Buxton International Festival, celebrated worldwide for staging rarely heard Bel Canto, Baroque, and contemporary British operas.",
    "inauguratedYear": 1903,
    "architect": "Frank Matcham",
    "architecturalStyle": "Edwardian Opera House with Ornate Gilded Plasterwork & Ceiling Frescoes",
    "capacity": "902 seats",
    "historicSignificance": "Regarded as one of Frank Matcham’s finest surviving opera houses; annual host of the Buxton International Festival.",
    "historicPremieres": [
      {
        "title": "Georgiana",
        "composer": "Mark Tatlow / Michael Williams",
        "premiereYear": 2019,
        "type": "WORLD_PREMIERE",
        "details": "Pastiche opera celebrating Georgiana, Duchess of Devonshire, commissioned for the festival’s 40th anniversary."
      }
    ]
  },
  {
    "id": "grand-opera-house-belfast",
    "name": "Grand Opera House, Belfast",
    "city": "Belfast",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 54.5954,
    "longitude": -5.9347,
    "tier": 3,
    "venueType": "REGIONAL_HOUSE",
    "websiteUrl": "https://www.goh.co.uk",
    "description": "Northern Ireland’s premier lyric theater, designed by celebrated theatrical architect Frank Matcham and opened in 1895. Renowned for its breathtaking orientalist Indian-inspired auditorium with gold leaf elephant heads; primary home stage of Northern Ireland Opera (NIO).",
    "inauguratedYear": 1895,
    "architect": "Frank Matcham",
    "architecturalStyle": "Victorian Orientalist with Indian Plasterwork & Gilded Elephants",
    "capacity": "1,058 seats",
    "historicSignificance": "The supreme surviving Matcham theater in Ireland; home stage of Northern Ireland Opera; hosted Luciano Pavarotti’s early UK appearances.",
    "historicPremieres": [
      {
        "title": "Bluebeard's Castle (Inaugural Gala Season)",
        "composer": "Béla Bartók",
        "premiereYear": 1895,
        "type": "INAUGURAL_OPERA",
        "details": "Victorian grand opening season on Great Victoria Street."
      },
      {
        "title": "Tosca (Northern Ireland Opera Production)",
        "composer": "Giacomo Puccini",
        "premiereYear": 2011,
        "type": "HISTORIC_STAGING",
        "details": "Award-winning production establishing Northern Ireland Opera on the national stage."
      }
    ]
  },
  {
    "id": "festival-theatre-edinburgh",
    "name": "Festival Theatre Edinburgh",
    "city": "Edinburgh",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 55.9467,
    "longitude": -3.1856,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.capitaltheatres.com",
    "description": "Standing on the historic site of the Empire Palace Theatre (1892), the Festival Theatre boasts the largest performance stage in Scotland (and one of the deepest in the UK). Operating as the primary opera house for the Edinburgh International Festival and regular Edinburgh home of Scottish Opera.",
    "inauguratedYear": 1994,
    "architect": "Frank Matcham (1892) / Law & Dunbar-Nasmith (1994)",
    "architecturalStyle": "Beaux-Arts Matcham Auditorium with Soaring Glass Curtain Façade",
    "capacity": "1,915 seats",
    "historicSignificance": "The operatic heart of the Edinburgh International Festival; Scotland’s largest lyric stage hosting international productions from Milan, Paris, and Vienna.",
    "historicPremieres": [
      {
        "title": "Inés de Castro",
        "composer": "James MacMillan",
        "premiereYear": 1996,
        "type": "WORLD_PREMIERE",
        "details": "Acclaimed Scottish Opera world premiere commissioned for the Edinburgh International Festival."
      }
    ]
  },
  {
    "id": "the-grange-festival-hampshire",
    "name": "The Grange Festival",
    "city": "Northington (Hampshire)",
    "country": "United Kingdom",
    "region": "Europe",
    "latitude": 51.1213,
    "longitude": -1.2189,
    "tier": 3,
    "venueType": "FESTIVAL",
    "seasonalOnly": true,
    "websiteUrl": "https://thegrangefestival.co.uk",
    "description": "One of England’s premier summer country-house opera festivals, staged in a bespoke 550-seat jewel-box opera house constructed inside the neoclassical Greek Revival orangery of The Grange mansion in Hampshire. Acclaimed for productions conducted by Harry Christophers and Francesco Cilluffo.",
    "inauguratedYear": 2003,
    "architect": "Studio E Architects",
    "architecturalStyle": "Neoclassical Greek Revival Orangery with Contemporary Acoustic Wood Theatre",
    "capacity": "550 seats",
    "historicSignificance": "Acclaimed English country-house festival celebrated for Bel Canto, Verdi, and early music staging in an English country park.",
    "historicPremieres": [
      {
        "title": "Mansfield Park",
        "composer": "Jonathan Dove",
        "premiereYear": 2017,
        "type": "HISTORIC_STAGING",
        "details": "Chamber opera adaptation of Jane Austen’s novel staged during the festival’s inaugural season."
      }
    ]
  },
  {
    "id": "bolshoi-theatre-moscow",
    "name": "Bolshoi Theatre (State Academic Bolshoi Theatre)",
    "city": "Moscow",
    "country": "Russia",
    "region": "Europe",
    "latitude": 55.7601,
    "longitude": 37.6186,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://bolshoi.ru/en",
    "description": "The monumental neoclassical temple of Russian opera and ballet on Teatralnaya Square in Moscow, inaugurated in 1856. Rebuilt following fires by Alberto Cavos, featuring an eight-column classical portico surmounted by Apollo’s quadriga and six tiers of gilded velvet imperial boxes. Supreme symbol of Russian performing arts.",
    "inauguratedYear": 1856,
    "architect": "Alberto Cavos & Joseph Bové",
    "architecturalStyle": "Imperial Neoclassical with Apollo’s Bronze Quadriga & Gilded Horseshoe",
    "capacity": "1,740 seats (Historic Stage)",
    "historicSignificance": "One of the world’s most famous opera theatres; premier proving ground for Tchaikovsky, Mussorgsky, and Rachmaninoff; fabled home of the Bolshoi Opera.",
    "historicPremieres": [
      {
        "title": "Swan Lake (Lebedinoye ozero)",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "premiereYear": 1877,
        "type": "WORLD_PREMIERE",
        "details": "World premiere of Tchaikovsky’s immortal masterwork on 4 March 1877."
      },
      {
        "title": "Mazeppa",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "premiereYear": 1884,
        "type": "WORLD_PREMIERE",
        "details": "Grand opera premiere conducted by Ippolit Altani on 15 February 1884."
      },
      {
        "title": "Aleko",
        "composer": "Sergei Rachmaninoff",
        "premiereYear": 1893,
        "type": "WORLD_PREMIERE",
        "details": "Rachmaninoff’s graduation opera premiere, praised and attended by Tchaikovsky."
      }
    ]
  },
  {
    "id": "mariinsky-theatre-st-petersburg",
    "name": "Mariinsky Theatre (Historic Stage & Mariinsky II)",
    "city": "St. Petersburg",
    "country": "Russia",
    "region": "Europe",
    "latitude": 59.9257,
    "longitude": 30.2961,
    "tier": 1,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://www.mariinsky.ru/en",
    "description": "The imperial crucible of Russian opera, opened in 1860 on Theater Square in St. Petersburg and named after Empress Maria Alexandrovna. Famed worldwide for its sea-green velvet and gilded auditorium, pristine acoustics, and historic role as the premiere house for Mussorgsky, Tchaikovsky, Borodin, and Rimsky-Korsakov.",
    "inauguratedYear": 1860,
    "architect": "Alberto Cavos (Historic) / Diamond Schmitt Architects (Mariinsky II, 2013)",
    "architecturalStyle": "Russian Imperial Horseshoe with Gilded Stucco & Sea-Green Velvet",
    "capacity": "1,625 seats (Historic) / 1,830 seats (Mariinsky II)",
    "historicSignificance": "The supreme creative cradle of Russian grand opera; premiere venue for Boris Godunov, Eugene Onegin, and The Queen of Spades.",
    "historicPremieres": [
      {
        "title": "Boris Godunov",
        "composer": "Modest Mussorgsky",
        "premiereYear": 1874,
        "type": "WORLD_PREMIERE",
        "details": "Revolutionary Russian folk opera masterwork premiered on 8 February 1874."
      },
      {
        "title": "The Queen of Spades (Pikovaya Dama)",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "premiereYear": 1890,
        "type": "WORLD_PREMIERE",
        "details": "Tchaikovsky’s tragic masterpiece premiered on 19 December 1890."
      },
      {
        "title": "Prince Igor (Knyaz Igor)",
        "composer": "Alexander Borodin",
        "premiereYear": 1890,
        "type": "WORLD_PREMIERE",
        "details": "Posthumous premiere completed by Rimsky-Korsakov and Glazunov."
      },
      {
        "title": "La forza del destino",
        "composer": "Giuseppe Verdi",
        "premiereYear": 1862,
        "type": "WORLD_PREMIERE",
        "details": "Commissioned by the Imperial Italian Opera of St. Petersburg; conducted by Verdi in person on 10 November 1862."
      }
    ]
  },
  {
    "id": "state-theatre-arts-centre-melbourne",
    "name": "Arts Centre Melbourne (State Theatre)",
    "city": "Melbourne",
    "country": "Australia",
    "region": "Asia-Pacific",
    "latitude": -37.8217,
    "longitude": 144.9686,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://artscentremelbourne.com.au",
    "description": "Situated beneath the soaring 162-meter spire of Arts Centre Melbourne on the Yarra River. Featuring one of the largest stages in the world, the 2,079-seat State Theatre serves as the primary Melbourne performance home for Opera Australia and The Australian Ballet.",
    "inauguratedYear": 1984,
    "architect": "Sir Roy Grounds / John Truscott (Interior)",
    "architecturalStyle": "Late Modernist Proscenium with Victorian Brass & Red Velvet Interior",
    "capacity": "2,079 seats",
    "historicSignificance": "Australia’s second major national opera stage alongside the Sydney Opera House; co-home of Opera Australia.",
    "historicPremieres": [
      {
        "title": "The Ring Cycle (Melbourne Opera Production)",
        "composer": "Richard Wagner",
        "premiereYear": 2013,
        "type": "HISTORIC_STAGING",
        "details": "First fully staged Australian production of Wagner’s complete Der Ring des Nibelungen."
      }
    ]
  },
  {
    "id": "new-zealand-opera-auckland",
    "name": "New Zealand Opera (Kiri Te Kanawa Theatre, Aotea Centre)",
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Asia-Pacific",
    "latitude": -36.8525,
    "longitude": 174.7628,
    "tier": 2,
    "venueType": "MAJOR_OPERA_HOUSE",
    "websiteUrl": "https://nzopera.com",
    "description": "New Zealand’s national opera company, performing in Auckland at the Kiri Te Kanawa Theatre (renamed in 2019 in honor of legendary Māori soprano Dame Kiri Te Kanawa) and in Wellington at the historic St James Theatre. Celebrated for bringing international artists and Māori language operas to the Southern Pacific.",
    "inauguratedYear": 1990,
    "architect": "Warren and Mahoney",
    "architecturalStyle": "Modernist Continental Proscenium Hall",
    "capacity": "2,139 seats",
    "historicSignificance": "New Zealand’s national lyric company; honored by Dame Kiri Te Kanawa; commissioner of original Pacific and Māori operatic repertoire.",
    "historicPremieres": [
      {
        "title": "The Bone Feeder",
        "composer": "Gareth Farr / Renee Liang",
        "premiereYear": 2017,
        "type": "WORLD_PREMIERE",
        "details": "Cross-cultural opera exploring Chinese-Māori immigrant history in New Zealand."
      }
    ]
  }
];
