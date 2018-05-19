import { TestBed, inject } from '@angular/core/testing';

import { DataBaseAdministratorService } from './data-base-administrator.service';

describe('DataBaseAdministratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBaseAdministratorService]
    });
  });

  it('should be created', inject([DataBaseAdministratorService], (service: DataBaseAdministratorService) => {
    expect(service).toBeTruthy();
  }));
});
