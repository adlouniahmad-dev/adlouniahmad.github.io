import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import AOS from 'aos';

@Component({
  selector: 'adl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit(): void {
    AOS.init({
      once: true
    });

    this.swUpdate.available.subscribe(e => {
      window.location.reload()
    });
  }

}
