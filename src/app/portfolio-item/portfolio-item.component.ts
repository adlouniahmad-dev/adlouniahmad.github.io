import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IPortfolioItem } from '../shared/interfaces/portfolio-item';
import { GeneralService } from '../shared/services/general.service';

@Component({
  selector: 'adl-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  backBtn: IconDefinition = faChevronLeft;
  product: IPortfolioItem;

  constructor(private generalService: GeneralService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.generalService.getPortfolioItemDetails(id);
    if (!this.product)
      this.router.navigate(['/']);
  }

}
