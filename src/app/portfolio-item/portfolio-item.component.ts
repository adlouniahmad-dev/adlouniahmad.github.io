import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faExpand, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IPortfolioItem } from '../shared/interfaces/portfolio-item';
import { GeneralService } from '../shared/services/general.service';
import { EventService } from '@crystalui/angular-lightbox';

@Component({
  selector: 'adl-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  @ViewChild('galleryContainer') galleryContainer: ElementRef;

  expandIcon: IconDefinition = faExpand
  product: IPortfolioItem;

  constructor(private generalService: GeneralService, private route: ActivatedRoute, private router: Router, private lightboxService: EventService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.generalService.getPortfolioItemDetails(id);
    if (!this.product)
      this.router.navigate(['/']);
  }

  openGallery(): void {
    this.galleryContainer.nativeElement.children[0].click();
  }

}
