import type { ReactNode } from "react";
/**
 * Homepage hero: display headline + lede + two CTAs, dot-grid panel with the coil MarkBadge.
 * @startingPoint section="Website" subtitle="Split hero with dot-grid mark panel" viewport="1160x560"
 */
export interface HeroProps {
  title?: ReactNode;
  text?: string;
  primaryCta?: string;
  ghostCta?: string;
}
export declare function Hero(props: HeroProps): JSX.Element;
