import { Injectable } from '@angular/core';
import { IPortfolioItem } from 'src/app/shared/interfaces/portfolio-item';
import { ICategory } from 'src/app/shared/interfaces/category';
import data from './info.json';
import { ISocialNetwork } from 'src/app/shared/interfaces/social-network';
import { IInfo } from 'src/app/shared/interfaces/info';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  getBasicInfo(): IInfo {
    return data.info as IInfo;
  }

  getCategories(): Array<ICategory> {
    return data.categories as Array<ICategory>;
  }

  getPortfolioItems(): Array<IPortfolioItem> {
    return data.portfolio as Array<IPortfolioItem>;
  }

  getPortfolioItemDetails(id: string): IPortfolioItem {
    return (data.portfolio as Array<IPortfolioItem>).find((item: any) => item.id === id);
  }

  getContactDetails() {
    return data.contact;
  }

  getSocialNetworks(): Array<ISocialNetwork> {
    return data.social;
  }

}
