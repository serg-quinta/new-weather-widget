import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { delay } from 'rxjs/operators';

type Response = {
  data: Place[]
};

@Injectable()
export class PlacesService {

  public constructor (
    private _http: HttpClient
  ) { }

  public get places$(): Observable<Place[]> {
    return this._http.get<Response>(`https://raw.githubusercontent.com/serg-quinta/dump/master/places.json`)
    .map((res: Response) => res.data)
    .pipe(delay(2000));
  }

}
