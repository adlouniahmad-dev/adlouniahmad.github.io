import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'adl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({
      once: true
    });
  }

}
