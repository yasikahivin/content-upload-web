import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialEndComponent } from './testimonial-end.component';

describe('TestimonialEndComponent', () => {
  let component: TestimonialEndComponent;
  let fixture: ComponentFixture<TestimonialEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
