import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { PlateItem } from '../data/types';
import { useMouseParallax } from './MouseParallax';
import { cn } from '../utils/cn';

/* ————————————————————————————————————————
   拼贴图版 · 置于留白处的铜版蚀刻画
   · 滚动视差(沿 drift) + 鼠标视差(沿 mx)
   · 蓝细框 + 阴影图版压印 + 目录式小字题注
———————————————————————————————————————— */

export function Plate({ item, className }: { item: PlateItem; className?: string }) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: anchorRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [item.drift, -item.drift]);
  const { mx } = useMouseParallax();
  const x = useTransform(mx, (v) => v * item.drift * 0.4);

  return (
    <div ref={anchorRef} className={cn('absolute', className)}>
      <motion.figure
        style={{ x, y, rotate: item.rotate }}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-4% 0px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.04, transition: { type: 'spring', stiffness: 240, damping: 16 } }}
        className="pointer-events-auto w-full select-none"
      >
        <span className="block border border-ink/80 bg-cream-2 p-[4px] shadow-[7px_9px_0_rgba(30,45,130,0.13)]">
          <img src={item.src} alt={item.caption} draggable={false} loading="lazy" className="block w-full" />
        </span>
        <figcaption className="mt-2.5 font-sans text-[8.5px] font-bold uppercase leading-[1.7] tracking-[0.16em] text-ink/80 md:text-[9px]">
          <span className="mr-1 border border-ink/70 px-1 py-[1px] text-ink">Pl. {item.plate}</span>
          {item.caption}
        </figcaption>
      </motion.figure>
    </div>
  );
}
