import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentRecordVideoComponent } from './add-content-record-video.component';

describe('AddContentRecordVideoComponent', () => {
  let component: AddContentRecordVideoComponent;
  let fixture: ComponentFixture<AddContentRecordVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContentRecordVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContentRecordVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
