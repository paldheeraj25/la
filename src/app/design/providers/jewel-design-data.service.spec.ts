import { TestBed, inject } from '@angular/core/testing';

import { JewelDesignDataService } from './jewel-design-data.service';

describe('JewelDesignDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JewelDesignDataService]
    });
  });

  it('should be created', inject([JewelDesignDataService], (service: JewelDesignDataService) => {
    expect(service).toBeTruthy();
  }));
});
