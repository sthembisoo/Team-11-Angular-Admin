import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  url='http://localhost:57632/Api/Supplier';

  constructor(private http: HttpClient) { }
  getSupplier(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetSupplier');
  }
  createSupplier (supplier: any) {
    return this.http.post(this.url+'/CreateSupplier', supplier);
  }
  updateSupplier (supplier: any) {
    return this.http.put(this.url+'/UpdateSupplier', supplier);
  }
  deleteSupplier (supplier: any) {
    return this.http.delete(this.url+'/DeleteSupplier/'+supplier);
  }
  getSupplierTypes(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetSupplierTypes');
  }
}