import type { ReactNode } from "react";
/**
 * Flowente button — primary (ink fill) or ghost (hairline border). Color is never used on buttons.
 * @startingPoint section="Core" subtitle="Ink primary / hairline ghost, micro-zoom hover" viewport="700x150"
 */
export interface ButtonProps {
  children: ReactNode;
  /** Renders an <a> when set */
  href?: string;
  /** "primary" (ink fill) | "ghost" (hairline). Default "primary" */
  variant?: "primary" | "ghost";
  /** "md" | "lg". Default "md" */
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
}
export declare function Button(props: ButtonProps): JSX.Element;
