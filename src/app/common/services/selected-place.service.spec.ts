import { TestBed, inject } from '@angular/core/testing';

import { SelectedPlaceService } from './selected-place.service';

describe('SelectedPlaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedPlaceService]
    });
  });

  it('should be created', inject([SelectedPlaceService], (service: SelectedPlaceService) => {
    expect(service).toBeTruthy();
  }));
});
