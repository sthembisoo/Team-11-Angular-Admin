import { Pipe, PipeTransform } from '@angular/core';
import { Producttype } from './producttype';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(ProductTypeList: Producttype[], ProductTypeSearch: string): Producttype[] {
    if (!ProductTypeList || !ProductTypeSearch){
      return ProductTypeList;
    }
    return ProductTypeList.filter(ptype => 
      ptype.ProductTypeID.toString().toLocaleLowerCase().includes(ProductTypeSearch.toLocaleLowerCase()) ||
      ptype.Name.toLocaleLowerCase().includes(ProductTypeSearch.toLocaleLowerCase())
      );
  }
}
