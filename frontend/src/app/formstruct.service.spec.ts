import { TestBed } from '@angular/core/testing';

import { FormstructService } from './formstruct.service';

describe('FormstructService', () => {
  let service: FormstructService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormstructService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
