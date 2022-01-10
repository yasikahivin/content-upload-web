import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentPublishComponent } from './add-content-publish.component';

describe('AddContentPublishComponent', () => {
  let component: AddContentPublishComponent;
  let fixture: ComponentFixture<AddContentPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContentPublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContentPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
