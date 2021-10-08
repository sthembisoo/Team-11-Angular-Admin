import { TestBed } from '@angular/core/testing';

import { InventorytypeService } from './inventorytype.service';

describe('InventorytypeService', () => {
  let service: InventorytypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventorytypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
