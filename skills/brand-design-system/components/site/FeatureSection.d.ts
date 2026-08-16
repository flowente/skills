import type { ReactNode } from "react";
import type { Mark, MarkName } from "../core/FlowMark";
import type { ShapeKind } from "../core/AccentShape";
/**
 * Two-column feature band: display title, short text, ghost CTA, surface-2 panel with MarkBadge.
 * @startingPoint section="Website" subtitle="Alternating feature band with mark panel" viewport="1160x450"
 */
export interface FeatureSectionProps {
  title: ReactNode;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
  mark: MarkName | Mark;
  shape?: ShapeKind;
  /** Flip columns (panel left) */
  reverse?: boolean;
}
export declare function FeatureSection(props: FeatureSectionProps): JSX.Element;
