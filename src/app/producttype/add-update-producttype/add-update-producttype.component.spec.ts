import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateProducttypeComponent } from './add-update-producttype.component';

describe('AddUpdateProducttypeComponent', () => {
  let component: AddUpdateProducttypeComponent;
  let fixture: ComponentFixture<AddUpdateProducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateProducttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateProducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
