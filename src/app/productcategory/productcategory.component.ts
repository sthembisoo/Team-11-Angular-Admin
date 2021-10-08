import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productcategory } from './productcategory';
import { ProductcategoryService } from './productcategory.service';
@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {

  constructor(private productcategoryservice: ProductcategoryService, private route: Router) { }

  session: any;
  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  productCategory: any;
  productcategorybyid: any=[];
  ProductCategorySearch!: string;
  role: any;
  ProductCategoryList!: Productcategory[];

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.session = localStorage.getItem("accessToken");
    if (this.session != null)
    {
      if (this.role == 1){
        this.route.navigate(["authorization"]);
      }
      else {
      this.productcategoryservice.getAllProductCategories().subscribe((data: Productcategory[]) =>{
      this.ProductCategoryList=data;
        })
      }
    }
    else {
      this.route.navigate([""]) 
    } 
  }

  refreshProductCategoryList() {
    this.productcategoryservice.getAllProductCategories().subscribe((data: Productcategory[]) =>{
      this.ProductCategoryList=data;
    })
  }
  addClick(){
    this.productCategory={
      ProductCategoryID: 0,
      CategoryName: ""
    }
    this.ModalTitle="Add Product Category";
    this.ActivateAddEditDepComp=true;
  }
  viewClick(productcategory: any)
  {
    this.productcategorybyid=productcategory;
  }
  editClick(productcategory: any)
  {
    this.productCategory=productcategory;
    this.ModalTitle="Update Product Category";
    this.ActivateAddEditDepComp=true;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshProductCategoryList();
  }
  deleteProdCategory(productcategory: any) {
      if(confirm('Are you sure you want to delete this product category?')) {
        this.productcategoryservice.deleteProductcategory(productcategory.ProductCategoryID).subscribe(res=>{
          alert(res.toString());
          this.refreshProductCategoryList();
        })
      }
  }
}


