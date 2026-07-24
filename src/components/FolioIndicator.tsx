import { useEffect, useState } from 'react';
import { BookOpenText } from 'lucide-react';
import { cn } from '../utils/cn';
import { ACTS } from '../data/screenplay';

const LABELS = ['Cover'];

export function FolioIndicator() {
  const [actIdx, setActIdx] = useState(-1);
  const [sceneIdx, setSceneIdx] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Find the last scene that is above the trigger line
        const sceneEls = Array.from(document.querySelectorAll<HTMLElement>('[data-act-index]'));
        const line = window.innerHeight * 0.45;
        
        let currentActIdx = -1;
        let currentSceneId = '';
        
        sceneEls.forEach((el) => {
          if (el.getBoundingClientRect().top < line) {
            currentActIdx = Number(el.getAttribute('data-act-index'));
            currentSceneId = el.id;
          }
        });
        
        setActIdx(currentActIdx);
        
        if (currentActIdx >= 0 && ACTS[currentActIdx]) {
          const sIdx = ACTS[currentActIdx].scenes.findIndex((sc) => sc.id === currentSceneId);
          setSceneIdx(Math.max(0, sIdx));
        } else {
          setSceneIdx(0);
        }
      });
    };
    
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const curAct = actIdx >= 0 ? ACTS[actIdx] : null;
  const label = curAct
    ? `${curAct.actNo} · ${curAct.title.toUpperCase()}`
    : LABELS[0];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 border border-ink bg-cream-2/95 px-3 py-2 shadow-[4px_5px_0_rgba(30,45,130,0.12)] backdrop-blur-[1px] md:bottom-6 md:right-7">
      <BookOpenText size={13} strokeWidth={2.2} className="text-ink" />
      <span className="font-sans text-[9.5px] font-bold uppercase tracking-[0.2em] text-ink">
        {label}
        {curAct && curAct.scenes.length > 1 && (
          <span className="ml-1.5 text-ink/60">· Sc. {sceneIdx + 1}</span>
        )}
      </span>
      <span className="ml-1 flex items-center gap-1" aria-hidden>
        {ACTS.map((_, i) => (
          <span
            key={i}
            className={cn(
              'block h-[6px] w-[6px] border border-ink transition-colors duration-300',
              i <= actIdx ? 'bg-ink' : 'bg-transparent'
            )}
          />
        ))}
      </span>
    </div>
  );
}
