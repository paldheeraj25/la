import { TestBed, inject } from '@angular/core/testing';

import { JewelDataService } from './jewel-data.service';

describe('JewelDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JewelDataService]
    });
  });

  it('should be created', inject([JewelDataService], (service: JewelDataService) => {
    expect(service).toBeTruthy();
  }));
});
