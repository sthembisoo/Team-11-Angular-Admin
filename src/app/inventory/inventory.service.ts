import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  url='http://localhost:57632/Api/Inventory';

  constructor(private http: HttpClient) { }

  getInventory(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetInventory');
  }
  createInventory (inventory: any) {
    return this.http.post(this.url+'/CreateInventory', inventory);
  }
  updateInventory (inventory: any) {
    return this.http.put(this.url+'/UpdateInventory', inventory);
  }
  deleteInventory (inventory: any) {
    return this.http.delete(this.url+'/DeleteInventory/'+inventory);
  }
  getInventoryTypes(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetInventoryTypes');
  }
}