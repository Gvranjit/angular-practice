import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipingAssignmentComponent } from './piping-assignment.component';

describe('PipingAssignmentComponent', () => {
  let component: PipingAssignmentComponent;
  let fixture: ComponentFixture<PipingAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipingAssignmentComponent]
    });
    fixture = TestBed.createComponent(PipingAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
