import { TestBed } from '@angular/core/testing';

import { MyRecomendationService } from './my-recomendation.service';

describe('MyRecomendationService', () => {
  let service: MyRecomendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyRecomendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
