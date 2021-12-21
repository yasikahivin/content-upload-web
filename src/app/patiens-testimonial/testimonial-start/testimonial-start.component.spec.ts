import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialStartComponent } from './testimonial-start.component';

describe('TestimonialStartComponent', () => {
  let component: TestimonialStartComponent;
  let fixture: ComponentFixture<TestimonialStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
