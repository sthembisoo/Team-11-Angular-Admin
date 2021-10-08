import { Component, Input, OnInit } from '@angular/core';
import { InventorytypeService } from '../inventorytype.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-inventorytype',
  templateUrl: './add-update-inventorytype.component.html',
  styleUrls: ['./add-update-inventorytype.component.css']
})
export class AddUpdateInventorytypeComponent implements OnInit {

  constructor(private inventorytypeservice: InventorytypeService, private fb: FormBuilder) { }

  @Input() inventoryType:any;
  InventoryTypeID!: string;
  Type!: string;
  addupdate!: FormGroup;

  ngOnInit() {
    this.addupdate = this.fb.group({
      Type: ['', Validators.required]
    })
    this.InventoryTypeID = this.inventoryType.InventoryTypeID;
    this.Type=this.inventoryType.Type;
  }

  createInventoryType(){
    var inventorytype = {Type: this.Type};
    if (this.Type == "")
    {
      alert('Type is required!')
    }
    else if(confirm("Are you sure you want to add this inventory type?")){
      this.inventorytypeservice.createInventorytype(inventorytype).subscribe(res=>{
        alert(res.toString());
      })  
    }  
  }
  updateInventoryType(){
    var inventorytype = {InventoryTypeID: this.InventoryTypeID,
              Type: this.Type};
    if (this.Type == "")
    {
      alert('Type is required!')
    }
    else if(confirm("Are you sure you want to update this inventory type?")){
      this.inventorytypeservice.updateInventorytype(inventorytype).subscribe(res =>{
        alert(res.toString());
      })
    }
}


}

