import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateInventorytypeComponent } from './add-update-inventorytype.component';

describe('AddUpdateInventorytypeComponent', () => {
  let component: AddUpdateInventorytypeComponent;
  let fixture: ComponentFixture<AddUpdateInventorytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateInventorytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateInventorytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
