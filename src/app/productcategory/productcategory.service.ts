import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {
  url = 'http://localhost:57632/Api/ProductCategory';
  constructor(private http: HttpClient) { }

  getAllProductCategories(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetProductCategory');
  }
  createProductcategory (productcategory: any) {
    return this.http.post(this.url+'/CreateProductCategory', productcategory);
  }
  updateProductcategory (productcategory: any) {
    return this.http.put(this.url+'/UpdateProductCategory', productcategory);
  }
  deleteProductcategory (productcategory: any) {
    return this.http.delete(this.url+'/DeleteProductCategory/'+productcategory);
  }
}
