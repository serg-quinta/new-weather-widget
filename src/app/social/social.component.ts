import { Component, Input, OnInit } from '@angular/core';
import { SelectedPlaceService } from '../common/services/selected-place.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input()
  public place: Place;

  public constructor(
    private _selectedPlaceService: SelectedPlaceService
  ) {}

  public ngOnInit(): void {
    this._selectedPlaceService.selectedPlace$$.subscribe({
      next: (place: Place) => {
        this.place = place;
      }
    });
  }
}
