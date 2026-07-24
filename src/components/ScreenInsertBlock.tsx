import { motion } from 'framer-motion';

/**
 * ScreenInsertBlock - retro terminal style screen insert
 * Replaces GlitchBlock with a cleaner terminal display
 */
export function ScreenInsertBlock({ id }: { id: string }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="my-10 mx-auto flex justify-center px-4"
      aria-hidden
    >
      <div className="w-full max-w-lg">
        {/* Label */}
        <div className="font-mono text-[10px] mb-1 opacity-60 tracking-widest uppercase text-center">
          INSERT — 终端屏幕
        </div>

        {/* Terminal frame */}
        <div className="border-4 border-ink bg-cream text-[#0000ff] p-1">
          <div className="border-2 border-[#0000ff] p-4">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b-2 border-[#0000ff] pb-2 mb-3 font-mono text-[9px]">
              <span>WRIST_TERMINAL v2.5</span>
              <span className="flex gap-1">
                <span className="inline-block w-2 h-2 bg-[#0000ff]" />
                <span className="inline-block w-2 h-2 border border-[#0000ff]" />
              </span>
            </div>

            {/* Content lines */}
            <div className="font-mono text-2xl leading-relaxed space-y-1">
              <p>
                <span className="opacity-50 mr-2">&gt;</span>
                爬虫"Lestappen"激活
              </p>
              <p>
                <span className="opacity-50 mr-2">&gt;</span>
                目标A (M.V) 与 目标B (C.L)
              </p>
              <p>
                <span className="opacity-50 mr-2">&gt;</span>
                状态：坐标重合度超过97%，持续超过30秒。
              </p>
            </div>

            {/* Prompt */}
            <div className="mt-4 font-mono text-[10px] flex items-center gap-2">
              <span className="animate-pulse">▶</span>
              <span>是否启动音频监听？ [Y/N]</span>
              <span className="inline-block w-2 h-4 bg-[#0000ff] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
