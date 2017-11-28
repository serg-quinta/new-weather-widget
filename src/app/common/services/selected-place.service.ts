import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SelectedPlaceService {

  public selectedPlace$$: Subject<Place> = new Subject();

}
