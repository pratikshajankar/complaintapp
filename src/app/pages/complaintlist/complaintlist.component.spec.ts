import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintlistComponent } from './complaintlist.component';

describe('ComplaintlistComponent', () => {
  let component: ComplaintlistComponent;
  let fixture: ComponentFixture<ComplaintlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
