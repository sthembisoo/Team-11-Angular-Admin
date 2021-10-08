import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.css']
})
export class AddUpdateProductComponent implements OnInit {

  constructor(private productservice:ProductService, private fb: FormBuilder) { }

  @Input() pRoduct:any;
  ProductID!: string;
  ProductName!: string;
  Description!: string;
  ProdQuantity!: number;
  Price!: number;
  PTypeID!: number;
  ImageFile!: string;
  ImagePath!: string;
  selectedValue!: number;
  addupdate!:FormGroup;
  ProductTypeList: any=[];
  ProductCategoryList: any=[];
  selectedValue2!: number;

  ngOnInit(): void {
    this.addupdate = this.fb.group({
      ProductName: ['', Validators.required],
      Description: ['', Validators.required],
      ImageFile: ['', Validators.required],
      ProdQuantity: ['', Validators.required],
      Price: ['', Validators.required],
      selectedValue: ['', Validators.required],
      selectedValue2: ['', Validators.required]
    })
    this.ProductID = this.pRoduct.ProductID;
    this.ProductName = this.pRoduct.ProductName;
    this.Description = this.pRoduct.Description;
    this.ImageFile = this.pRoduct.ImageFile;
    this.ProdQuantity = this.pRoduct.ProdQuantity;
    this.Price = this.pRoduct.Price;
    this.ImagePath = this.productservice.photourl+this.ImageFile;
    this.selectedValue = this.pRoduct.PTypeID;
    this.selectedValue2 = this.pRoduct.ProdCatID;

    this.loadTypeList();
    this.loadCategoryList();
  }

  loadTypeList() {
    this.productservice.getProductTypes().subscribe((data: any) =>{
      this.ProductTypeList=data;
    })
  }

  loadCategoryList() {
    this.productservice.getProductCategory().subscribe((data: any) =>{
      this.ProductCategoryList=data;
    })
  }

  createProduct() {
    var product = {ProductName: this.ProductName,
    Description: this.Description,
    ImageFile: this.ImageFile,
    ProdQuantity: this.ProdQuantity,
    PTypeID: this.selectedValue,
    ProdCatID: this.selectedValue2,
    Price: this.Price,
    ImagePath: this.productservice.photourl+this.ImageFile};
    if(this.ProductName == "" || this.Description == "" || this.ImageFile == "" || this.Price == 0 || this.selectedValue == 0 || this.selectedValue2 == 0) {
      alert('Please enter complete product details!')
    }
    else if(confirm("Are you sure you want to add this product?")) {
      this.productservice.createProduct(product).subscribe(res => {
        alert(res.toString());
      })
    }
  }

  updateProduct() {
    var product = {ProductID: this.ProductID,
      ProductName: this.ProductName,
    Description: this.Description,
    ImageFile: this.ImageFile,
    ProdQuantity: this.ProdQuantity,
    PTypeID: this.selectedValue,
    ProdCatID: this.selectedValue2,
    Price: this.Price,
    ImagePath: this.productservice.photourl+this.ImageFile};
    if(this.ProductName == "" || this.Description == "" || this.ImageFile == "" || this.Price == 0 || this.selectedValue == 0 || this.selectedValue2 == 0) {
      alert('Please enter complete product details!')
    }
    else if(confirm("Are you sure you want to update this product?")) {
      this.productservice.updateProduct(product).subscribe(res => {
        alert(res.toString());
      })
    }
  }

  uploadPhoto(event: any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.productservice.uploadPhoto(formData).subscribe((data:any)=>{
      this.ImageFile=data.toString();
      this.ImagePath=this.productservice.photourl+this.ImageFile;
    })
  }

}