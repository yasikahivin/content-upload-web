import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiensTestimonialComponent } from './patiens-testimonial.component';

describe('PatiensTestimonialComponent', () => {
  let component: PatiensTestimonialComponent;
  let fixture: ComponentFixture<PatiensTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatiensTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatiensTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
