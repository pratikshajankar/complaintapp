import { TestBed } from '@angular/core/testing';

import { ParentdeptService } from './parentdept.service';

describe('ParentdeptService', () => {
  let service: ParentdeptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentdeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
