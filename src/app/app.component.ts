import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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

  constructor() { }

  public ngOnInit(): void {
    this.places$ = places$;
  }

  public buttonClick(): void {
    alert('Works!');
  }
}
