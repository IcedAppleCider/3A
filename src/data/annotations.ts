import type { AnnotationDef } from './types';

export const ANNOTATIONS: Record<string, AnnotationDef> = {
  burin: {
    id: 'burin',
    no: '01',
    kicker: 'Printmaking · Tool',
    term: 'Burin',
    definition:
      'A lozenge-pointed steel graver used to incise lines into a copperplate. The cleaner the furrow, the colder the hand that drove it.',
    image: '/plates/burin.jpg',
    imageCaption: 'Pl. II — The burin at work',
  },
  speculum: {
    id: 'speculum',
    no: '02',
    kicker: 'Lat. "Mirror"',
    term: 'Speculum',
    definition:
      'Speculum Romanae Magnificentiae — a 16th-century anthology of prints celebrating the monuments of Rome.',
    image: '/plates/temple.jpg',
    imageCaption: 'Pl. I — Portico of the Temple of Julius',
  },
  verso: {
    id: 'verso',
    no: '03',
    kicker: 'Codicology',
    term: 'Verso',
    definition:
      'The back of a leaf; the left-hand page of an open folio. Secrets keep to the verso.',
  },
  foxing: {
    id: 'foxing',
    no: '04',
    kicker: 'Paper · Decay',
    term: 'Foxing',
    definition:
      'Reddish-brown spots that bloom across old paper, caused by iron oxidation. Irreversible.',
  },
  imprimatur: {
    id: 'imprimatur',
    no: '05',
    kicker: 'Print · Law',
    term: 'Imprimatur',
    definition:
      '"Let it be printed." The official licence permitting publication.',
  },
  campo: {
    id: 'campo',
    no: '06',
    kicker: 'Rome · Piazza',
    term: 'Campo de Fiori',
    definition:
      'A Roman square that has held vegetable stalls and executions since the fifteenth century.',
    image: '/plates/map.jpg',
    imageCaption: 'Pl. III — The field, from above',
  },
  sirocco: {
    id: 'sirocco',
    no: '07',
    kicker: 'Weather',
    term: 'Sirocco',
    definition:
      'A hot wind crossing from the Sahara into southern Europe.',
  },
  bruno: {
    id: 'bruno',
    no: '08',
    kicker: 'History · 1600',
    term: 'Giordano Bruno',
    definition:
      'Philosopher burned at the stake in Campo de Fiori in 1600.',
  },
  cartouche: {
    id: 'cartouche',
    no: '09',
    kicker: 'Ornament',
    term: 'Cartouche',
    definition:
      'A scrolled ornamental frame for titles and coats of arms.',
    image: '/plates/cartouche.jpg',
    imageCaption: 'Pl. IV — An empty cartouche',
  },
  ashmole: {
    id: 'ashmole',
    no: '10',
    kicker: 'Antiquarian · 1672',
    term: 'Ashmole',
    definition:
      'Elias Ashmole, antiquarian. His 1672 work carried engravings of St George choir at Windsor.',
    image: '/plates/choir.jpg',
    imageCaption: 'Pl. V — St George Chapel Choir, Windsor',
  },
  ultramarine: {
    id: 'ultramarine',
    no: '11',
    kicker: 'Pigment',
    term: 'Ultramarine',
    definition:
      'Blue ground from lapis lazuli, once dearer than gold.',
  },
  silverpoint: {
    id: 'silverpoint',
    no: '12',
    kicker: 'Drawing',
    term: 'Silverpoint',
    definition:
      'A stylus of silver wire that draws in faint grey and tarnishes to brown. Cannot be erased.',
  },
  palimpsest: {
    id: 'palimpsest',
    no: '13',
    kicker: 'Codicology',
    term: 'Palimpsest',
    definition:
      'A manuscript scraped clean and overwritten, the earlier text ghosting through.',
  },
  chiaroscuro: {
    id: 'chiaroscuro',
    no: '14',
    kicker: 'Art · Light',
    term: 'Chiaroscuro',
    definition:
      'The modelling of volume through light and shadow.',
  },
  'max-verstappen': {
    id: 'max-verstappen',
    no: '15',
    kicker: 'F1 · World Champion',
    term: 'Max Verstappen',
    definition:
      'Triple Formula 1 World Champion (2021–2023). Red Bull Racing. Known for preternatural calm under pressure — a quality the North Pole urgently requires.',
    image: '/plates/burin.jpg',
    imageCaption: 'Pl. VI — The champion, in red',
  },
  'oh-santa': {
    id: 'oh-santa',
    no: '16',
    kicker: 'Music · Accelerated',
    term: '"Oh! Santa"',
    definition:
      'A Christmas carol remixed at 178 BPM for the garage speakers. Daniel Ricciardo added a bass drop at 1:42 that once caused a structural incident.',
  },
  'daniel-ricciardo': {
    id: 'daniel-ricciardo',
    no: '17',
    kicker: 'Former Santa · Retired',
    term: 'Daniel Ricciardo',
    definition:
      'The previous Santa. F1 driver, prank enthusiast, and owner of the RGB speaker incident. Left the post to pursue other dreams. Left behind chaos.',
    image: '/plates/moth.jpg',
    imageCaption: 'Pl. VII — The moth, attracted to the flame',
  },
  rudolph: {
    id: 'rudolph',
    no: '18',
    kicker: 'AI · Co-Pilot',
    term: 'Rudolph',
    definition:
      'The AI co-pilot system. Pixel-reindeer avatar on the dashboard. Programmed for excessive enthusiasm. Cannot be muted without a Level 3 override.',
  },
  'reindeer-buggy': {
    id: 'reindeer-buggy',
    no: '19',
    kicker: 'Vehicle · Class-A',
    term: 'Reindeer Buggy 19',
    definition:
      'A floating sleigh disguised as a sports car. 19 iterations in. Suspension leans left. The reindeer decal was Daniel\'s idea.',
    image: '/plates/map.jpg',
    imageCaption: 'Pl. VIII — The route, from above',
  },
  tablet: {
    id: 'tablet',
    no: '20',
    kicker: 'Interface · Transparent',
    term: '平板',
    definition:
      'A transparent tablet computer. Displays the global wish list. 9999+ unread letters. A red badge that cannot be silenced.',
  },
  'charles-leclerc': {
    id: 'charles-leclerc',
    no: '21',
    kicker: 'F1 · Cupid',
    term: 'Charles Leclerc',
    definition:
      'Monégasque Formula 1 driver, reassigned here as the holiday department’s reluctant Cupid. Fast, precise, and unconvinced by seasonal romance.',
  },
  dionysus: {
    id: 'dionysus',
    no: '22',
    kicker: 'Greek Myth · Revelry',
    term: '狄俄尼索斯',
    definition:
      'Greek god of wine, theatre, ecstasy, and dangerous parties. His presence tends to create more emotional connections than Cupid can safely process.',
  },
  artemis: {
    id: 'artemis',
    no: '23',
    kicker: 'Greek Myth · Hunt',
    term: '阿尔忒弥斯',
    definition:
      'Greek goddess of the hunt, wilderness, and the moon; fiercely independent and generally outside Cupid’s preferred jurisdiction.',
  },
  eileithyia: {
    id: 'eileithyia',
    no: '24',
    kicker: 'Greek Myth · Birth',
    term: '厄勒提亚',
    definition:
      'Greek goddess of childbirth. In Charles’s complaint, she represents the inevitable operational consequences of Dionysian matchmaking.',
  },
  hermes: {
    id: 'hermes',
    no: '25',
    kicker: 'Greek Myth · Messenger',
    term: '赫尔墨斯',
    definition:
      'Messenger of the gods and patron of travellers. The divine department’s fastest courier, routinely asked to cover emergency shifts.',
  },
  'true-love-fire': {
    id: 'true-love-fire',
    no: '26',
    kicker: 'Cupid · Diagnostic',
    term: '真爱之火',
    definition:
      'Cupid’s visible diagnostic for a durable emotional bond. A steady flame indicates connection; smoke indicates a relationship nearing collapse.',
  },
  pistol: {
    id: 'pistol',
    no: '27',
    kicker: 'Weaponry · Cupid',
    term: '手枪',
    definition:
      'Standard issue Cupid sidearm. Replaced the traditional bow and arrow in 1914 for better urban efficiency. Fires various emotional payloads.',
  },
  smoke: {
    id: 'smoke',
    no: '28',
    kicker: 'Visual Metaphor',
    term: '浓烟',
    definition:
      'The visual manifestation of resentment, exhaustion, and unresolved conflict. Thick enough to obscure any remaining true love fire.',
  },
  bauble: {
    id: 'bauble',
    no: '29',
    kicker: 'Holiday Decor',
    term: '装饰球',
    definition:
      'A glass Christmas tree ornament. Highly reflective, prone to shattering. Often the first casualty in holiday domestic disputes.',
  },
  'lead-bullet': {
    id: 'lead-bullet',
    no: '30',
    kicker: 'Ammunition · Negative',
    term: '铅弹',
    definition:
      'Ammunition causing immediate physiological aversion and the desire to leave the premises. Strictly for biological targets. Highly effective for crowd control.',
  },
  'last-year-incident': {
    id: 'last-year-incident',
    no: '31',
    kicker: 'Department Lore',
    term: '去年的事故',
    definition:
      'An operational disaster involving Daniel Ricciardo, excessive eggnog, and a highly public sleigh parking violation. Led to the strict new dress code.',
  },
  regulation: {
    id: 'regulation',
    no: '32',
    kicker: 'HR Policy',
    term: '规定',
    definition:
      'Section 4, Paragraph A: "All operatives must remain in full seasonal uniform during delivery to prevent civilian psychological trauma." Widely hated.',
  },
  'gold-bullet': {
    id: 'gold-bullet',
    no: '33',
    kicker: 'Ammunition · Positive',
    term: '金弹',
    definition:
      'The classic Cupid payload. Reignites dormant affection and lowers defensive emotional barriers. Best deployed after a moment of shared vulnerability.',
  },
  terminal: {
    id: 'terminal',
    no: '34',
    kicker: 'Hardware',
    term: '终端',
    definition:
      'Cupid’s handheld diagnostic device. Used to scan human emotional frequencies, locate matches, and map active "true-love fire" sites in real time.',
  },
  sebastian: {
    id: 'sebastian',
    no: '35',
    kicker: 'F1 · Retired Cupid',
    term: 'Sebastian Vettel',
    definition:
      'The former legendary head of the Cupid department. Quadruple World Champion (2010–2013). Retired to enjoy a quiet life, leaving the division severely understaffed.',
    image: '/plates/temple.jpg',
    imageCaption: 'The temple of the retired champion',
  },
  'equipment-dept': {
    id: 'equipment-dept',
    no: '36',
    kicker: 'Holiday Dept · Support',
    term: '设备部',
    definition:
      'The Equipment Department. Responsible for maintaining tablets, wish-filters, and sleigh systems. Perpetually understaffed, chronically blamed, and — per Max — the source of every glitch.',
  },
  'yvette-young': {
    id: 'yvette-young',
    no: '37',
    kicker: 'Musician · Guitarist',
    term: 'Yvette Young',
    definition:
      'American musician and visual artist, frontwoman of the band Covet. Known for her intricate two-handed tapping technique and poetic, math-rock guitar compositions.',
  },
  'candy-cane': {
    id: 'candy-cane',
    no: '38',
    kicker: 'Confectionery',
    term: '拐杖糖',
    definition:
      'A candy cane — a peppermint stick bent into a hook. A near-universal signal that a beverage is deliberately, and pointedly, non-alcoholic.',
    image: '/plates/moth.jpg',
    imageCaption: 'Pl. XIV — Cranberry juice, pointedly non-alcoholic',
  },
  douyin: {
    id: 'douyin',
    no: '39',
    kicker: 'Media · Attention',
    term: '抖音',
    definition:
      'Douyin (TikTok). The short-video platform that, in Charles’s estimation, has decisively out-competed both organized religion and Santa Claus for the modern teenager’s faith.',
  },
  'the-tide': {
    id: 'the-tide',
    no: '40',
    kicker: 'Song · Covet',
    term: 'The Tide',
    definition:
      'A song by Covet (Yvette Young’s band). Its lyrics read almost like poetry — the kind of quiet, surging piece that gives a shy fan something safe to talk about.',
  },
  'math-rock': {
    id: 'math-rock',
    no: '41',
    kicker: 'Genre',
    term: '数学摇滚',
    definition:
      'Math rock — a rhythmically complex, angular style of rock built on irregular time signatures, unexpected stops, and intricate guitar tapping. An acquired, devoted taste.',
  },
  gingerbread: {
    id: 'gingerbread',
    no: '42',
    kicker: 'Offering · Trade',
    term: '姜饼人',
    definition:
      'A small spiced cookie in the shape of a person. The traditional bribe offered to Santa by well-prepared children. Often left uneaten when the wish is larger than the cookie.',
    image: '/plates/moth.jpg',
    imageCaption: 'Pl. XIII — The gingerbread man — offered in trade',
  },
  'photo-frame': {
    id: 'photo-frame',
    no: '43',
    kicker: 'Domestic · Trace',
    term: '相框合照',
    definition:
      'A framed photograph whose contents have been recently swapped. The fresh cellophane still on the glass betrays how recently the past was edited.',
    image: '/plates/cartouche.jpg',
    imageCaption: 'Pl. IV — An empty cartouche — reserved',
  },
  basket: {
    id: 'basket',
    no: '44',
    kicker: 'Gift · Container',
    term: '提篮',
    definition:
      'A pet carrier draped with a red ribbon. The official vessel for living gifts. Comes with a bow to distract from the logistics of breathing holes.',
    image: '/plates/sword.jpg',
    imageCaption: 'Pl. X — A toy sword — the wish, as filed',
  },
  'fairy-book': {
    id: 'fairy-book',
    no: '45',
    kicker: 'Child · Imagination',
    term: '童话书',
    definition:
      'A picture book open to its last page: a boy walking a dog, hand-in-hand with his mother, in a park. The illustration predates the wish — or perhaps predicts it.',
    image: '/plates/choir.jpg',
    imageCaption: 'Pl. V — An interior, kept warm',
  },
  'old-radio': {
    id: 'old-radio',
    no: '46',
    kicker: 'Domestic · Static',
    term: '老式收音机',
    definition:
      'A battered tabletop radio that refuses to cooperate. It emits nothing but static until provoked by a desperate grandfather and a flickering tablet nearby.',
    image: '/plates/cartouche.jpg',
    imageCaption: 'Pl. XXI — Block Rockin\' Beats, as heard through the static',
  },
  rosemary: {
    id: 'rosemary',
    no: '47',
    kicker: 'Herb · Marriage Counselor',
    term: '迷迭香',
    definition:
      'A fragrant evergreen shrub. In this household, it is less a seasoning than a flashpoint — the one thing that can start a war and, somehow, also end one.',
    image: '/plates/moth.jpg',
    imageCaption: 'Pl. VI — Moth & candle, drawn to the wrong flame',
  },
  turkey: {
    id: 'turkey',
    no: '48',
    kicker: 'Feast · Truce',
    term: '肉汁火鸡',
    definition:
      'The Christmas turkey, finally roasted with rosemary and gravy. It survives every argument at the table and emerges, like the family itself, slightly charred but intact.',
    image: '/plates/temple.jpg',
    imageCaption: 'Pl. I — Where the family gathers, if only for a meal',
  },
};

export const getAnnotation = (id: string): AnnotationDef | undefined => ANNOTATIONS[id];
