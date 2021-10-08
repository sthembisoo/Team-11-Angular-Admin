import { Component, OnInit } from '@angular/core';
import { Supplier } from './supplier';
import { SupplierService } from './supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private supplierservice: SupplierService, private route: Router) { }

  SupplierList!: Supplier[];
  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  sUpplier: any;
  supplierbyid: any=[];
  SupplierSearch!: string;
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
        this.supplierservice.getSupplier().subscribe((data: Supplier[]) =>{
          this.SupplierList=data;
        })
      }
    }
    else {
      this.route.navigate([""])
    } 
  }
  refreshSupplierList() {
    this.supplierservice.getSupplier().subscribe((data: Supplier[]) =>{
      this.SupplierList=data;
    })
  }
  addClick() {
    this.sUpplier={
      SupplierID: 0,
      SupplierName: "",
      SupplierContactNumber: 0,
      SupplierPhysicalAddress: "",
      Type: "",
    }
    this.ModalTitle="Add Supplier";
    this.ActivateAddEditDepComp=true;
  }
  viewClick(supplier: any) {
    this.supplierbyid=supplier;
  }
  editClick(supplier: any) {
    this.sUpplier=supplier;
    this.ModalTitle="Update Supplier";
    this.ActivateAddEditDepComp=true;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshSupplierList();
  }
  deletesupplier(supplier: any) {
    if(confirm('Are you sure you want to delete this supplier?')) {
      this.supplierservice.deleteSupplier(supplier.SupplierID).subscribe(res => {
        alert(res.toString());
        this.refreshSupplierList();
      })
    }
  }


}
  
 