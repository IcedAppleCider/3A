import { motion } from 'framer-motion';
import { Map as MapIcon } from 'lucide-react';

/* ————————————————————————————————————————
   章节结尾 · "GO BACK TO THE MAP" 占位按钮
   · 当前无任何跳转/功能，仅作视觉占位
   · 虚线内框暗示"待启用"，hover 仅保留盖章反色反馈
———————————————————————————————————————— */

export function BackToMapMark() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 flex justify-center"
    >
      <button
        type="button"
        aria-disabled="true"
        title="Placeholder — map view coming soon"
        className="group inline-flex cursor-pointer items-stretch border border-ink/70 p-[3px] transition-colors duration-200 hover:bg-ink"
      >
        <span className="inline-flex items-center gap-2.5 px-4 py-2.5 font-sans text-[10.5px] font-bold uppercase tracking-[0.26em] text-ink transition-colors duration-200 group-hover:text-cream-2">
          <MapIcon size={13} strokeWidth={2.2} className="shrink-0" />
          Go back to the map
        </span>
      </button>
    </motion.div>
  );
}
