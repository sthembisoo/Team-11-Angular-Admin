import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdatesupplierComponent } from './addupdatesupplier.component';

describe('AddupdatesupplierComponent', () => {
  let component: AddupdatesupplierComponent;
  let fixture: ComponentFixture<AddupdatesupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddupdatesupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdatesupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
