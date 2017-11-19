import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(places: Place[], searchTerm: string): Place[] {
    if (!searchTerm) {
      return places;
    }
    return places
    .filter((place: Place) =>
      `${place.type}`.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
