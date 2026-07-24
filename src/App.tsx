import { useEffect } from 'react';
import { MouseParallaxProvider } from './components/MouseParallax';
import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';
import { ActHeading } from './components/ActHeading';
import { SceneDivider } from './components/SceneDivider';
import { ScriptLine } from './components/ScriptLine';
import { Plate } from './components/Plate';
import { FolioIndicator } from './components/FolioIndicator';
import { BackToMapMark } from './components/BackToMapMark';
import { GlitchBlock } from './components/GlitchBlock';
import { ACTS } from './data/screenplay';
import { bottomPlates, scenePlates } from './data/collage';
import { GLITCH_AFTER_SCENE } from './data/glitches';
import { resolveAnchorMode, scrollToAnchor } from './utils/scroll';
import type { PlateItem } from './data/types';

/* 纸张颗粒 */
const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.6'/></svg>";

/** 小屏回退：页缘拼贴改为内联小图版 */
function InlinePlate({ item }: { item: PlateItem }) {
  return (
    <figure className="w-40 select-none">
      <span className="block border border-ink/80 bg-cream-2 p-[3px] shadow-[5px_6px_0_rgba(30,45,130,0.12)]">
        <img src={item.src} alt={item.caption} draggable={false} loading="lazy" className="block w-full" />
      </span>
      <figcaption className="mt-2 font-sans text-[8px] font-bold uppercase leading-[1.7] tracking-[0.14em] text-ink/75">
        Pl. {item.plate} — {item.caption}
      </figcaption>
    </figure>
  );
}

/* 页框四角裁切标记 */
function CornerTicks() {
  return (
    <>
      <span className="absolute -top-[1px] -left-[1px] block h-[10px] w-[10px] border-t-2 border-l-2 border-ink" />
      <span className="absolute -top-[1px] -right-[1px] block h-[10px] w-[10px] border-t-2 border-r-2 border-ink" />
      <span className="absolute -bottom-[1px] -left-[1px] block h-[10px] w-[10px] border-b-2 border-l-2 border-ink" />
      <span className="absolute -bottom-[1px] -right-[1px] block h-[10px] w-[10px] border-b-2 border-r-2 border-ink" />
    </>
  );
}

/* 整页统一排版容器：拼贴和正文都锁在这条带 */
const CONTENT_WIDTH = 'max-w-[1180px]';

export default function App() {
  /* 首次加载（或粘贴带 hash 的链接、浏览器前进/后退）时，
     走与 JumpToNav 同一条稳健路径：等字体就绪再对齐，
     避免 FOUT 造成的“标题偏下”现象。 */
  useEffect(() => {
    const handle = (hash: string) => {
      const resolved = resolveAnchorMode(hash, ACTS);
      if (resolved) scrollToAnchor(resolved.id, resolved.mode);
    };

    // 延迟 50ms 启动，避开浏览器初次渲染的最混乱瞬间
    if (window.location.hash) {
      setTimeout(() => handle(window.location.hash), 50);
    }

    const onHashChange = () => handle(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <MouseParallaxProvider>
      <div className="relative min-h-screen overflow-x-clip bg-cream font-type text-ink antialiased">
        {/* 纸面颗粒 */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[35] opacity-[0.05] mix-blend-multiply"
          style={{ backgroundImage: `url("${GRAIN}")` }}
        />

        {/* 图版压印式页框 */}
        <div aria-hidden className="pointer-events-none fixed inset-2.5 z-40 border border-ink/45 md:inset-4">
          <CornerTicks />
        </div>

        <main className="relative z-10">
          <PageHeader />

          {ACTS.map((act, actIndex) => (
            <section key={act.id} className="relative">
              <div className={`mx-auto w-full ${CONTENT_WIDTH} px-4 md:px-6`}>
                <ActHeading act={act} index={actIndex} />

                {act.scenes.map((scene, sceneIndex) => {
                  const plates = scenePlates[scene.id] ?? [];
                  const isLast = sceneIndex === act.scenes.length - 1;
                  const glitchId = GLITCH_AFTER_SCENE[scene.id];
                  return (
                    <div key={scene.id}>
                      <div
                        id={scene.id}
                        data-act-index={actIndex}
                        className={
                          isLast
                            ? 'relative scroll-mt-6'
                            : glitchId
                              ? 'relative scroll-mt-6 pb-10 md:pb-12'
                              : 'relative scroll-mt-6 pb-28 md:pb-36'
                        }
                      >
                        {/* 页缘留白 · 拼贴图版层（大屏），锚定到该 scene，绝对在两侧 */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-full hidden lg:block">
                          {plates.map((p) => (
                            <Plate key={p.id} item={p} className={p.className} />
                          ))}
                        </div>

                        <SceneDivider scene={scene} actNo={act.actNo} />

                        {/* 剧本文本栏。中央 560px，左右各留 ≈300px 给图版 */}
                        <div className="relative z-[2] mx-auto max-w-[560px] px-8 pt-8 md:pt-10 lg:px-11">
                          {scene.lines.map((line, j) => (
                            <ScriptLine key={j} line={line} index={j} />
                          ))}
                        </div>

                        {/* 小屏 · 内联图版 */}
                        {plates.length > 0 && (
                          <div className="mx-auto flex max-w-[560px] flex-wrap gap-6 px-8 pb-4 pt-6 lg:hidden">
                            {plates.map((p) => (
                              <InlinePlate key={p.id} item={p} />
                            ))}
                          </div>
                        )}
                      </div>

                      {glitchId && <GlitchBlock id={glitchId} />}
                    </div>
                  );
                })}

                {/* 幕结尾 · 返回地图（占位） */}
                <div className="mx-auto max-w-[560px] px-8 pb-6 pt-10 lg:px-11">
                  <BackToMapMark />
                </div>
              </div>
            </section>
          ))}

          {/* 卷末大留白 */}
          <section className="relative mx-auto h-[46vh] min-h-[440px] w-full max-w-[1180px] md:h-[54vh] md:min-h-[540px] px-4 md:px-6">
            {bottomPlates.map((p) => (
              <Plate key={p.id} item={p} className={p.className} />
            ))}
          </section>

          <PageFooter />
        </main>

        <FolioIndicator />
      </div>
    </MouseParallaxProvider>
  );
}
