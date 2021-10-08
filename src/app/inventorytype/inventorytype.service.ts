import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventorytypeService {

  url= 'http://localhost:57632/Api/InventoryType';
  constructor(private http: HttpClient) { }

  getAllInventoryTypes(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetInventoryType');
  }
  createInventorytype (inventorytype: any) {
    return this.http.post(this.url+'/CreateInventoryType', inventorytype);
  }
  updateInventorytype (inventorytype: any) {
    return this.http.put(this.url+'/UpdateInventoryType', inventorytype);
  }
  deleteInventoryType (inventorytype: any) {
    return this.http.delete(this.url+'/DeleteInventoryType/'+inventorytype);
  }
}