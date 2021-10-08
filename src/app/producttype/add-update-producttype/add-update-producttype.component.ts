import { Component, Input, OnInit } from '@angular/core';
import { ProducttypeService } from '../producttype.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-producttype',
  templateUrl: './add-update-producttype.component.html',
  styleUrls: ['./add-update-producttype.component.css']
})
export class AddUpdateProducttypeComponent implements OnInit {

  constructor(private producttypeservice:ProducttypeService, private fb: FormBuilder) { }

  @Input() productType:any;
  ProductTypeID!: string;
  Name!:string;
  editupdate!: FormGroup;

  ngOnInit(): void {
    this.editupdate = this.fb.group({
      Name: ['', Validators.required]
    })
    this.ProductTypeID=this.productType.ProductTypeID;
    this.Name=this.productType.Name;
  }

  createProductType(){
    var producttype = {Name: this.Name};
    if (this.Name == "")
    {
      alert('Name is required!')
    }
    else if(confirm("Are you sure you want to add this product type?")){
      this.producttypeservice.createProducttype(producttype).subscribe(res=>{
        alert(res.toString());
      })  
    }  
  }
  updateProductType(){
    var producttype = {ProductTypeID: this.ProductTypeID,
              Name: this.Name};
    if (this.Name == "")
    {
      alert('Name is required!')
    }
    else if(confirm("Are you sure you want to update this product type?")){
      this.producttypeservice.updateProducttype(producttype).subscribe(res =>{
        alert(res.toString());
      })
    }
}

}
