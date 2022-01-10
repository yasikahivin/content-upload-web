import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelectHospitalComponent } from './add-select-hospital.component';

describe('AddSelectHospitalComponent', () => {
  let component: AddSelectHospitalComponent;
  let fixture: ComponentFixture<AddSelectHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSelectHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSelectHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
