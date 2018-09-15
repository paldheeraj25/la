import { TestBed, inject } from '@angular/core/testing';

import { RoleBaseService } from './role-base.service';

describe('RoleBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleBaseService]
    });
  });

  it('should be created', inject([RoleBaseService], (service: RoleBaseService) => {
    expect(service).toBeTruthy();
  }));
});
