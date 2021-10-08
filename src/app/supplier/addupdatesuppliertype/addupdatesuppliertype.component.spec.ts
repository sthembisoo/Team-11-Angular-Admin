import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdatesuppliertypeComponent } from './addupdatesuppliertype.component';

describe('AddupdatesuppliertypeComponent', () => {
  let component: AddupdatesuppliertypeComponent;
  let fixture: ComponentFixture<AddupdatesuppliertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddupdatesuppliertypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdatesuppliertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
