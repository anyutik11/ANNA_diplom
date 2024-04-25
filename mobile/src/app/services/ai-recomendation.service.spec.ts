import { TestBed } from '@angular/core/testing';

import { AiRecomendationService } from './ai-recomendation.service';

describe('AiRecomendationService', () => {
  let service: AiRecomendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiRecomendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
