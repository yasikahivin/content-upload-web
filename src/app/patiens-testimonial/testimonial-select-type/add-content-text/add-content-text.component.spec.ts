import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentTextComponent } from './add-content-text.component';

describe('AddContentTextComponent', () => {
  let component: AddContentTextComponent;
  let fixture: ComponentFixture<AddContentTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContentTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
