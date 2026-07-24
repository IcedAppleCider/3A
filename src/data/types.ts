/* ————————————————————————————————————————
   SPECULUM READER · data contracts
   注释(annotation) 与拼贴图版(plate) 均以数据驱动，
   便于日后在留白处增删图片、为词语绑定解释/图版。
   结构：剧本 = Acts[] → 每个 Act 包含 Scenes[]
———————————————————————————————————————— */

export interface AnnotationDef {
  id: string;
  /** 目录式序号，上标显示在词后 */
  no: string;
  /** 卡片顶栏分类，如 "PRINTMAKING · TOOL" */
  kicker: string;
  /** 卡片标题词 */
  term: string;
  definition: string;
  /** 可选：注释卡内嵌图版 */
  image?: string;
  imageCaption?: string;
}

export interface Segment {
  t: string;
  /** 若存在则为可 hover 的注释词 */
  a?: string;
  /** 若为 true 则渲染为【】括号文字（下划线 + 选中态 hover） */
  b?: boolean;
  /** 对白中的行内动作，匹配独立 paren 行的样式 */
  p?: boolean;
  /** 若为 true 则渲染为带有呼吸动画背景的可导航地址 */
  n?: boolean;
}

export type LineType =
  | 'action'
  | 'name'
  | 'paren'
  | 'line'
  | 'trans'
  | 'note'
  | 'heading'
  | 'insert'
  | 'screen';

export interface ScriptLine {
  type: LineType;
  segments: Segment[];
}

export interface Scene {
  id: string;
  /** 场景编号 within act，如 "1" */
  sceneNo: string;
  /** 左列三行小字元信息（日期 / 时间 / 地点） */
  slug: [string, string, string];
  /** 右列大写粗场景标题 */
  title: string;
  lines: ScriptLine[];
}

export interface Act {
  id: string;
  /** 罗马数字幕编号 */
  actNo: string;
  /** 幕标题（全大写） */
  title: string;
  /** 本幕的场景列表 */
  scenes: Scene[];
}

export interface PlateItem {
  id: string;
  src: string;
  /** 图版号，罗马数字 */
  plate: string;
  caption: string;
  /** 基础倾斜角 */
  rotate: number;
  /** 视差强度 (px) */
  drift: number;
  /** 绝对定位 class（响应式），margin 拼贴用 */
  className: string;
}
