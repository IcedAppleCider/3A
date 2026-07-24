/* ————————————————————————————————————————
   稳健锚点滚动 (Robust Anchor Scrolling)
   · 解决 FOUT (Flash of Unstyled Text) 导致的累积偏移
   · 解决后续场景（Scene 4+）因上方内容高度变化导致的“跳不准”
   · 提供持续 2 秒的布局监测，确保精准对齐
———————————————————————————————————————— */

export type AnchorMode = 'top' | 'prev-bottom';

/** 与 App.tsx 中 fixed 页框的 inset 保持一致 */
const getTopInset = (): number => (window.innerWidth >= 768 ? 16 : 10);

/** 计算目标 Y 坐标 */
const computeTargetY = (id: string, mode: AnchorMode): number | null => {
  const el = document.getElementById(id);
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  const inset = getTopInset();
  const edge = mode === 'prev-bottom' ? rect.bottom : rect.top;
  return window.scrollY + edge - inset;
};

/**
 * 核心滚动函数：
 * 执行平滑滚动，并在接下来 2 秒内进行多次“微校正”，
 * 确保即使在字体加载、图片渲染过程中，目标位置也始终对齐。
 */
export async function scrollToAnchor(id: string, mode: AnchorMode): Promise<void> {
  // 1. 尽可能等待字体就绪
  if (typeof document !== 'undefined' && document.fonts) {
    try {
      await Promise.race([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);
    } catch {
      /* ignore */
    }
  }

  const performJump = (behavior: ScrollBehavior) => {
    const y = computeTargetY(id, mode);
    if (y !== null) {
      window.scrollTo({ top: y, behavior });
      return y;
    }
    return null;
  };

  // 2. 初始平滑滚动
  const initialY = performJump('smooth');
  if (initialY === null) return;

  // 3. 多阶段校正：分别在 100ms, 300ms, 600ms, 1200ms, 2000ms 检查并修正
  // 覆盖常见的字体交换(FOUT)和组件 motion 入场时间
  const checkPoints = [100, 300, 600, 1200, 2000];
  checkPoints.forEach((ms) => {
    setTimeout(() => {
      const currentY = computeTargetY(id, mode);
      if (currentY !== null && Math.abs(window.scrollY - currentY) > 1.5) {
        // 如果偏离超过 1.5px，执行一次静默校正 (behavior: auto)
        window.scrollTo({ top: currentY, behavior: 'auto' });
      }
    }, ms);
  });
}

/** 路由辅助逻辑 */
export function resolveAnchorMode(
  hash: string,
  acts: ReadonlyArray<{ id: string; scenes: ReadonlyArray<{ id: string; sceneNo: string }> }>
): { id: string; mode: AnchorMode } | null {
  if (!hash) return null;
  const targetId = hash.replace(/^#/, '');

  if (acts.some((a) => a.id === targetId)) {
    return { id: targetId, mode: 'top' };
  }

  for (const act of acts) {
    const sc = act.scenes.find((s) => s.id === targetId);
    if (sc) {
      return sc.sceneNo === '1'
        ? { id: act.id, mode: 'prev-bottom' }
        : { id: targetId, mode: 'top' };
    }
  }
  return null;
}
