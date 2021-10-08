import { Pipe, PipeTransform } from '@angular/core';
import { Inventory } from './inventory';

@Pipe({
  name: 'searchinventory'
})
export class SearchinventoryPipe implements PipeTransform {

  transform(InventoryList: Inventory[], InventorySearch: string): Inventory[] {
    if(!InventoryList || !InventorySearch){
      return InventoryList;
    }
    return InventoryList.filter(inv =>
      inv.Name.toLocaleLowerCase().includes(InventorySearch.toLocaleLowerCase()) ||
      inv.Description.toLocaleLowerCase().includes(InventorySearch.toLocaleLowerCase()) ||
      inv.Type.toLocaleLowerCase().includes(InventorySearch.toLocaleLowerCase())
      );
  }

}