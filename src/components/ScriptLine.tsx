import { motion } from 'framer-motion';
import type { LineType, ScriptLine as ScriptLineData } from '../data/types';
import { getAnnotation } from '../data/annotations';
import { AnnotatedWord } from './AnnotatedWord';
import { BracketText } from './BracketText';
import { cn } from '../utils/cn';

/* 经典剧本排印 */
const LINE_STYLES: Record<Exclude<LineType, 'screen'>, string> = {
  action: 'mt-6',
  heading: 'mt-8 font-bold uppercase tracking-[0.06em] text-[13.5px] md:text-[14px]',
  insert: 'mt-8 font-bold uppercase tracking-[0.06em] text-[13.5px] md:text-[14px]',
  name: 'mt-9 pl-[38%] font-bold uppercase tracking-[0.14em]',
  paren: 'pl-[29%] paren-oblique text-ink/75',
  line: 'mt-0.5 pl-[18%] pr-[10%]',
  trans: 'mt-9 text-right font-bold uppercase tracking-[0.12em]',
  note: 'mt-9 text-center font-sans text-[11px] font-bold uppercase tracking-[0.34em] text-ink/85',
};

function renderSegments(segments: ScriptLineData['segments']) {
  return segments.map((seg, i) => {
    if (seg.b) return <BracketText key={i}>{seg.t}</BracketText>;

    /* 可导航地址：呼吸背景 + 雷达点，无圆角 */
    if (seg.n) {
      return (
        <span
          key={i}
          style={{ animation: 'pulse 2.5s ease-in-out infinite' }}
          className="group relative inline-flex items-center gap-1.5 px-[4px] py-[1.5px] align-baseline font-bold tracking-wider bg-ink/[0.03] hover:bg-ink hover:text-cream-2 transition-colors"
        >
          <span className="w-[4.5px] h-[4.5px] rounded-full bg-ink group-hover:bg-cream-2 shrink-0 transition-colors" />
          <span className="text-ink group-hover:text-cream-2 transition-colors">{seg.t}</span>
        </span>
      );
    }

    /* 行内动作括注 */
    if (seg.p) {
      return (
        <span key={i} className="paren-oblique text-ink/75">
          {seg.t}
        </span>
      );
    }

    if (!seg.a) return <span key={i}>{seg.t}</span>;
    const def = getAnnotation(seg.a);
    if (!def) return <span key={i}>{seg.t}</span>;
    return <AnnotatedWord key={i} text={seg.t} def={def} />;
  });
}

export function ScriptLine({ line, index }: { line: ScriptLineData; index: number }) {
  /* screen 类型：蓝框，对白级缩进，左对齐，等距上下 padding */
  if (line.type === 'screen') {
    return (
      <motion.div
        className="mt-3 pl-[18%] pr-[10%]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, delay: Math.min(index * 0.05, 0.45), ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="border border-ink/80 p-[3px]">
          <div className="flex min-h-[3.5rem] items-center px-4 py-4 md:min-h-[4.5rem]">
            <p className="whitespace-pre-line font-type text-[14.5px] leading-[1.85] text-ink/95 md:text-[15px]">
              {renderSegments(line.segments)}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.p
      className={cn('font-type text-[14.5px] leading-[1.95] text-ink/95 md:text-[15px]', LINE_STYLES[line.type])}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.05, 0.45), ease: [0.22, 1, 0.36, 1] }}
    >
      {renderSegments(line.segments)}
    </motion.p>
  );
}
