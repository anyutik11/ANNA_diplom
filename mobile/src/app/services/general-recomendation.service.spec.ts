import { TestBed } from '@angular/core/testing';

import { GeneralRecomendationService } from './general-recomendation.service';

describe('GeneralRecomendationService', () => {
  let service: GeneralRecomendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralRecomendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
