import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// import { places$ } from './data';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/fromEvent';
import { PlacesService } from './common/services/places.service';
import { SelectedPlaceService } from './common/services/selected-place.service';

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
  // public firstPlace: Place;
  public selectedPlace: Place;

  public constructor(
    private _placesService: PlacesService,
    private _selectedPlaceService: SelectedPlaceService
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

  // public chooseFirstPlace(place: Place): void {
  //   this.firstPlace = place;
  //   // tslint:disable-next-line
  //   console.log(this.firstPlace.weather.title);
  // }

  public selectPlace(place: Place): void {

    this.selectedPlace = place;

    // tslint:disable-next-line
    // console.log(this.selectedPlace);
  }

}
