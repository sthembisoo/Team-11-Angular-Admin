import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public serviceUrl: string;
  public reportPath: string;

  constructor() { 
    //Initialize the Report Viewer properties here.
    this.serviceUrl = 'http://localhost:57632/api/ReportViewer';
    this.reportPath = '~/Resources/InventoryStockTakeReport.rdl';
  }

  ngOnInit(): void {
  }

}
