import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { Rule } from './Rule';
import { JumpToNav } from './JumpToNav';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function PageHeader() {
  return (
    <header className="relative mx-auto w-full max-w-[1180px] px-4 pt-20 md:px-6 md:pt-28">
      {/* 顶行小字 */}
      <motion.div
        {...fade(0)}
        className="flex items-baseline justify-between font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-ink"
      >
        <span>This screenplay is under full copyright of Fantasyland One.</span>
        <span className="hidden sm:block">All rights reserved.</span>
      </motion.div>

      <Rule className="mt-4" />

      {/* 题头：左列元信息 ‖ 右列书名 */}
      <div className="grid grid-cols-1 items-end gap-8 py-6 md:grid-cols-[1fr_auto] md:gap-14 md:py-8">
        <motion.div {...fade(0.25)} className="space-y-[7px]">
          {[
            { text: 'Written by', dimmed: false },
            { text: 'IcedApple', dimmed: false },
            { text: 'First Draft — December 2025', dimmed: true },
          ].map(({ text, dimmed }) => (
            <p
              key={text}
              className={`font-sans text-[10px] font-bold uppercase tracking-[0.24em] md:text-[11px] ${dimmed ? 'text-ink/60' : 'text-ink/90'}`}
            >
              {text}
            </p>
          ))}
        </motion.div>

        <motion.h1
          {...fade(0.4)}
          className="ink-press max-w-[760px] font-header text-[34px] uppercase leading-[0.98] tracking-[-0.015em] text-ink md:justify-self-end md:text-right md:text-5xl xl:text-[68px]"
        >
          A Map,
          <br />
          A Gun,
          <br />
          A Silent Night
        </motion.h1>
      </div>

      <Rule double />

      {/* 读者凡例 */}
      <motion.div
        {...fade(0.7)}
        className="mt-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 font-sans text-[9.5px] font-bold uppercase tracking-[0.18em] text-ink/85"
      >
        <span className="flex flex-wrap items-center gap-2">
          <MousePointer2 size={12} strokeWidth={2.4} className="shrink-0" />
          <span>Reader’s key — pointed terms open folio notes on hover</span>
        </span>
        <span>Fantasyland One Productions</span>
      </motion.div>

      {/* 跳转导航 —— 点击 ACT 展开其 scenes */}
      <motion.div {...fade(0.85)}>
        <JumpToNav />
      </motion.div>
    </header>
  );
}
