import { Component, Input, OnInit } from '@angular/core';
import { SuppliertypeService } from '../suppliertype.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addupdatesupplier',
  templateUrl: './addupdatesupplier.component.html',
  styleUrls: ['./addupdatesupplier.component.css']
})
export class AddupdatesupplierComponent implements OnInit {

  constructor(private suppliertypeservice: SuppliertypeService, private fb: FormBuilder) { }
  @Input() supplieR:any;
  SupplierTypeID!: string;
  Type!: string;
  addupdate!: FormGroup;

  ngOnInit(): void {
    this.addupdate = this.fb.group({
      Type: ['', Validators.required]
    })
    this.SupplierTypeID = this.supplieR.SupplierTypeID;
    this.Type=this.supplieR.Type;
  }
  createSupplierType(){
    var suppliertype = {Type: this.Type};
    if (this.Type == "")
    {
      alert('Type is required!')
    }
    else if(confirm("Are you sure you want to add this supplier type?")){
      this.suppliertypeservice.createSupplierType(suppliertype).subscribe(res=>{
        alert(res.toString());
      })  
    }  
  }
  updateSupplierType(){
    var suppliertype = {SupplierTypeID: this.SupplierTypeID,
              Type: this.Type};
    if (this.Type == "")
    {
      alert('Type is required!')
    }
    else if(confirm("Are you sure you want to update this supplier type?")){
      this.suppliertypeservice.updateSupplierType(suppliertype).subscribe(res =>{
        alert(res.toString());
      })
    }
}

}


