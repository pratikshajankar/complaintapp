import { TestBed } from '@angular/core/testing';

import { ChilddepartmentService } from './childdepartment.service';

describe('ChilddepartmentService', () => {
  let service: ChilddepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChilddepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
