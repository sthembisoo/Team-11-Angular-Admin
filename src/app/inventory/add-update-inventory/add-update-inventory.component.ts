import { Component, Input, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-inventory',
  templateUrl: './add-update-inventory.component.html',
  styleUrls: ['./add-update-inventory.component.css']
})
export class AddUpdateInventoryComponent implements OnInit {

  constructor(private inventoryservice: InventoryService, private fb: FormBuilder) { }

  @Input() iNventory:any;
  InventoryID!: string;
  Name!: string;
  Description!: string;
  ExpirationDate!: string;
  Quantity!: number;
  ITypeID!: number;
  selectedValue!: number;
  addupdate!: FormGroup;
  TypeList: any=[];

  ngOnInit(): void {
    this.addupdate = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      ExpirationDate: ['', Validators.required],
      Quantity: ['', Validators.required],
      selectedValue: ['', Validators.required]
      })
    this.InventoryID = this.iNventory.InventoryID;
    this.Name = this.iNventory.Name;
    this.Description = this.iNventory.Description;
    this.ExpirationDate = this.iNventory.ExpirationDate;
    this.Quantity = this.iNventory.Quantity;
    this.selectedValue = this.iNventory.ITypeID;

    this.loadTypeList();
  }

  loadTypeList(){
    this.inventoryservice.getInventoryTypes().subscribe((data:any)=>{
      this.TypeList=data;
  })
  }
  createInventory(){
    var inventory = {Name: this.Name,
    Description: this.Description,
    ExpirationDate: this.ExpirationDate,
    Quantity: this.Quantity,
    ITypeID: this.selectedValue};
    if (this.Name == "" || this.Description == "")
    {
      alert('Please enter complete inventory details!')
    }
    else if(confirm("Are you sure you want to add this inventory?")){
      this.inventoryservice.createInventory(inventory).subscribe(res=>{
        alert(res.toString());
      })  
    }  
  }
  updateInventory(){
    var inventory = {InventoryID: this.InventoryID,
      Name: this.Name,
      Description: this.Description,
      ExpirationDate: this.ExpirationDate,
      Quantity: this.Quantity,
      ITypeID: this.selectedValue};
      if (this.Name == "" || this.Description == "")
      {
        alert('Please enter complete inventory details!')
      }
    else if(confirm("Are you sure you want to update this inventory?")){
      this.inventoryservice.updateInventory(inventory).subscribe(res =>{
        alert(res.toString());
      })
    }
  }
}
