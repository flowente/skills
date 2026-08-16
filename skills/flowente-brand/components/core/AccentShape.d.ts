import type { CSSProperties } from "react";
export type ShapeKind = "square" | "circle" | "triangle" | "blob";
/** Solid accent-colored shape (Flow Blue) with hand-drawn wobbly edges. Requires <SvgFilters />. */
export interface AccentShapeProps {
  /** "square" | "circle" | "triangle" | "blob" (default "square") */
  kind?: ShapeKind;
  /** Pencil filter id, default "flowente-p2" */
  filter?: string;
  className?: string;
  style?: CSSProperties;
}
export declare function AccentShape(props: AccentShapeProps): JSX.Element;
