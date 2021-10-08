import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addconfiguration',
  templateUrl: './addconfiguration.component.html',
  styleUrls: ['./addconfiguration.component.css']
})
export class AddconfigurationComponent implements OnInit {

  constructor(private configservice:ConfigurationService, private fb: FormBuilder) { }

  @Input() confiG:any;
  ConfigurationID!: string;
  Configuration!: string;
  Description!: string;
  CTypeID!: number;
  selectedValue!: number;
  addupdate!:FormGroup;
  ConfigurationTypeList: any=[];

  ngOnInit(): void {
    this.addupdate = this.fb.group({
      Configuration: ['', Validators.required],
      selectedValue: ['', Validators.required],
    })

    this.loadTypeList();
  }

  loadTypeList() {
    this.configservice.getConfigTypes().subscribe((data: any) =>{
      this.ConfigurationTypeList=data;
    })
  }

  createConfiguration() {
    var config = {Configuration1: this.Configuration,
    ConfigTypeID: this.selectedValue};
    if(this.Configuration == "" || this.selectedValue == 0) {
      alert('Please enter complete configuration details!')
    }
    else if(confirm("Are you sure you want to add this configuration?")) {
      this.configservice.createConfiguration(config).subscribe(res => {
        alert(res.toString());
      })
    }
  }

}

  

