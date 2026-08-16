import type { CSSProperties } from "react";
/** Flowente lockup: Flow Blue knot mark + lowercase "flowente" wordmark in Space Grotesk. Size via font-size. */
export interface LogoProps {
  className?: string;
  style?: CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
/** The knot mark alone ("Il Nodo che si scioglie"), filled with --accent. */
export interface LogoMarkProps {
  className?: string;
  style?: CSSProperties;
}
export declare function LogoMark(props: LogoMarkProps): JSX.Element;
