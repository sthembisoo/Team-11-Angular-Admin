import { Pipe, PipeTransform } from '@angular/core';
import { Supplier } from './supplier';
@Pipe({
  name: 'searchsupplier'
})
export class SearchsupplierPipe implements PipeTransform {

  transform(SupplierList: Supplier[], SupplierSearch: string): Supplier[] {
    if(!SupplierList || !SupplierSearch){
      return SupplierList;
    }
    return SupplierList.filter(sup =>
      sup.SupplierName.toLocaleLowerCase().includes(SupplierSearch.toLocaleLowerCase()) ||
      sup.SupplierPhysicalAddress.toLocaleLowerCase().includes(SupplierSearch.toLocaleLowerCase()) ||
      sup.Type.toLocaleLowerCase().includes(SupplierSearch.toLocaleLowerCase())
      );
  }


}
