import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdateemployeeComponent } from './addupdateemployee.component';

describe('AddupdateemployeeComponent', () => {
  let component: AddupdateemployeeComponent;
  let fixture: ComponentFixture<AddupdateemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddupdateemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
