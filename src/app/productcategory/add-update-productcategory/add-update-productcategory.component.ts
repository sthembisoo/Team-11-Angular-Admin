import { Component, Input, OnInit } from '@angular/core';
import { ProductcategoryService } from '../productcategory.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-productcategory',
  templateUrl: './add-update-productcategory.component.html',
  styleUrls: ['./add-update-productcategory.component.css']
})
export class AddUpdateProductcategoryComponent implements OnInit {

  constructor(private productcategoryservice:ProductcategoryService, private fb: FormBuilder) { }

  @Input() productCategory:any;
  ProductCategoryID!: string;
  CategoryName!:string;
  editupdate!: FormGroup;

  ngOnInit(): void {
    this.editupdate = this.fb.group({
      CategoryName: ['', Validators.required]
    })
    this.ProductCategoryID=this.productCategory.ProductCategoryID;
    this.CategoryName=this.productCategory.CategoryName;
  }

  createProductCategory(){
    var productcategory = {CategoryName: this.CategoryName};
    if (this.CategoryName == "")
    {
      alert('Category Name is required!')
    }
    else if(confirm("Are you sure you want to add this product category?")){
      this.productcategoryservice.createProductcategory(productcategory).subscribe(res=>{
        alert(res.toString());
      })  
    }  
  }
  updateProductCategory(){
    var productcategory = {ProductCategoryID: this.ProductCategoryID,
      CategoryName: this.CategoryName};
    if (this.CategoryName == "")
    {
      alert('Category Name is required!')
    }
    else if(confirm("Are you sure you want to update this product category?")){
      this.productcategoryservice.updateProductcategory(productcategory).subscribe(res=>{
        alert(res.toString());
      })  
    }  
  }
  /*updateProductCategory(){
    var productcategory = {ProductCategoryID: this.ProductCategoryID,
              CategoryName: this.CategoryName};
    if (this.CategoryName == "")
    {
      alert('Category Name is required!')
    }
    else if(confirm("Are you sure you want to update this product category?")){
      this.productcategoryservice.updateProductcategory(productcategory).subscribe(res =>{
        alert(res.toString());
      })
    }
}*/
}
