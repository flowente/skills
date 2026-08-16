/**
 * Testimonial row: N columns divided by hairlines — display name, quoted text, mono attribution. Text only, no photos.
 * @startingPoint section="Website" subtitle="Hairline-divided testimonial row" viewport="1160x300"
 */
export interface QuoteRowProps {
  quotes?: { name: string; text: string; who: string }[];
}
export declare function QuoteRow(props: QuoteRowProps): JSX.Element;
