import { TestBed } from '@angular/core/testing';

import { FormschemaService } from './formschema.service';

describe('FormschemaService', () => {
  let service: FormschemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormschemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
