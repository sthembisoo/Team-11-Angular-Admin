import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.route.navigate([""]);
  }

}
