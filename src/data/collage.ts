import type { PlateItem } from './types';

/* ————————————————————————————————————————
   scenePlates · 每个 scene 各自挂一组页缘图版
   父容器：max-w-[1180px] 居中版心。
   正文栏 560px 居中，两侧各预留 ≈300px。
   为了贴近文本，随文出现。
———————————————————————————————————————— */

export const scenePlates: Record<string, PlateItem[]> = {
  /* ACT I · SCENE 1 — Santa */
  'scene-1-1': [
    {
      id: 'pl-temple',
      src: `${import.meta.env.BASE_URL}plates/temple.jpg`,
      plate: 'I',
      caption: 'Speculum Romanae Magnificentiae — Portico of the Temple of Julius',
      rotate: -2.2,
      drift: 46,
      className: 'right-4 md:right-6 top-[2%] w-[240px] lg:w-[270px] 2xl:w-[290px]',
    },
  ],
  /* ACT I · SCENE 2 — Cupid */
  'scene-1-2': [
    {
      id: 'pl-map',
      src: `${import.meta.env.BASE_URL}plates/map.jpg`,
      plate: 'III',
      caption: "Campo de' Fiori — the field, from above",
      rotate: 2.4,
      drift: -34,
      className: 'left-4 md:left-6 top-[2%] w-[240px] lg:w-[270px] 2xl:w-[290px]',
    },
  ],
  /* ACT I · SCENE 3 — Spark */
  'scene-1-3': [
    {
      id: 'pl-constellation',
      src: `${import.meta.env.BASE_URL}plates/constellation.jpg`,
      plate: 'IX',
      caption: 'Celestial chart — the heavens observed',
      rotate: -1.5,
      drift: 42,
      className: 'left-4 md:left-6 top-[2%] w-[240px] lg:w-[270px] 2xl:w-[290px]',
    },
    {
      id: 'pl-cartouche',
      src: `${import.meta.env.BASE_URL}plates/cartouche.jpg`,
      plate: 'IV',
      caption: 'An empty cartouche — reserved',
      rotate: 4.5,
      drift: 30,
      className: 'right-4 md:right-6 top-[42%] w-[200px] lg:w-[220px] 2xl:w-[240px]',
    },
  ],
  /* ACT II · SCENE 1 — Letter */
  'scene-2-1': [
    {
      id: 'pl-sword',
      src: `${import.meta.env.BASE_URL}plates/sword.jpg`,
      plate: 'X',
      caption: 'A toy sword — the wish, as filed',
      rotate: -2.5,
      drift: 40,
      className: 'right-4 md:right-6 top-[6%] w-[220px] lg:w-[250px] 2xl:w-[270px]',
    },
    {
      id: 'pl-dragon',
      src: `${import.meta.env.BASE_URL}plates/constellation.jpg`,
      plate: 'XI',
      caption: 'Crayon dragon — knight & archer, in a child’s hand',
      rotate: 3,
      drift: -30,
      className: 'left-4 md:left-6 top-[30%] w-[210px] lg:w-[235px] 2xl:w-[255px]',
    },
    {
      id: 'pl-letter',
      src: `${import.meta.env.BASE_URL}plates/choir.jpg`,
      plate: 'XII',
      caption: 'A letter to Santa — pencil, pressed hard',
      rotate: -3.5,
      drift: 34,
      className: 'right-4 md:right-6 top-[52%] w-[200px] lg:w-[225px] 2xl:w-[245px]',
    },
  ],
  /* ACT II · SCENE 2 — Lead Bullet */
  'scene-2-2': [
    {
      id: 'pl-ticket',
      src: `${import.meta.env.BASE_URL}plates/temple.jpg`,
      plate: 'XV',
      caption: 'A concert ticket — Yvette Young, as dreamed',
      rotate: -2.8,
      drift: 36,
      className: 'right-4 md:right-6 top-[6%] w-[210px] lg:w-[235px] 2xl:w-[255px]',
    },
    {
      id: 'pl-album',
      src: `${import.meta.env.BASE_URL}plates/map.jpg`,
      plate: 'XVI',
      caption: 'The Tide — an album cover, in a shy fans memory',
      rotate: 3.2,
      drift: -28,
      className: 'left-4 md:left-6 top-[68%] w-[200px] lg:w-[225px] 2xl:w-[245px]',
    },
  ],
  /* ACT II · SCENE 3 — Home (新增柯基犬拼贴) */
  'scene-2-3': [
    {
      id: 'pl-corgi',
      src: `${import.meta.env.BASE_URL}plates/burin.jpg`,
      plate: 'XVII',
      caption: 'A corgi pup — the wish, as written: one corgi',
      rotate: -2,
      drift: 32,
      className: 'right-4 md:right-6 top-[8%] w-[220px] lg:w-[250px] 2xl:w-[270px]',
    },
    {
      id: 'pl-photo-frame',
      src: `${import.meta.env.BASE_URL}plates/cartouche.jpg`,
      plate: 'XVIII',
      caption: 'A family photo replaced — new frame, film still on',
      rotate: 2.2,
      drift: -28,
      className: 'left-4 md:left-6 top-[34%] w-[210px] lg:w-[235px] 2xl:w-[255px]',
    },
  ],
  /* ACT III · SCENE 1 — The Wish */
  'scene-3-1': [
    {
      id: 'pl-moth',
      src: `${import.meta.env.BASE_URL}plates/moth.jpg`,
      plate: 'VI',
      caption: 'Moth & candle — plate kept in the dark',
      rotate: 2.2,
      drift: -18,
      className: 'left-4 md:left-6 top-[4%] w-[240px] lg:w-[270px] 2xl:w-[290px]',
    },
    /* 愿望卡片附近 · 交错左右 · 软弹枪 / 赛车模型 / Block Rockin' Beats */
    {
      id: 'pl-softgun',
      src: `${import.meta.env.BASE_URL}plates/sword.jpg`,
      plate: 'XIX',
      caption: 'Soft-serve blaster — Poppy\'s wish, filed',
      rotate: -3.1,
      drift: 38,
      className: 'right-4 md:right-6 top-[22%] w-[220px] lg:w-[245px] 2xl:w-[265px]',
    },
    {
      id: 'pl-racecar',
      src: `${import.meta.env.BASE_URL}plates/map.jpg`,
      plate: 'XX',
      caption: 'Die-cast racer — Theo\'s wish, boxed',
      rotate: 2.8,
      drift: -32,
      className: 'left-4 md:left-6 top-[38%] w-[210px] lg:w-[235px] 2xl:w-[255px]',
    },
    {
      id: 'pl-blockrockinbeats',
      src: `${import.meta.env.BASE_URL}plates/cartouche.jpg`,
      plate: 'XXI',
      caption: 'Block Rockin\' Beats — the alarm clock soundtrack',
      rotate: -2.4,
      drift: 28,
      className: 'right-4 md:right-6 top-[58%] w-[200px] lg:w-[225px] 2xl:w-[245px]',
    },
  ],
  /* ACT III · SCENE 2 — Party (placeholder) */
  'scene-3-2': [],
  /* ACT III · SCENE 3 — Mute (placeholder) */
  'scene-3-3': [],
};

/* 卷末大留白 */
export const bottomPlates: PlateItem[] = [
  {
    id: 'pl-choir',
    src: `${import.meta.env.BASE_URL}plates/choir.jpg`,
    plate: 'V',
    caption: 'Wenceslaus Hollar — St George’s Chapel Choir, Windsor, 1663',
    rotate: -1.6,
    drift: 22,
    className: 'left-[3%] top-[4%] w-32 sm:w-36 md:w-44',
  },
];

export const plateIndex = [
  'I. Temple of Julius — Speculum',
  'II. Burin & Copperplate',
  'III. Campo de’ Fiori, from above',
  'IV. An Empty Cartouche',
  'V. St George’s Choir — Hollar, 1663',
  'VI. Moth & Candle',
  'IX. Celestial Chart — the heavens observed',
  'X. A Toy Sword',
  'XI. Crayon Dragon',
  'XII. A Letter to Santa',
  'XV. A Concert Ticket — Yvette Young',
  'XVI. The Tide — Album Cover',
  'XVII. A Corgi Pup — Mia’s Wish',
  'XVIII. A Replaced Family Photo',
];
