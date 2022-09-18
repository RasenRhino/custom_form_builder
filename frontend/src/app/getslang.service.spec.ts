import { TestBed } from '@angular/core/testing';

import { GetslangService } from './getslang.service';

describe('GetslangService', () => {
  let service: GetslangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetslangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
