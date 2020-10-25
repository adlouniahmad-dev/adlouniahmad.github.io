import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { IInfo } from 'src/app/shared/interfaces/info';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'adl-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  icons: any;
  info: IInfo;

  constructor(private generalService: GeneralService) { 
    this.info = generalService.getBasicInfo();
  }

  ngOnInit(): void {
    this.initializeIcons();
  }

  initializeIcons(): void {
    this.icons = {
      instagram: faInstagram,
      facebook: faFacebookF,
      linkedIn: faLinkedinIn
    };
  }

}
