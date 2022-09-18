import { TestBed } from '@angular/core/testing';

import { FormlistService } from './formlist.service';

describe('FormlistService', () => {
  let service: FormlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
