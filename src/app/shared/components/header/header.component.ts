import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'adl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  icons: any;

  ngOnInit(): void {
    this.initializeIcons();

    $('#nav-toggle-btn').on('click', () => {
      $('#nav-menu').toggleClass('show');
    });

    $('#nav-close-btn').on('click', () => {
      $('#nav-menu').removeClass('show');
    })
  }

  initializeIcons(): void {
    this.icons = {
      hamburger: faBars,
      times: faTimes
    }
  }

  closeMenu(): void {
    $('#nav-menu').removeClass('show');
  }

}
