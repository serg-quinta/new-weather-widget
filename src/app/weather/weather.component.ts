import { Component, Input, OnInit } from '@angular/core';
import { SelectedPlaceService } from '../common/services/selected-place.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  public place: Place;

  public constructor(
    private _selectedPlaceService: SelectedPlaceService
  ) { }

  public ngOnInit(): void {
    this._selectedPlaceService.selectedPlace$$.subscribe({
      next: (place: Place) => {
        this.place = place;
      }
    });
  }
}
