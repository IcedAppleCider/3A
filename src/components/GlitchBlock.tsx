import { motion } from 'framer-motion';

/* ————————————————————————————————————————
   Glitch 区块 · 8-bit 终端弹窗
   条纹 CRT + 外围底色框
———————————————————————————————————————— */

export function GlitchBlock({ id }: { id: string }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="glitch-block relative my-8 flex justify-center px-4 md:my-10"
      aria-hidden
    >
      <div className="glitch-popup-wrap">
        <div className="glitch-popup-frame">
          <div className="glitch-popup">
            <div className="pixel-terminal">
              <div className="pixel-terminal__chrome">
                <span>WRIST_TERMINAL v2.5</span>
                <span className="pixel-terminal__btns" aria-hidden>
                  <i />
                  <i />
                </span>
              </div>

              <div className="pixel-terminal__screen">
                <p className="pixel-terminal__line">
                  <span className="pixel-terminal__arrow">&gt;</span>
                  <span>FATAL ERROR 0x0000001E - SYSTEM HALTED</span>
                </p>
                <p className="pixel-terminal__prompt">
                  <span className="pixel-terminal__arrow">▶</span>
                  <span className="pixel-terminal__cursor" />
                </p>
              </div>
            </div>

            <div className="glitch-scanlines pointer-events-none absolute inset-0" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
