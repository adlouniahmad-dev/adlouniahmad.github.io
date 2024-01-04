import { Component } from '@angular/core';

@Component({
  selector: 'adl-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  links = [
    { name: 'about me', href: '#about' },
    { name: 'portfolio', href: '#portfolio' },
    { name: 'contact me', href: '#contact' }
  ];

}
