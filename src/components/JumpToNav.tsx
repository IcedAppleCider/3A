import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ACTS } from '../data/screenplay';
import { cn } from '../utils/cn';
import { scrollToAnchor } from '../utils/scroll';

/* ————————————————————————————————————————
   跳转导航 · 点击 ACT 展开其 scenes 列表，
   点击 scene 才真正跳转（ACT 本身不跳转）
———————————————————————————————————————— */

export function JumpToNav() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <nav
      aria-label="Jump to scene"
      className="mt-6 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-ink/75"
    >
      <div className="flex flex-wrap items-start gap-2">
        <span className="mr-1 mt-[7px] text-ink">Jump to —</span>

        {ACTS.map((act) => {
          const isOpen = openId === act.id;
          return (
            <div key={act.id} className="relative">
              {/* ACT 按钮：点击展开，不跳转 */}
              <button
                type="button"
                onClick={() => toggle(act.id)}
                aria-expanded={isOpen}
                className={cn(
                  'group inline-flex items-center gap-2 border border-ink/60 px-3 py-[5px] transition-all',
                  isOpen
                    ? 'bg-ink text-cream-2 border-ink'
                    : 'hover:bg-ink hover:text-cream-2 hover:border-ink'
                )}
              >
                <span className="font-bold tracking-[0.06em]">{act.actNo}</span>
                <span className="tracking-[0.04em] opacity-90 group-hover:opacity-100">{act.title}</span>
                <ChevronDown
                  size={11}
                  strokeWidth={2.6}
                  className={cn('transition-transform duration-300', isOpen && 'rotate-180')}
                />
              </button>

              {/* 展开的 scenes 列表 */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -6, height: 0, transition: { duration: 0.18 } }}
                    transition={{ type: 'spring', stiffness: 360, damping: 26 }}
                    className="absolute left-0 right-0 top-full z-30 min-w-[220px] overflow-hidden pt-1.5"
                  >
                    <div className="border border-ink bg-cream-2 p-[3px] shadow-[6px_7px_0_rgba(30,45,130,0.14)]">
                      <ul>
                        {act.scenes.map((sc) => (
                          <li key={sc.id}>
                            <a
                              href={`#${sc.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenId(null);
                                // 首场景对齐 ACT 底部分栏线，其余对齐 scene 顶
                                scrollToAnchor(
                                  sc.sceneNo === '1' ? act.id : sc.id,
                                  sc.sceneNo === '1' ? 'prev-bottom' : 'top'
                                );
                              }}
                              className="flex items-baseline justify-between gap-3 px-3 py-2 text-ink transition-colors hover:bg-ink hover:text-cream-2"
                            >
                              <span className="flex items-baseline gap-2">
                                <span className="font-bold tracking-[0.06em] opacity-70">
                                  Sc. {sc.sceneNo}
                                </span>
                                <span className="tracking-[0.04em]">{sc.title}</span>
                              </span>
                              <span className="font-sans text-[8.5px] tracking-[0.16em] opacity-55">
                                {sc.slug[1]}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
