import type { Mark, MarkName } from "./FlowMark";
import type { ShapeKind } from "./AccentShape";
/**
 * Signature brand composition: accent shape behind + Flow Mark overflowing the shape.
 * @startingPoint section="Brand" subtitle="Shape + mark signature composition" viewport="700x260"
 */
export interface MarkBadgeProps {
  /** Mark name or Mark object */
  mark: MarkName | Mark;
  shape?: ShapeKind;
  /** Bounding box width px */
  boxW: number;
  /** Bounding box height px */
  boxH: number;
  /** Accent shape size px (square) */
  shapeSize: number;
  /** Mark width px (should overflow the shape) */
  markW: number;
  /** Mark height px */
  markH: number;
  /** Shape rotation deg, default -4 */
  rotate?: number;
  filter?: string;
  animated?: boolean;
}
export declare function MarkBadge(props: MarkBadgeProps): JSX.Element;
