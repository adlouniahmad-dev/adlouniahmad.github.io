import { IPortfolioItem } from './portfolio-item';
import { IPortfolioItemLink } from './portfolio-item-link';

export interface IPortfolioItemDetails {
    description: Array<string>;
    techDescription: Array<string>;
    tags: Array<string>;
    screenshots?: Array<string>;
    links?: Array<IPortfolioItemLink>;
}