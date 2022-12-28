import { TestBed } from '@angular/core/testing';

import { CustomPreoladService } from './custom-preolad.service';

describe('CustomPreoladService', () => {
  let service: CustomPreoladService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreoladService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
