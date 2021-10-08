import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProducttypeService {
  url = 'http://localhost:57632/Api/ProductType';

  constructor(private http: HttpClient) { }

  getAllProductTypes(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetProductType');
  }
  createProducttype (producttype: any) {
    return this.http.post(this.url+'/CreateProductType', producttype);
  }
  updateProducttype (producttype: any) {
    return this.http.put(this.url+'/UpdateProductType', producttype);
  }
  deleteProductType (producttype: any) {
    return this.http.delete(this.url+'/DeleteProductType/'+producttype);
  }
}

