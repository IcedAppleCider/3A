import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { AnnotationDef } from '../data/types';
import { cn } from '../utils/cn';

/* ————————————————————————————————————————
   注释词 · hover/tap 浮现"对开笔记"卡
   · 词本身：虚线下划 + 目录式上标序号
   · 卡片：米色纸 + 双线蓝框 + 可选图版 + 释义
   · 位置：自动测量并钳制在视口内，近页顶时下翻
———————————————————————————————————————— */

const CARD_W = 300;
const HALF = CARD_W / 2;

export function AnnotatedWord({ text, def }: { text: string; def: AnnotationDef }) {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [flip, setFlip] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const measure = () => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const clamped = Math.min(Math.max(cx, HALF + 14), window.innerWidth - HALF - 14);
    setOffset(clamped - cx);
    setFlip(r.top < 380 && window.innerHeight - r.bottom > 240);
  };

  const openNow = () => {
    if (timer.current) clearTimeout(timer.current);
    measure();
    setOpen(true);
  };
  const closeSoon = () => {
    timer.current = setTimeout(() => setOpen(false), 170);
  };

  return (
    <span ref={wrapRef} className="relative inline-block" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        aria-expanded={open}
        aria-label={`Folio note: ${def.term}`}
        onClick={() => (open ? setOpen(false) : openNow())}
        style={{
          textTransform: 'inherit',
          letterSpacing: 'inherit',
          fontWeight: 'inherit',
          fontStyle: 'inherit',
        }}
        className={cn(
          '-mx-[3px] cursor-help appearance-none rounded-[1px] px-[3px] pb-[1px]',
          'font-inherit text-inherit leading-inherit',
          'underline decoration-ink/60 decoration-dotted underline-offset-[5px]',
          'transition-colors duration-200',
          open
            ? 'bg-ink text-cream-2 decoration-transparent'
            : 'hover:bg-ink hover:text-cream-2 hover:decoration-transparent'
        )}
      >
        {text}
        <sup
          className={cn(
            'ml-[2px] font-sans text-[8px] font-bold leading-none tracking-wide',
            open ? 'text-cream-2/90' : 'text-ink/70'
          )}
        >
          {def.no}
        </sup>
      </button>

      <AnimatePresence>
        {open && (
          <span
            className={cn(
              'absolute left-1/2 z-[70] block text-left',
              flip ? 'top-full pt-2.5' : 'bottom-full pb-2.5'
            )}
            style={{ width: CARD_W, transform: `translateX(calc(-50% + ${offset}px))` }}
          >
            <motion.span
              initial={{ opacity: 0, y: flip ? -10 : 14, scale: 0.94, rotate: flip ? 1.2 : -1.6 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: flip ? -6 : 10, scale: 0.96, transition: { duration: 0.16 } }}
              transition={{ type: 'spring', stiffness: 380, damping: 26 }}
              className="relative block"
            >
              {/* 双线蓝框卡片 */}
              <span className="block border border-ink bg-cream-2 shadow-[8px_10px_0_rgba(30,45,130,0.14)]">
                <span className="m-[3px] block border border-ink/70 p-3.5">
                  {/* 顶栏 */}
                  <span className="mb-2.5 flex items-baseline justify-between gap-3 border-b border-ink/70 pb-1.5">
                    <span className="font-sans text-[9px] font-bold uppercase tracking-[0.26em] text-ink/80">
                      Folio Note
                    </span>
                    <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-ink">
                      N° {def.no}
                    </span>
                  </span>

                  {/* 图版（可选） */}
                  {def.image && (
                    <span className="mb-3 block">
                      <span className="block border border-ink/70 bg-cream p-[3px]">
                        <img src={def.image} alt={def.term} draggable={false} className="block w-full" />
                      </span>
                      {def.imageCaption && (
                        <span className="mt-1.5 block font-sans text-[8px] font-bold uppercase leading-relaxed tracking-[0.16em] text-ink/70">
                          {def.imageCaption}
                        </span>
                      )}
                    </span>
                  )}

                  {/* 释义 */}
                  <span className="block font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-ink">
                    {def.term}
                    <span className="ml-2 font-sans text-[8.5px] font-bold uppercase tracking-[0.2em] text-ink/60">
                      {def.kicker}
                    </span>
                  </span>
                  <span className="mt-1.5 block font-type text-[12.5px] leading-[1.6] text-ink/90">
                    {def.definition}
                  </span>
                </span>
              </span>

              {/* 指向菱形 */}
              <span
                className={cn(
                  'absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-ink bg-cream-2',
                  flip ? '-top-[1px] border-l border-t' : '-bottom-[1px] border-b border-r'
                )}
                style={{ marginLeft: -offset }}
              />
            </motion.span>
          </span>
        )}
      </AnimatePresence>
    </span>
  );
}
