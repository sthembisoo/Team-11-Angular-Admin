import { TestBed } from '@angular/core/testing';

import { ConfigurationtypeService } from './configurationtype.service';

describe('ConfigurationtypeService', () => {
  let service: ConfigurationtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
