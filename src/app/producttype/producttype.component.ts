import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producttype } from './producttype';
import { ProducttypeService } from './producttype.service';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.css']
})
export class ProducttypeComponent implements OnInit {

  constructor(private producttypeservice: ProducttypeService, private route: Router) { }

  session: any;
  ProductTypeList!: Producttype[]; 
  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  productType: any;
  producttypebyid: any=[];
  ProductTypeSearch!: string;
  role: any;

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.session = localStorage.getItem("accessToken");
    if (this.session != null)
    {
      if (this.role == 1){
        this.route.navigate(["authorization"]);
      }
      else {
      this.producttypeservice.getAllProductTypes().subscribe((data: Producttype[]) =>{
      this.ProductTypeList=data;
        })
      }
    }
    else {
      this.route.navigate([""])
    } 
  }
  refreshProductTypeList() {
    this.producttypeservice.getAllProductTypes().subscribe((data: Producttype[]) =>{
      this.ProductTypeList=data;
    })
  }
  addClick(){
    this.productType={
      ProductTypeID: 0,
      Name: ""
    }
    this.ModalTitle="Add Product Type";
    this.ActivateAddEditDepComp=true;
  }
  viewClick(producttype: any)
  {
    this.producttypebyid=producttype;
  }
  editClick(producttype: any)
  {
    this.productType=producttype;
    this.ModalTitle="Update Product Type";
    this.ActivateAddEditDepComp=true;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshProductTypeList();
  }
  deleteProdType(producttype: any) {
      if(confirm('Are you sure you want to delete this product type?')) {
        this.producttypeservice.deleteProductType(producttype.ProductTypeID).subscribe(res=>{
          alert(res.toString());
          this.refreshProductTypeList();
        })
      }
  }

}
