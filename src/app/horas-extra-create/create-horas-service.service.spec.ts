import { TestBed } from '@angular/core/testing';

import { CreateHorasServiceService } from './create-horas-service.service';

describe('CreateHorasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateHorasServiceService = TestBed.get(CreateHorasServiceService);
    expect(service).toBeTruthy();
  });
});
