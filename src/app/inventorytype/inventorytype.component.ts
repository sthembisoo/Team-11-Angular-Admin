import { Component, OnInit } from '@angular/core';
import { Inventorytype } from './inventorytype';
import { InventorytypeService } from './inventorytype.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventorytype',
  templateUrl: './inventorytype.component.html',
  styleUrls: ['./inventorytype.component.css']
})
export class InventorytypeComponent implements OnInit {

  constructor(private inventorytypeservice: InventorytypeService, private route: Router) { }

  InventoryTypeList!: Inventorytype[];
  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  inventoryType: any;
  inventorytypebyid: any=[];
  InventoryTypeSearch!: string;
  session: any;
  role: any;

  ngOnInit() {
    this.role = localStorage.getItem("role");
    this.session = localStorage.getItem("accessToken");
    if (this.session != null)
    {
      if (this.role == 1){
        this.route.navigate(["authorization"]);
      }
      else {
        this.inventorytypeservice.getAllInventoryTypes().subscribe((data: Inventorytype[]) =>{
          this.InventoryTypeList=data;
        })
      }
    }
    else {
      this.route.navigate([""])
    } 
    
  }
  refreshInventoryTypeList() {
    this.inventorytypeservice.getAllInventoryTypes().subscribe((data: Inventorytype[]) =>{
      this.InventoryTypeList=data;
    })
  }
  addClick() {
    this.inventoryType={
      InventoryTypeID: 0,
      Type: ""
    }
    this.ModalTitle="Add Inventory Type";
    this.ActivateAddEditDepComp=true;
  }
  viewClick(inventorytype: any) {
    this.inventorytypebyid=inventorytype;
  }
  editClick(inventorytype: any) {
    this.inventoryType=inventorytype;
    this.ModalTitle="Update Inventory Type";
    this.ActivateAddEditDepComp=true;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshInventoryTypeList();
  }
  deleteinventorytype(inventorytype: any) {
    if(confirm('Are you sure you want to delete this inventory type?')) {
      this.inventorytypeservice.deleteInventoryType(inventorytype.InventoryTypeID).subscribe(res => {
        alert(res.toString());
        this.refreshInventoryTypeList();
      })
    }
  }

}