import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentVideoComponent } from './add-content-video.component';

describe('AddContentVideoComponent', () => {
  let component: AddContentVideoComponent;
  let fixture: ComponentFixture<AddContentVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContentVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContentVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
