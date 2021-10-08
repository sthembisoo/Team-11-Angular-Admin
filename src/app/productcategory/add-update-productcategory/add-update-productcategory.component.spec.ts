import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateProductcategoryComponent } from './add-update-productcategory.component';

describe('AddUpdateProductcategoryComponent', () => {
  let component: AddUpdateProductcategoryComponent;
  let fixture: ComponentFixture<AddUpdateProductcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateProductcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateProductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
