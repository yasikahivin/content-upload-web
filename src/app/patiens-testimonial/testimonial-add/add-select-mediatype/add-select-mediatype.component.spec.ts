import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelectMediatypeComponent } from './add-select-mediatype.component';

describe('AddSelectMediatypeComponent', () => {
  let component: AddSelectMediatypeComponent;
  let fixture: ComponentFixture<AddSelectMediatypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSelectMediatypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSelectMediatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
