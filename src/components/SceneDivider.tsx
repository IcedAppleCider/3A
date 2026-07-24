import { motion } from 'framer-motion';
import type { Scene } from '../data/types';

/* ————————————————————————————————————————
   场景分隔 · 幕内场景的轻量题头
   只有编号 + 三列元信息（日期 / 时间 / 地点）+ 场景标题
   不使用大分栏线；正文开头的 INT/EXT heading 才是真正的 slugline
———————————————————————————————————————— */

export function SceneDivider({ scene, actNo }: { scene: Scene; actNo: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-[540px] border-b border-ink/40 px-8 pb-3 pt-4 font-sans text-[9.5px] font-bold uppercase tracking-[0.22em] text-ink/80 lg:px-11"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <span className="text-ink">
          SCENE {scene.sceneNo}
          <span className="mx-1.5 text-ink/40">/</span>
          {actNo}
        </span>
        <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-ink/85">
          <span>{scene.slug[0]}</span>
          <span className="text-ink/55">{scene.slug[1]}</span>
          <span>{scene.slug[2]}</span>
        </span>
      </div>
      {scene.title && (
        <div className="mt-1.5 font-header text-[15px] uppercase tracking-[0.04em] text-ink/70">
          {scene.title}
        </div>
      )}
    </motion.div>
  );
}
