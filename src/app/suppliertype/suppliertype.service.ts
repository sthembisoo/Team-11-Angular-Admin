import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliertypeService {
  url='http://localhost:57632/Api/SupplierType';

  constructor(private http: HttpClient) { }

  getSupplierType(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetSupplierType');
  }
  createSupplierType (suppliertype: any) {
    return this.http.post(this.url+'/CreateSupplierType', suppliertype);
  }
  updateSupplierType (suppliertype: any) {
    return this.http.put(this.url+'/UpdateSupplierType', suppliertype);
  }
  deleteSupplierType (suppliertype: any) {
    return this.http.delete(this.url+'/DeleteSupplierType/'+suppliertype);
  }
}
