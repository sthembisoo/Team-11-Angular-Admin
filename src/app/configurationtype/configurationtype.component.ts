import { Component, OnInit } from '@angular/core';
import { ConfigurationtypeService } from './configurationtype.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurationtype',
  templateUrl: './configurationtype.component.html',
  styleUrls: ['./configurationtype.component.css']
})
export class ConfigurationtypeComponent implements OnInit {

  constructor(private configtypeservice: ConfigurationtypeService, private route: Router) { }

  ConfigurationTypeList: any=[];
  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  configurationType: any;
  configurationtypebyid: any=[];
  session: any;
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
        this.configtypeservice.getAllConfigurationTypes().subscribe((data: any) =>{
          this.ConfigurationTypeList=data;
        })
      }
    }
    else {
      this.route.navigate([""])
    } 
  }
  refreshConfigurationTypeList() {
    this.configtypeservice.getAllConfigurationTypes().subscribe((data: any) =>{
      this.ConfigurationTypeList=data;
    })
  }

  addClick() {
    this.configurationType={
      ConfigurationTypeID: 0,
      Description: ""
    }
    this.ModalTitle="Add Configuration Type";
    this.ActivateAddEditDepComp=true;
  }
  viewClick(configtype: any) {
    this.configurationtypebyid=configtype;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshConfigurationTypeList();
  }
  deleteconfigtype(configtype: any) {
    if(confirm('Are you sure you want to delete this configuration type?')) {
      this.configtypeservice.deleteConfigurationType(configtype.ConfigurationTypeID).subscribe(res => {
        alert(res.toString());
        this.refreshConfigurationTypeList();
      })
    }
  }
}
