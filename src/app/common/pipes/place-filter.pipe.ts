import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeFilter'
})
export class PlaceFilterPipe implements PipeTransform {

  public transform(places: Place[], searchTerm: string): Place[] {
    if (!searchTerm) {
      return places;
    }
    return places
    .filter((place: Place) =>
      `${place.type}`.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
