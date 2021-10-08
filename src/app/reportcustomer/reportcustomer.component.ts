import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportcustomer',
  templateUrl: './reportcustomer.component.html',
  styleUrls: ['./reportcustomer.component.css']
})
export class ReportcustomerComponent implements OnInit {

  public serviceUrl: string;
  public reportPath: string;

  constructor() { 
    //Initialize the Report Viewer properties here.
    this.serviceUrl = 'http://localhost:57632/api/ReportViewer';
    this.reportPath = '~/Resources/CustomerReport.rdl';
  }

  ngOnInit(): void {
  }

}
