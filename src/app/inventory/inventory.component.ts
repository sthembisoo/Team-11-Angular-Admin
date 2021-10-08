import { Component, OnInit } from '@angular/core';
import { Inventory } from './inventory';
import { InventoryService } from './inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private inventoryservice: InventoryService, private route: Router) { }

  InventoryList!: Inventory[];
  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  iNventory: any;
  inventorybyid: any=[];
  InventorySearch!: string;
  role: any;
  session: any;

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
  this.session = localStorage.getItem("accessToken");
  if (this.session != null)
  {
    if (this.role == 1){
      this.route.navigate(["authorization"]);
    }
    else {
      this.inventoryservice.getInventory().subscribe((data: Inventory[]) =>{
        this.InventoryList=data;
      })
    }
  }
  else {
    this.route.navigate([""])
  } 
  }

  refreshInventoryList() {
    this.inventoryservice.getInventory().subscribe((data: Inventory[]) =>{
      this.InventoryList=data;
    })
  }
  addClick() {
    this.iNventory={
      InventoryID: 0,
      Name: "",
      Description: "",
      ExpirationDate: "",
      Quantity: 0,
      InventoryType: "",
    }
    this.ModalTitle="Add Inventory";
    this.ActivateAddEditDepComp=true;
  }
  viewClick(inventory: any) {
    this.inventorybyid=inventory;
  }
  editClick(inventory: any) {
    this.iNventory=inventory;
    this.ModalTitle="Update Inventory";
    this.ActivateAddEditDepComp=true;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshInventoryList();
  }
  deleteinventory(inventory: any) {
    if(confirm('Are you sure you want to delete this inventory?')) {
      this.inventoryservice.deleteInventory(inventory.InventoryID).subscribe(res => {
        alert(res.toString());
        this.refreshInventoryList();
      })
    }
  }
}
 
 