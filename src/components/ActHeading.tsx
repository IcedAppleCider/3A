import { motion } from 'framer-motion';
import type { Act } from '../data/types';
import { Rule } from './Rule';

/* ————————————————————————————————————————
   ACT 题头 · 仅显示编号 + 右侧大标题
   左列小字已移除
———————————————————————————————————————— */

export function ActHeading({ act, index }: { act: Act; index: number }) {
  return (
    <div
      data-act-no={index}
      id={act.id}
      className="scroll-mt-10 pt-24 md:pt-32"
    >
      {/* 编号 */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-2 font-sans text-lg font-bold tracking-[0.04em] md:text-xl"
      >
        <a
          href={`#${act.id}`}
          className="inline-block cursor-pointer px-1 py-[1px] transition-colors duration-200 hover:bg-ink hover:text-cream-2"
        >
          {act.actNo}
        </a>
      </motion.p>

      {/* 上分栏线 */}
      <Rule />

      {/* 标题区 · 仅右侧大标题 */}
      <div className="flex items-end justify-end py-4 md:py-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="ink-press max-w-[580px] font-header text-[34px] uppercase leading-[1.02] tracking-[-0.015em] text-ink sm:text-right md:text-[56px] lg:text-[64px]"
        >
          {act.title}
        </motion.h2>
      </div>

      {/* 下分栏线（单线） */}
      <Rule />
    </div>
  );
}
