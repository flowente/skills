import type { CardProps } from "./Card";
/**
 * Centered section header + 3-column grid of resource Cards.
 * @startingPoint section="Website" subtitle="Resources section with 3 cards" viewport="1160x620"
 */
export interface CardGridProps {
  heading?: string;
  sub?: string;
  cards?: CardProps[];
}
export declare function CardGrid(props: CardGridProps): JSX.Element;
