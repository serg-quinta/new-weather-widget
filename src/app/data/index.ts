import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';

const places: Place[] = [
  {
    'title': 'Road',
    'img': 'assets/places/danka-peter-48152.jpg',
    'address': '123 6th St. Melbourne, FL 32904',
    'phone': 6304468851,
    'weather': {
      'title': 'string',
      'icon': 'string',
      'water': 20,
      'temperature': 14
    },
    'social_info': {
      'title': 'string',
      'img': 'string',
      'followers': 10,
      'following': 15
    },
    'type': 'hotel'
  },
  {
    'title': 'Lake',
    'img': 'assets/places/lukas-budimaier-108076.jpg',
    'address': '71 Pilgrim Avenue Chevy Chase, MD 20815',
    'phone': 2515469442,
    'weather': {
      'title': 'string',
      'icon': 'string',
      'water': 20,
      'temperature': 14
    },
    'social_info': {
      'title': 'string',
      'img': 'string',
      'followers': 10,
      'following': 15
    },
    'type': 'fishing'
  },
  {
    'title': 'Vineyards',
    'img': 'assets/places/karsten-wurth-inf1783-98124.jpg',
    'address': '71 Pilgrim Avenue Chevy Chase, MD 20815',
    'phone': 2515469442,
    'weather': {
      'title': 'string',
      'icon': 'string',
      'water': 20,
      'temperature': 14
    },
    'social_info': {
      'title': 'string',
      'img': 'string',
      'followers': 10,
      'following': 15
    },
    'type': 'tours'
  },
];


export const places$: Observable<Place[]> =
  Observable.of(places)
    .pipe(delay(2000));
