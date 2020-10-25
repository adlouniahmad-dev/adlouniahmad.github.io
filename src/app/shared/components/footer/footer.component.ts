import { Component, OnInit } from '@angular/core';
import { ISocialNetwork } from 'src/app/shared/interfaces/social-network';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faLinkedinIn, faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'adl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  icons: any;
  socialNetworks: Array<ISocialNetwork> = [];

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.initializeIcons();
    this.socialNetworks = this.generalService.getSocialNetworks();
  }

  initializeIcons(): void {
    this.icons = {
      heart: faHeart,
      instagram: faInstagram,
      facebook: faFacebookF,
      linkedIn: faLinkedinIn,
      github: faGithub,
      bitbucket: faBitbucket
    }
  }

}
