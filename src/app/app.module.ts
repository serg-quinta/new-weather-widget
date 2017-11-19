import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { ProductsFilterPipe } from './common/pipes/products-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WeatherComponent,
    SocialComponent,
    ProductsFilterPipe
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
