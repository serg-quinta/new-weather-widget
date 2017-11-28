import {
  Directive,
  EventEmitter,
  Input,
  OnInit,
  // Output
} from '@angular/core';
import { SelectedPlaceService } from '../services/selected-place.service';

@Directive({
  selector: '[appInit]'
})
export class InitDirective implements OnInit {

  @Input()
  public place: Place;

  @Input()
  public first: boolean;

  // @Output()
  // public chooseFirstDirective: EventEmitter<Place> = new EventEmitter();

  public constructor(
    private _selectedPlaceService: SelectedPlaceService
  ) {

  }
  public ngOnInit(): void {
    this.first
      ? this._selectedPlaceService.selectedPlace$$.next(this.place)
      : null;
  }

}
