import React, { useEffect, useState } from 'react';
import { X, Compass, Landmark, Music, BookOpen, Crown, MapPin, Sparkles } from 'lucide-react';
import { TierPinIcon } from './TierPinIcon';

interface AtlasInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  tierCounts: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
  onSelectVenue?: (venueId: string) => void;
  defaultTab?: 'history' | 'guide';
}

export const AtlasInfoModal: React.FC<AtlasInfoModalProps> = ({
  isOpen,
  onClose,
  tierCounts,
  onSelectVenue,
  defaultTab = 'history',
}) => {
  const [activeTab, setActiveTab] = useState<'history' | 'guide'>(defaultTab);

  // Sync tab if defaultTab changes when opening
  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
    }
  }, [isOpen, defaultTab]);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const LandmarkJumpButton = ({
    venueId,
    label,
    city,
    year,
  }: {
    venueId: string;
    label: string;
    city: string;
    year?: string | number;
  }) => (
    <button
      type="button"
      onClick={() => onSelectVenue?.(venueId)}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#19273c] hover:bg-[#273c5c] border border-amber-500/60 hover:border-amber-400 text-amber-200 hover:text-amber-100 transition shadow-sm cursor-pointer text-xs md:text-sm font-cinzel group text-left"
      title={`Fly to ${label} on the Globe`}
    >
      <MapPin className="h-3.5 w-3.5 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
      <span className="font-bold">{label}</span>
      <span className="text-[11px] text-slate-300 font-garamond italic">
        ({city}{year ? `, ${year}` : ''})
      </span>
    </button>
  );

  return (
    <div
      className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md select-none font-serif overflow-y-auto cursor-default"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      onPointerDown={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        className="pointer-events-auto relative w-full max-w-5xl 2xl:max-w-6xl rounded-xl border border-amber-500/60 bg-[#18263a] p-5 md:p-6 shadow-2xl text-slate-100 max-h-[92vh] overflow-y-auto my-auto z-50 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.95), 0 0 40px rgba(212, 175, 55, 0.2)',
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-amber-900/60 pb-3.5 mb-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/70 bg-gradient-to-br from-[#8d1720] to-[#5a0d15] text-amber-200 shadow-lg shrink-0">
              <Compass className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <h2 className="font-cinzel text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300">
                The World of Opera: Atlas & History
              </h2>
              <p className="text-xs md:text-sm text-amber-200 font-garamond font-medium mt-0.5">
                From Late Renaissance Humanism to Global Public Stages
              </p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white transition cursor-pointer border border-slate-700/80 bg-[#1e2f49] shrink-0 shadow"
            title="Close guide (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 border-b border-slate-700/80 pb-3 mb-4 shrink-0">
          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-lg font-cinzel text-xs md:text-sm font-bold transition cursor-pointer ${
              activeTab === 'history'
                ? 'bg-gradient-to-r from-amber-700/40 to-amber-900/40 text-amber-200 border border-amber-500/80 shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
            }`}
          >
            <BookOpen className="h-4 w-4 text-amber-400" />
            <span>The Genesis & Evolution of Opera</span>
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-lg font-cinzel text-xs md:text-sm font-bold transition cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-gradient-to-r from-amber-700/40 to-amber-900/40 text-amber-200 border border-amber-500/80 shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
            }`}
          >
            <Compass className="h-4 w-4 text-amber-400" />
            <span>Atlas Guide & Venue Tiers</span>
          </button>
        </div>

        {/* TAB 1: HISTORICAL CHRONICLE */}
        {activeTab === 'history' && (
          <div className="space-y-5 text-left font-garamond text-slate-200 leading-relaxed overflow-y-auto pr-1">
            {/* Section 1: Florence & Greek Reboot */}
            <div className="bg-[#20324c] border border-amber-500/40 rounded-xl p-4 md:p-5 space-y-3 shadow-md">
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
                <h3 className="font-cinzel text-base md:text-lg font-bold text-amber-300 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-xs font-bold">1</span>
                  Where It All Began: Florence and the Ancient Greek "Reboot"
                </h3>
                <span className="text-xs font-cinzel text-amber-200/80 uppercase tracking-widest hidden sm:inline">Late 16th Century</span>
              </div>

              <div className="space-y-2.5 text-sm md:text-[15px]">
                <p>
                  While Claudio Monteverdi created opera's first enduring masterpiece in Mantua, the true birthplace of opera as an intellectual concept and experimental art form was <strong className="text-amber-200">Florence</strong>.
                </p>
                <p>
                  <strong className="text-amber-300">The Florentine Camerata (Late 1500s):</strong> A circle of humanists, poets, and musicians began gathering at the palazzo of Count Giovanni de' Bardi. Their objective was not to invent modern commercial musical theatre; their goal was to <em className="text-amber-100">recreate Ancient Greek tragedy</em>.
                </p>
                <p>
                  <strong className="text-amber-300">The Classical Theory & Musical Invention:</strong> Because ancient Greek musical notation was largely indecipherable from surviving fragments, the Florentines relied on philosophical treatises by Plato, Aristotle, and Aristoxenus, which documented that Greek drama had been sung or chanted with natural speech inflections. Convinced that dense Renaissance polyphony (where multiple overlapping voices sang differing words at the same time) rendered poetry unintelligible, <strong className="text-amber-200">Vincenzo Galilei</strong> (lutenist, theorist, and father of astronomer Galileo Galilei) championed <em className="text-amber-100">monody</em>: a single melodic vocal line declaimed over simple chordal accompaniment. In 1582 at Palazzo Bardi, Galilei performed his monodic setting of Dante's <em>Il Conte Ugolino</em>, providing the aesthetic blueprint for operatic recitative.
                </p>
                <p>
                  <strong className="text-amber-300">The First Staged Operas:</strong> When Count Bardi relocated to Rome in 1592, leadership transitioned to wealthy nobleman Jacopo Corsi. At <strong className="text-amber-200">Palazzo Corsi-Tornabuoni</strong> during Carnival 1598, Corsi, composer Jacopo Peri, and poet Ottavio Rinuccini staged <em>Dafne</em>—the first opera (<em>favola in musica</em>) in world history. Two years later, on 6 October 1600 at the Medici grand ducal <strong className="text-amber-200">Palazzo Pitti</strong>, Peri unveiled <em>Euridice</em> for the royal wedding of Marie de' Medici to King Henry IV of France, leaving us the earliest complete surviving opera score.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-700/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-cinzel text-amber-300 uppercase tracking-wider mr-1">Foundational Sites:</span>
                <LandmarkJumpButton venueId="palazzo-bardi-florence" label="Palazzo Bardi" city="Florence" year="1573" />
                <LandmarkJumpButton venueId="palazzo-corsi-florence" label="Palazzo Corsi-Tornabuoni" city="Florence" year="1598" />
                <LandmarkJumpButton venueId="palazzo-pitti-florence" label="Palazzo Pitti" city="Florence" year="1600" />
              </div>
            </div>

            {/* Section 2: Mantua & Political Fragmentation */}
            <div className="bg-[#20324c] border border-amber-500/40 rounded-xl p-4 md:p-5 space-y-3 shadow-md">
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
                <h3 className="font-cinzel text-base md:text-lg font-bold text-amber-300 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-xs font-bold">2</span>
                  Mantua and the Role of Political Fragmentation
                </h3>
                <span className="text-xs font-cinzel text-amber-200/80 uppercase tracking-widest hidden sm:inline">1600s–1610s</span>
              </div>

              <div className="space-y-2.5 text-sm md:text-[15px]">
                <p>
                  Political fragmentation—specifically the <strong className="text-amber-200">disunity of Italy</strong>—served as the primary competitive engine of early opera.
                </p>
                <p>
                  <strong className="text-amber-300">The Court Prestige Race:</strong> Italy was not a unified nation; it was a fragmented patchwork of independent duchies, republics, and papal territories (Mantua, Florence, Ferrara, Milan, Modena). Because regional sovereigns could not match vast continental powers in military size, they competed aggressively for international prestige through <em className="text-amber-100">culture, architectural splendor, and theatrical spectacle</em>.
                </p>
                <p>
                  <strong className="text-amber-300">Mantua and the Gonzaga Dynasty:</strong> Duke Vincenzo I Gonzaga and his sons (Prince Francesco and Cardinal Ferdinando) resolved to eclipse the Medici of Florence and the Este of Ferrara. On 24 February 1607, inside the ducal chambers of <strong className="text-amber-200">Palazzo Ducale di Mantova</strong> for the noble Accademia degli Invaghiti, court maestro <strong className="text-amber-200">Claudio Monteverdi</strong> premiered <em>L'Orfeo</em>. Monteverdi transformed intellectual recitative into fully developed theatrical drama with rich orchestral colors, expressive madrigalian choruses, and psychological depth.
                </p>
                <p>
                  <strong className="text-amber-300">Strict Aristocratic Exclusivity:</strong> Early court operas were private, invite-only spectacles funded entirely by the sovereign's treasury. Staged in palace chambers for invited aristocrats, resident scholars, and visiting ambassadors, the general public was strictly excluded.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-700/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-cinzel text-amber-300 uppercase tracking-wider mr-1">Foundational Site:</span>
                <LandmarkJumpButton venueId="palazzo-ducale-mantova" label="Palazzo Ducale di Mantova" city="Mantua" year="1607" />
              </div>
            </div>

            {/* Section 3: Venice Commercial Revolution */}
            <div className="bg-[#20324c] border border-amber-500/40 rounded-xl p-4 md:p-5 space-y-3 shadow-md">
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
                <h3 className="font-cinzel text-base md:text-lg font-bold text-amber-300 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-xs font-bold">3</span>
                  The Pivot to Venice: Commercial Baroque Opera & The Public Box Office
                </h3>
                <span className="text-xs font-cinzel text-amber-200/80 uppercase tracking-widest hidden sm:inline">1637 Onward</span>
              </div>

              <div className="space-y-2.5 text-sm md:text-[15px]">
                <p>
                  While court opera was an exclusive loss-leader funded by dynastic treasuries, <strong className="text-amber-200">Venice</strong> radically revolutionized the institution.
                </p>
                <p>
                  <strong className="text-amber-300">Teatro San Cassiano (1637):</strong> In 1637, the patrician Tron family opened <strong className="text-amber-200">Teatro San Cassiano</strong> as the world's first public opera house where anyone who could purchase an admission ticket could enter.
                </p>
                <p>
                  <strong className="text-amber-300">The Impresario Business Model:</strong> Venice was a wealthy maritime republic governed by merchant patricians with an enormous influx of international tourism during the annual Carnival season. Theatrical impresarios rented theatres from noble families, hired star singers (prime donne and castrati), and financed productions by selling tickets and leasing tiered private boxes (<em className="text-amber-100">palchi</em>). Libretti shifted from solemn court allegories to high-stakes romances, political intrigues, and comic satire. In his seventies, Claudio Monteverdi returned to the stage for Venice's paying public with <em>Il ritorno d'Ulisse in patria</em> (1640) and <em>L'incoronazione di Poppea</em> (1642), establishing the commercial foundation that dominated European opera for centuries.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-700/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-cinzel text-amber-300 uppercase tracking-wider mr-1">Foundational Site:</span>
                <LandmarkJumpButton venueId="teatro-san-cassiano-venice" label="Teatro San Cassiano" city="Venice" year="1637" />
              </div>
            </div>

            {/* Section 4: Rome & Papal States */}
            <div className="bg-[#20324c] border border-amber-500/40 rounded-xl p-4 md:p-5 space-y-3 shadow-md">
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
                <h3 className="font-cinzel text-base md:text-lg font-bold text-amber-300 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-xs font-bold">4</span>
                  Rome and the Papal States: Sacred Grandeur and Stage Illusions
                </h3>
                <span className="text-xs font-cinzel text-amber-200/80 uppercase tracking-widest hidden sm:inline">1630s–18th Century</span>
              </div>

              <div className="space-y-2.5 text-sm md:text-[15px]">
                <p>
                  In Rome, the Catholic Church and reigning papal families embraced opera with monumental theatrical ambition, coupled with Counter-Reformation moral scrutiny.
                </p>
                <p>
                  <strong className="text-amber-300">Teatro delle Quattro Fontane & Palazzo Barberini:</strong> Cardinal Francesco Barberini constructed a lavish 3,000-seat theatre inside <strong className="text-amber-200">Palazzo Barberini</strong>. In 1632, Stefano Landi's <em>Il Sant'Alessio</em> (libretto by future Pope Clement IX Giulio Rospigliosi) inaugurated the hall with jaw-dropping stage machinery engineered by <strong className="text-amber-200">Gian Lorenzo Bernini</strong>, featuring flying angels, descending cloud apparitions, and fiery underworlds.
                </p>
                <p>
                  <strong className="text-amber-300">Hagiography, Castrati, and Moral Censorship:</strong> Roman opera favored lives of the saints (hagiographies) and allegorical moral dramas, performed by all-male casts with virtuosic castrati. Under strict popes, secular theatre was periodically condemned as decadent or outlawed entirely, forcing opera to navigate ecclesiastical oversight and moral censorship until the late 19th-century public stages of Rome.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-700/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-cinzel text-amber-300 uppercase tracking-wider mr-1">Historic Roman Stages:</span>
                <LandmarkJumpButton venueId="teatro-delle-quattro-fontane-barberini" label="Palazzo Barberini (Quattro Fontane)" city="Rome" year="1632" />
                <LandmarkJumpButton venueId="teatro-apollo-rome" label="Teatro Apollo" city="Rome" year="1795" />
              </div>
            </div>

            {/* Section 5: Pan-European Expansion */}
            <div className="bg-[#20324c] border border-amber-500/40 rounded-xl p-4 md:p-5 space-y-3 shadow-md">
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
                <h3 className="font-cinzel text-base md:text-lg font-bold text-amber-300 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-xs font-bold">5</span>
                  The European Expansion: Divergent National Traditions
                </h3>
                <span className="text-xs font-cinzel text-amber-200/80 uppercase tracking-widest hidden sm:inline">17th–19th Centuries</span>
              </div>

              <div className="space-y-2.5 text-sm md:text-[15px]">
                <p>
                  <strong className="text-amber-300">The French Court (Versailles):</strong> Guided by Cardinal Mazarin and King Louis XIV, France absorbed Italian opera but reshaped it into a distinct royal genre: <em className="text-amber-100">Tragédie en musique</em> (spearheaded by Jean-Baptiste Lully and librettist Philippe Quinault). Centered on court ballet, disciplined French declamation, and grand orchestral overtures, French opera celebrated the Sun King at monuments like the <strong className="text-amber-200">Opéra Royal de Versailles</strong>.
                </p>
                <p>
                  <strong className="text-amber-300">The Neapolitan Vocal Laboratory:</strong> Through its renowned music conservatories, Naples became the vocal capital of 18th-century Europe. The city pioneered both monumental <em>opera seria</em> (Metastasio) and accessible comic <em>opera buffa</em> (Pergolesi, Cimarosa), centered around Europe's oldest continuously operating royal opera house, the <strong className="text-amber-200">Teatro di San Carlo</strong> (1737).
                </p>
                <p>
                  <strong className="text-amber-300">The German Lands & Richard Wagner:</strong> Much like Italy, the political fragmentation of the German lands into hundreds of sovereign principalities heavily fueled musical patronage. Independent courts competed with dedicated Kapellen and opera troupes. The tradition expanded from early bourgeois public opera at the <strong className="text-amber-200">Hamburgische Staatsoper</strong> (1678) and Mozart's Viennese <em>Singspiel</em>, culminating in Richard Wagner's revolutionary festival house, the <strong className="text-amber-200">Bayreuther Festspielhaus</strong> (1876), realizing his visionary ideal of the unified music drama (<em>Gesamtkunstwerk</em>).
                </p>
              </div>

              <div className="pt-2 border-t border-slate-700/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-cinzel text-amber-300 uppercase tracking-wider mr-1">Landmark European Houses:</span>
                <LandmarkJumpButton venueId="opera-royal-versailles" label="Opéra Royal de Versailles" city="Versailles" year="1770" />
                <LandmarkJumpButton venueId="teatro-di-san-carlo" label="Teatro di San Carlo" city="Naples" year="1737" />
                <LandmarkJumpButton venueId="hamburgische-staatsoper" label="Hamburgische Staatsoper" city="Hamburg" year="1678" />
                <LandmarkJumpButton venueId="bayreuther-festspielhaus" label="Bayreuther Festspielhaus" city="Bayreuth" year="1876" />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ATLAS GUIDE & TIERS */}
        {activeTab === 'guide' && (
          <div className="space-y-4 text-left overflow-y-auto pr-1">
            {/* Top Row: About the Map & Navigation Tips Side-by-Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Overview */}
              <div className="bg-[#20324c] border border-slate-700/70 p-3 rounded-lg space-y-1 flex flex-col justify-center">
                <h3 className="font-cinzel text-xs md:text-sm font-bold text-amber-300 flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-amber-400" /> About The World of Opera
                </h3>
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-garamond">
                  An illustrated cartography of historical opera houses, landmark world premieres, and international summer classical festivals spanning antiquity to the modern era across 96 countries and 379 world stages and landmark sites. Every venue is located at its verified geographic coordinates and classified into five distinct architectural and curatorial categories.
                </p>
              </div>

              {/* Navigation Tips */}
              <div className="bg-[#20324c] border border-slate-700/70 p-3 rounded-lg space-y-1 flex flex-col justify-center">
                <h3 className="font-cinzel text-xs md:text-sm font-bold text-amber-300 flex items-center gap-2">
                  <Music className="h-4 w-4 text-amber-400" /> Navigation & Search Tips
                </h3>
                <ul className="text-xs md:text-sm text-slate-200 space-y-0.5 font-garamond list-disc list-inside">
                  <li>
                    <strong className="text-amber-200">Globe Navigation:</strong> Drag to rotate, scroll to zoom. Pins scale dynamically with responsive camera framing.
                  </li>
                  <li>
                    <strong className="text-amber-200">Venue Dossiers:</strong> Click any pin or directory entry to inspect architectural specs and world premieres.
                  </li>
                  <li>
                    <strong className="text-amber-200">Historical Palaces:</strong> Discover foundational 16th- and 17th-century birthplace palaces in Florence, Mantua, Venice, and Rome under Tier 5.
                  </li>
                  <li>
                    <strong className="text-amber-200">Composer Search:</strong> Search by composer ("Monteverdi", "Verdi", "Wagner", "Mozart") to locate premiere houses.
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section: Classification Grid (5 Categories) */}
            <div className="space-y-2">
              <h3 className="font-cinzel text-xs md:text-sm font-bold text-amber-300 uppercase tracking-wider px-0.5">
                Cartographic Venue Classifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {/* Category 1 */}
                <div className="bg-[#20324c] border border-amber-500/50 p-3 rounded-lg space-y-1">
                  <div className="flex items-center gap-2 font-cinzel font-bold text-xs md:text-sm text-amber-300">
                    <TierPinIcon tier={1} className="w-4 h-4 shrink-0" />
                    <span>Global Premier Houses ({tierCounts[1]})</span>
                  </div>
                  <p className="text-xs md:text-[13px] text-slate-200 leading-snug font-garamond">
                    Flagship international institutions with massive global footprints, star rosters, and historic supremacy. These canonical stages shaped the operatic canon with world premieres by Verdi, Puccini, Wagner, Mozart, and Strauss.
                  </p>
                </div>

                {/* Category 2 */}
                <div className="bg-[#20324c] border border-red-500/50 p-3 rounded-lg space-y-1">
                  <div className="flex items-center gap-2 font-cinzel font-bold text-xs md:text-sm text-red-300">
                    <TierPinIcon tier={2} className="w-4 h-4 shrink-0" />
                    <span>Major Metropolitan & National ({tierCounts[2]})</span>
                  </div>
                  <p className="text-xs md:text-[13px] text-slate-200 leading-snug font-garamond">
                    Foremost civic, state, and national opera houses with year-round resident companies, dedicated pit orchestras, and world-class repertory seasons across major cultural capitals.
                  </p>
                </div>

                {/* Category 3 */}
                <div className="bg-[#20324c] border border-emerald-500/50 p-3 rounded-lg space-y-1">
                  <div className="flex items-center gap-2 font-cinzel font-bold text-xs md:text-sm text-emerald-300">
                    <TierPinIcon tier={3} className="w-4 h-4 shrink-0" />
                    <span>Summer Classical Festivals ({tierCounts[3]})</span>
                  </div>
                  <p className="text-xs md:text-[13px] text-slate-200 leading-snug font-garamond">
                    World-renowned seasonal destination festivals and scenic summer orchestral homes—such as Salzburg, Glyndebourne, Santa Fe, Tanglewood (Boston Symphony), Ravinia (Chicago Symphony), Aspen Music Festival, and Bravo! Vail.
                  </p>
                </div>

                {/* Category 4 */}
                <div className="bg-[#20324c] border border-sky-500/50 p-3 rounded-lg space-y-1">
                  <div className="flex items-center gap-2 font-cinzel font-bold text-xs md:text-sm text-sky-300">
                    <TierPinIcon tier={4} className="w-4 h-4 shrink-0" />
                    <span>Regional & Boutique Houses ({tierCounts[4]})</span>
                  </div>
                  <p className="text-xs md:text-[13px] text-slate-200 leading-snug font-garamond">
                    High-standard civic and regional companies in intimate historic jewel boxes and municipal theatres—from historic Victorian mountain stages like Aspen's Wheeler Opera House and Central City Opera to beloved regional companies across Europe and the Americas.
                  </p>
                </div>

                {/* Category 5 */}
                <div className="bg-[#20324c] border border-purple-500/50 p-3 rounded-lg space-y-1 md:col-span-2 lg:col-span-2 xl:col-span-1">
                  <div className="flex items-center gap-2 font-cinzel font-bold text-xs md:text-sm text-purple-300">
                    <TierPinIcon tier={5} className="w-4 h-4 shrink-0" />
                    <span>Historic Royal Court Theatres ({tierCounts[5]})</span>
                  </div>
                  <p className="text-xs md:text-[13px] text-slate-200 leading-snug font-garamond">
                    Intact 16th- to 18th-century royal, princely, and imperial court theatres and private palaces where opera was born—preserved with original historical stage machinery, wooden fly towers, and magnificent baroque or Renaissance acoustics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
