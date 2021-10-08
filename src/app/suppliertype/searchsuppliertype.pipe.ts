import { Pipe, PipeTransform } from '@angular/core';
import { Suppliertype } from './suppliertype';

@Pipe({
  name: 'searchsuppliertype'
})
export class SearchsuppliertypePipe implements PipeTransform {

  transform(SupplierTypeList: Suppliertype[], STypeSearch: string): Suppliertype[] {
    if(!SupplierTypeList || !STypeSearch){
      return SupplierTypeList;
    }
    return SupplierTypeList.filter(stype =>
      stype.Type.toLocaleLowerCase().includes(STypeSearch.toLocaleLowerCase())
      );
  }

}
