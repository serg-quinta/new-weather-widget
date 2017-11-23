import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { PlaceFilterPipe } from './common/pipes/place-filter.pipe';
import { PhonePipe } from './common/pipes/phone.pipe';
import { StickyDirective } from './common/directives/sticky.directive';
import { NavComponent } from './common/components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialComponent,
    PlaceFilterPipe,
    PhonePipe,
    StickyDirective,
    NavComponent
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
