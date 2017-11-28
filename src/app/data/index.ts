import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';

const places: Place[] = [
  {
    'title': 'Road',
    'img': 'assets/places/road.jpg',
    'address': '123 6th St. Melbourne, FL 32904',
    'phone': {
      'phone': '505412662',
      'country': 'UA'
    },
    'weather': {
      'title': 'Weather on Road',
      'icon': 'assets/weather/cloudy.svg',
      'water': 18,
      'temperature': 20
    },
    'social_info': {
      'title': 'Social Road',
      'img': 'assets/places/road.jpg',
      'followers': 111,
      'following': 155
    },
    'type': 'tours'
  },
  {
    'title': 'Lake',
    'img': 'assets/places/lake.jpg',
    'address': '71 Pilgrim Avenue Chevy Chase, MD 20815',
    'phone': {
      'phone': '2515469442',
      'country': 'US'
    },
    'weather': {
      'title': 'Weather on Lake',
      'icon': 'assets/weather/sunny.svg',
      'water': 20,
      'temperature': 28
    },
    'social_info': {
      'title': 'Socila Lake',
      'img': 'assets/places/lake.jpg',
      'followers': 10,
      'following': 15
    },
    'type': 'fishing'
  },
  {
    'title': 'Vineyards',
    'img': 'assets/places/vineyards.jpg',
    'address': '71 Pilgrim Avenue Chevy Chase, MD 20815',
    'phone': {
      'phone': '2515469442',
      'country': 'DE'
    },
    'weather': {
      'title': 'Weather on Vineyards',
      'icon': 'assets/weather/rainy.svg',
      'water': 15,
      'temperature': 10
    },
    'social_info': {
      'title': 'Social Vineyards',
      'img': 'assets/places/vineyards.jpg',
      'followers': 222,
      'following': 125
    },
    'type': 'hotel'
  },
];

export const placeTypes: string[] = [
  'All', 'Roads', 'Lakes', 'Vineyards'
];

export const places$: Observable<Place[]> =
  Observable.of(places)
    .pipe(delay(2000));
