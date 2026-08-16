import type { Mark, MarkName } from "../core/FlowMark";
import type { ShapeKind } from "../core/AccentShape";
/**
 * Content/resource card: MarkBadge thumbnail, display title, mono meta line, mono uppercase tag with accent dot.
 * @startingPoint section="Website" subtitle="Resource card with mark thumbnail" viewport="380x330"
 */
export interface CardProps {
  title: string;
  /** Mono meta, e.g. "Case study · 4 min" */
  meta: string;
  /** Uppercase tag, e.g. "Advisory" */
  tag: string;
  mark: MarkName | Mark;
  shape?: ShapeKind;
  href?: string;
}
export declare function Card(props: CardProps): JSX.Element;
