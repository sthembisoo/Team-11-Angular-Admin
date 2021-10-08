import { Pipe, PipeTransform } from '@angular/core';
import { Productcategory } from './productcategory';

@Pipe({
  name: 'searchcategory'
})
export class SearchcategoryPipe implements PipeTransform {

  transform(ProductCategoryList: Productcategory[], ProductCategorySearch: string): Productcategory[] {
    if (!ProductCategoryList || !ProductCategorySearch){
      return ProductCategoryList;
    }
    return ProductCategoryList.filter(pcat => 
      pcat.CategoryName.toLocaleLowerCase().includes(ProductCategorySearch.toLocaleLowerCase())
      );
  }
}
