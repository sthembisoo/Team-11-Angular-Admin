import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationtypeComponent } from './configurationtype.component';

describe('ConfigurationtypeComponent', () => {
  let component: ConfigurationtypeComponent;
  let fixture: ComponentFixture<ConfigurationtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
