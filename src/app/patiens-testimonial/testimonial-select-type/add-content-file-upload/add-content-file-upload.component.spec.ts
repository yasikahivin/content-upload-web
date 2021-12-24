import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentFileUploadComponent } from './add-content-file-upload.component';

describe('AddContentFileUploadComponent', () => {
  let component: AddContentFileUploadComponent;
  let fixture: ComponentFixture<AddContentFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContentFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContentFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
