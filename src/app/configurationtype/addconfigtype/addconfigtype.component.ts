import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationtypeService } from '../configurationtype.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addconfigtype',
  templateUrl: './addconfigtype.component.html',
  styleUrls: ['./addconfigtype.component.css']
})
export class AddconfigtypeComponent implements OnInit {

  constructor(private configurationtypeservice: ConfigurationtypeService, private fb: FormBuilder) { }

  @Input() configurationType:any;
  Description!: string;
  addupdate!: FormGroup;

  ngOnInit(): void {
    this.addupdate = this.fb.group({
      Description: ['', Validators.required]
    })
  }

  createConfigurationType(){
    var configurationtype = {Description: this.Description};
    if (this.Description == "")
    {
      alert('Description is required!')
    }
    else if(confirm("Are you sure you want to add this configuration type?")){
      this.configurationtypeservice.createConfigurationtype(configurationtype).subscribe(res=>{
        alert(res.toString());
      })  
    }  
  }
}
