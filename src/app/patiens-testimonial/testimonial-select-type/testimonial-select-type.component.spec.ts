import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSelectTypeComponent } from './testimonial-select-type.component';

describe('TestimonialSelectTypeComponent', () => {
  let component: TestimonialSelectTypeComponent;
  let fixture: ComponentFixture<TestimonialSelectTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialSelectTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSelectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
