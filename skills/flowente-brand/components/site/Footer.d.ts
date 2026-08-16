/**
 * Site footer: logo + tagline, mono-headed link columns, hairline legal row in mono caps.
 * @startingPoint section="Website" subtitle="Footer with link columns" viewport="1160x340"
 */
export interface FooterProps {
  cols?: { h: string; links: string[] }[];
  tagline?: string;
  legal?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
