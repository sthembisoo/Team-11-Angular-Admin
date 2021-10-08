import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconfigtypeComponent } from './addconfigtype.component';

describe('AddconfigtypeComponent', () => {
  let component: AddconfigtypeComponent;
  let fixture: ComponentFixture<AddconfigtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddconfigtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconfigtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
