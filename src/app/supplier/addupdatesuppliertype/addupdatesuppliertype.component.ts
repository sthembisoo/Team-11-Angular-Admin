import { Component, Input, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addupdatesuppliertype',
  templateUrl: './addupdatesuppliertype.component.html',
  styleUrls: ['./addupdatesuppliertype.component.css']
})
export class AddupdatesuppliertypeComponent implements OnInit {

  constructor(private supplierservice: SupplierService, private fb: FormBuilder) { }

  @Input() sUpplier:any;
  SupplierID!: string;
  SupplierName!: string;
  SupplierContactNumber!: number;
  SupplierPhysicalAddress!: string;
  STypeID!: number;
  selectedValue!: number;
  addupdate!: FormGroup;
  TypeList: any=[];

  ngOnInit(): void {
    this.addupdate = this.fb.group({
      SupplierName: ['', Validators.required],
      SupplierContactNumber: ['', Validators.required], 
      SupplierPhysicalAddress: ['', Validators.required],
      selectedValue: ['', Validators.required]
      })
    this.SupplierID = this.sUpplier.SupplierID;
    this.SupplierName = this.sUpplier.SupplierName;
    this.SupplierContactNumber = this.sUpplier.SupplierContactNumber;
    this.SupplierPhysicalAddress = this.sUpplier.SupplierPhysicalAddress;
    this.selectedValue = this.sUpplier.STypeID;

    this.loadTypeList();
  }

  loadTypeList(){
    this.supplierservice.getSupplierTypes().subscribe((data:any)=>{
      this.TypeList=data;
  })
  }
  createSupplier(){
    var supplier = {
      SupplierName: this.SupplierName,
      SupplierContactNumber: this.SupplierContactNumber,
      SupplierPhysicalAddress: this.SupplierPhysicalAddress,
      STypeID: this.selectedValue};
    if (this.SupplierName == "" || this.SupplierContactNumber == 0 || this.SupplierPhysicalAddress == "" || this.selectedValue == 0)
    {
      alert('Please enter complete supplier details!')
    }
    else if(confirm("Are you sure you want to add this supplier?")){
      this.supplierservice.createSupplier(supplier).subscribe(res=>{
        alert(res.toString());
      })  
    }  
  }
  updateSupplier(){
    var supplier = {SupplierID: this.SupplierID,
      SupplierName: this.SupplierName,
      SupplierContactNumber: this.SupplierContactNumber,
      SupplierPhysicalAddress: this.SupplierPhysicalAddress,
      STypeID: this.selectedValue};
      if (this.SupplierName == "" || this.SupplierContactNumber == 0 || this.SupplierPhysicalAddress == "" || this.selectedValue == 0)
      {
        alert('Please enter complete supplier details!')
      }
    else if(confirm("Are you sure you want to update this supplier?")){
      this.supplierservice.updateSupplier(supplier).subscribe(res =>{
        alert(res.toString());
      })
    }
  }

}