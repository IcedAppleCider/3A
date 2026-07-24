import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion';

interface MouseParallaxValue {
  mx: MotionValue<number>;
  my: MotionValue<number>;
}

const Ctx = createContext<MouseParallaxValue | null>(null);

/** 全页鼠标归一化坐标 (-1 → 1)，经弹簧平滑后供图版视差消费 */
export function MouseParallaxProvider({ children }: { children: ReactNode }) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 42, damping: 18, mass: 0.9 });
  const my = useSpring(rawY, { stiffness: 42, damping: 18, mass: 0.9 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [rawX, rawY]);

  return <Ctx.Provider value={{ mx, my }}>{children}</Ctx.Provider>;
}

export function useMouseParallax(): MouseParallaxValue {
  const v = useContext(Ctx);
  if (!v) throw new Error('useMouseParallax must be used inside <MouseParallaxProvider>');
  return v;
}
