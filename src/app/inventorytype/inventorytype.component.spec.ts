import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorytypeComponent } from './inventorytype.component';

describe('InventorytypeComponent', () => {
  let component: InventorytypeComponent;
  let fixture: ComponentFixture<InventorytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
