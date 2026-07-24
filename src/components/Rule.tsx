import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface RuleProps {
  double?: boolean;
  className?: string;
  delay?: number;
}

/** 参考图式蓝色分栏线 —— 进入视口时自左向右"印刷"出来 */
export function Rule({ double, className, delay = 0 }: RuleProps) {
  const line = (extra: number, key: string) => (
    <motion.div
      key={key}
      className="h-px w-full origin-left bg-ink"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 1.15, delay: delay + extra, ease: [0.22, 1, 0.36, 1] }}
    />
  );

  return (
    <div className={cn('w-full', className)}>
      {line(0, 'a')}
      {double && <div className="mt-[3px]">{line(0.14, 'b')}</div>}
    </div>
  );
}
