import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// import { places$ } from './data';
import { PlacesService } from './common/services/places.service';

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
  public firstPlace: Place;
  public selectedPlace: Place;

  public constructor(
    private _placesService: PlacesService
  ) {

  }

  public ngOnInit(): void {
    this.places$ = this._placesService.places$;
  }

  public onFilterChange(value: string): void {
    if (value === 'All') {
      this.filterText = '';
      return;
    }
    this.filterText = value;
  }

  public chooseFirst(place: Place): void {
    this.firstPlace = place;
    // console.log(this.firstPlace.weather.title);
  }

  public selectPlace(place: Place): void {
    this.selectedPlace = place;
    // console.log(this.selectedPlace.weather.title);
  }

}
