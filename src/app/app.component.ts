import { Component, OnInit } from '@angular/core';
import { DatashareService } from './datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Admin';
  ShowNavBar!: boolean;
  HideEmployee!: boolean;
  Authorization!: boolean;
  HideCustomer!: boolean;

  constructor (private datashare: DatashareService, private route: Router) { 
    this.datashare.ShowNavBar.subscribe(value => {
      this.ShowNavBar = value;
    });
    this.datashare.HideEmployee.subscribe(value => {
      this.HideEmployee = value;
    });
  }

  ngOnInit() {
    var role = localStorage.getItem("role");
    var session = localStorage.getItem("accessToken");
    {
      if (role == "1" && session != null) {
        this.datashare.HideEmployee.next(false);
        this.datashare.ShowNavBar.next(false);
      }
      else if (role == "2" && session != null) {
        this.datashare.HideEmployee.next(false);
        this.datashare.ShowNavBar.next(true);
      }
      else if (role == "3" && session != null) {
        this.datashare.HideEmployee.next(true);
        this.datashare.ShowNavBar.next(true);
      }
    }
  }
  logout() {
    localStorage.clear();
    this.datashare.ShowNavBar.next(false);
    this.route.navigate([""]);
  }

}
