import { cn } from '../utils/cn';

/* ————————————————————————————————————————
   括号文字 · 【】内容渲染
   高亮几何：与 AnnotatedWord 对齐，增加行高以匹配选中态高度
———————————————————————————————————————— */

export function BracketText({ children }: { children: string }) {
  return (
    <span
      className={cn(
        '-mx-[3px] cursor-pointer rounded-[1px] px-[3px] py-[2px]',
        'underline decoration-ink/80 decoration-solid underline-offset-[5px]',
        'transition-colors duration-150',
        'hover:bg-ink hover:text-cream-2 hover:decoration-transparent'
      )}
    >
      {children}
    </span>
  );
}
