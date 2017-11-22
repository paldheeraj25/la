import { TestBed, inject } from '@angular/core/testing';

import { AdvertisementDataService } from './advertisement-data.service';

describe('AdvertisementDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertisementDataService]
    });
  });

  it('should be created', inject([AdvertisementDataService], (service: AdvertisementDataService) => {
    expect(service).toBeTruthy();
  }));
});
