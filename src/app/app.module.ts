import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './home/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './home/about/about.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductItemComponent } from './home/portfolio/product-item/product-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    FooterComponent,
    ProductItemComponent,
    PortfolioItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [SwUpdate],
  bootstrap: [AppComponent]
})
export class AppModule { }
