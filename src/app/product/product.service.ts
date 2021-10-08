import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='http://localhost:57632/Api/Product';
  photourl='http://localhost:57632/Photos/';
  constructor(private http: HttpClient) { }

  getProduct(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetProducts');
  }
  createProduct(product: any) {
    return this.http.post(this.url+'/CreateProduct', product);
  }
  updateProduct(product: any) {
    return this.http.put(this.url+'/UpdateProduct', product);
  }
  deleteProduct(product: any) {
    return this.http.delete(this.url+'/DeleteProduct/'+product);
  }
  getProductTypes(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetProductTypes');
  }
  getProductCategory(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetProductCategory');
  }
  uploadPhoto(productimage: any) {
    return this.http.post(this.url+'/SaveFile', productimage);
  }
}

