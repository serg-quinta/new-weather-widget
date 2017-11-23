import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { places$ } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Hot Weather Widget';

  public places$: Observable<Place[]>;
  public loadImg: string = 'assets/images/gears.gif';
  public filterText: string;

  public ngOnInit(): void {
    this.places$ = places$;
  }

  public onFilterChange(value: string): void {
    if (value === 'All') {
      this.filterText = '';
      return;
    }
    this.filterText = value;
  }

}
