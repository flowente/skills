import type { CSSProperties, ReactNode } from "react";
export type Mark = { viewBox: string; draw: (filter: string) => ReactNode };
export type MarkName = "coil" | "onde" | "flusso" | "onda" | "freccia";
export declare const Marks: Record<MarkName, Mark>;
/** Animated hand-drawn gestural stroke ("boiling", 3 frames). Requires <SvgFilters /> on the page. Size it via style. */
export interface FlowMarkProps {
  /** Mark name ("coil" | "onde" | "flusso" | "onda" | "freccia") or a Mark object */
  mark?: MarkName | Mark;
  /** Boiling animation on (default true) */
  animated?: boolean;
  className?: string;
  style?: CSSProperties;
}
export declare function FlowMark(props: FlowMarkProps): JSX.Element;
