import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productservice: ProductService, private route: Router) { }

  ProductList!: Product[];
  ModalTitle!: string;
  ActivateAddEditDepComp: boolean=false;
  pRoduct: any;
  productbyid: any=[];
  ProductSearch!: string;
  ImageFile!: string;
  ImagePath!: string;
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
        this.productservice.getProduct().subscribe((data: Product[]) =>{
          this.ProductList=data;
        })
      }
    }
    else {
      this.route.navigate([""])
    } 
    
  }

  refreshProductList(){
    this.productservice.getProduct().subscribe((data: Product[]) =>{
      this.ProductList=data;
    })
  }
  addClick() {
    this.pRoduct={
      ProductID: 0,
      ProductName: "",
      Description: "",
      ImageFile: "",
      ProdQuantity: 0,
      ProductType: "",
      CategoryName: ""
    }
    this.ModalTitle="Add Product";
    this.ActivateAddEditDepComp = true;
  }
  viewClick(product: any) {
    this.productbyid=product;
    this.ImagePath=this.productservice.photourl+this.productbyid.ImageFile;
  }
  editClick(product: any) {
    this.pRoduct = product;
    this.ModalTitle = "Update Product";
    this.ActivateAddEditDepComp=true;
  }
  closeClick() {
    this.ActivateAddEditDepComp=false;
    this.refreshProductList();
  }
  deleteproduct(product: any) {
    if(confirm('Are you sure you want to delete this product?')) {
      this.productservice.deleteProduct(product.ProductID).subscribe(res =>{
        alert(res.toString());
        this.refreshProductList();
      })
    }
  }

}


