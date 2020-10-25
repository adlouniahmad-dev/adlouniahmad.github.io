import { IPortfolioItemDetails } from './portfolio-item-details';

export interface IPortfolioItem {
    id: string,
    name: string,
    tags: string,
    link?: string,
    languages: string,
    featuredImage: string,
    details: IPortfolioItemDetails
}