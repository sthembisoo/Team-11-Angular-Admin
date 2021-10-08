import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'searchproduct'
})
export class SearchproductPipe implements PipeTransform {

  transform(ProductList: Product[], ProductSearch: string): Product[] {
    if (!ProductList || !ProductSearch){
      return ProductList;
    }
    return ProductList.filter(product => 
      product.ProductName.toLocaleLowerCase().includes(ProductSearch.toLocaleLowerCase()) || 
      product.Description.toLocaleLowerCase().includes(ProductSearch.toLocaleLowerCase()) ||
      product.Name.toLocaleLowerCase().includes(ProductSearch.toLocaleLowerCase()) || 
      product.CategoryName.toLocaleLowerCase().includes(ProductSearch.toLocaleLowerCase())
      );
  }

}

