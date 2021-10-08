import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { Router } from '@angular/router';
import { Configuration } from './configuration';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private configservice: ConfigurationService, private route: Router) { }

  ConfigurationList!: Configuration[];
  ModalTitle!: string;
  ActivateAddEditDepComp: boolean=false;
  confiG: any;
  configbyid: any=[];
  ConfigSearch!: string;
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
        this.configservice.getConfiguration().subscribe((data: Configuration[]) =>{
          this.ConfigurationList=data;
        })
      }
    }
    else {
      this.route.navigate([""])
    } 
    
  }
  refreshConfigList(){
    this.configservice.getConfiguration().subscribe((data: Configuration[]) =>{
      this.ConfigurationList=data;
    })
  }
  addClick() {
    this.confiG={
      ConfigurationID: 0,
      Configuration: "",
      Description: "",
    }
    this.ModalTitle="Add Configuration";
    this.ActivateAddEditDepComp = true;
  }
  viewClick(config: any) {
    this.configbyid=config;
  }
  closeClick() {
    this.ActivateAddEditDepComp=false;
    this.refreshConfigList();
  }
  deleteconfig(config: any) {
    if(confirm('Are you sure you want to delete this configuration?')) {
      this.configservice.deleteConfiguration(config.ConfigurationID).subscribe(res =>{
        alert(res.toString());
        this.refreshConfigList();
      })
    }
  }

}


