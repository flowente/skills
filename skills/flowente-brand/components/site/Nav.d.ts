/**
 * Sticky site header: translucent blurred bg, logo, center links, ghost Login + primary CTA.
 * @startingPoint section="Website" subtitle="Sticky translucent header" viewport="1160x66"
 */
export interface NavProps {
  /** Center nav labels. Default ["Studio","Advisory","Lavori","Blog"] */
  links?: string[];
  /** Primary CTA label. Default "Parliamone" */
  cta?: string;
}
export declare function Nav(props: NavProps): JSX.Element;
