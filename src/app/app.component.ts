import { Component, Inject, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import AOS from 'aos';

@Component({
  selector: 'adl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(@Inject('swUpdate') private swUpdate: SwUpdate) {}

  ngOnInit(): void {
    AOS.init({
      once: true
    });

    this.swUpdate.versionUpdates.subscribe(() => window.location.reload());
  }

}
