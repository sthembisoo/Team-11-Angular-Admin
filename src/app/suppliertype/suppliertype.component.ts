import { Component, OnInit } from '@angular/core';
import { Suppliertype } from './suppliertype';
import { SuppliertypeService } from './suppliertype.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliertype',
  templateUrl: './suppliertype.component.html',
  styleUrls: ['./suppliertype.component.css']
})
export class SuppliertypeComponent implements OnInit {

  constructor(private stypeservice: SuppliertypeService, private route: Router) { }

  SupplierTypeList!: Suppliertype[];
  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  supplieR: any;
  stypebyid: any=[];
  STypeSearch!: string;
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
        this.stypeservice.getSupplierType().subscribe((data: Suppliertype[]) =>{
          this.SupplierTypeList=data;
        })
      }
    }
    else {
      this.route.navigate([""])
    } 
  }

  refreshSTypeList() {
    this.stypeservice.getSupplierType().subscribe((data: Suppliertype[]) =>{
      this.SupplierTypeList=data;
    })
  }
  addClick() {
    this.supplieR={
      SupplierTypeID: 0,
      Type: "",
    }
    this.ModalTitle="Add Supplier Type";
    this.ActivateAddEditDepComp=true;
  }
  viewClick(suppliertype: any) {
    this.stypebyid=suppliertype;
  }
  editClick(suppliertype: any) {
    this.supplieR = suppliertype;
    this.ModalTitle="Update SupplierType";
    this.ActivateAddEditDepComp=true;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshSTypeList();
  }
  deletestype(suppliertype: any) {
    if(confirm('Are you sure you want to delete this supplier type?')) {
      this.stypeservice.deleteSupplierType(suppliertype.SupplierTypeID).subscribe(res => {
        alert(res.toString());
        this.refreshSTypeList();
      })
    }
  }

}

 
 