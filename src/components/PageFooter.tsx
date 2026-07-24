import { motion } from 'framer-motion';
import { Rule } from './Rule';
import { plateIndex } from '../data/collage';

export function PageFooter() {
  return (
    <footer className="relative mx-auto w-full max-w-[1180px] px-4 pb-24 md:px-6">
      <Rule double />

      {/* 图版索引 */}
      <div className="grid gap-6 py-6 md:grid-cols-[140px_1fr] md:gap-10">
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-ink">
          Plates
        </p>
        <ul className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
          {plateIndex.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="font-sans text-[9px] font-bold uppercase leading-relaxed tracking-[0.16em] text-ink/80"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      <Rule />

      {/* 版权页式收尾 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4 pt-14 text-center"
      >
        <p className="ink-press font-header text-3xl uppercase tracking-[0.02em] text-ink md:text-5xl">Fin</p>
        <p className="font-sans text-[9.5px] font-bold uppercase tracking-[0.3em] text-ink/75">
          Set in Archivo &amp; Courier Prime · Printed in Ultramarine on Cream Laid Paper
        </p>
        <p className="font-sans text-[9px] font-bold uppercase tracking-[0.24em] text-ink/55">
          Speculum Press · Reading Copy N° 17 · MMXXVI
        </p>
      </motion.div>
    </footer>
  );
}
