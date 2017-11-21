import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ParsedNumber } from 'libphonenumber-js';

import { places$ } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hot Weather Widget';

  public places$: Observable<Place[]>;
  public loadImg = '../assets/images/gears.gif';
  public filterText: string;

  constructor() { }

  public ngOnInit(): void {
    this.places$ = places$;
  }

  public buttonClick(value: string): void {
    if (value === 'All') {
      this.filterText = '';
    } else {
      this.filterText = value;
    }
  }
}
