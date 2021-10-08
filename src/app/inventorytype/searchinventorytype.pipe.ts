import { Pipe, PipeTransform } from '@angular/core';
import { Inventorytype } from './inventorytype';

@Pipe({
  name: 'searchinventorytype'
})
export class SearchinventorytypePipe implements PipeTransform {

  transform(InventoryTypeList: Inventorytype[], InventoryTypeSearch: string): Inventorytype[] {
    if(!InventoryTypeList || !InventoryTypeSearch){
      return InventoryTypeList;
    }
    return InventoryTypeList.filter(itype =>
      itype.Type.toLocaleLowerCase().includes(InventoryTypeSearch.toLocaleLowerCase()));
  }

}

