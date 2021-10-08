import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService, private router: Router, private fb: FormBuilder, private datashare: DatashareService) { }

  user: any;
  loginform!: FormGroup;
  EmailAddress!: string;
  Password!: string;

  ngOnInit(): void {
    this.loginform = this.fb.group({
      EmailAddress: ['', Validators.required],
      Password: ['', Validators.required]
    })
    if (localStorage.getItem("accessToken")) {
      this.router.navigate(["dashboard"])
    }
  }

  login() {
    var user = {EmailAddress : this.EmailAddress,
      Password: this.Password
    }
    this.loginservice.Login(user).subscribe((res: any) =>{
      if(res.Error) {
        alert(res.Error);
      }
      else {
        localStorage.setItem("accessToken", res.SessionID);
        localStorage.setItem("role", res.URoleID);
        if (res.URoleID == 1) {
          this.datashare.HideEmployee.next(false);
          this.datashare.ShowNavBar.next(false);
          this.router.navigate(["authorization"]);
        }
        else if (res.URoleID == 2) {
          this.datashare.HideEmployee.next(false);
          this.datashare.ShowNavBar.next(true);
          this.router.navigate(["dashboard"]);
        }
        else {
          this.datashare.HideEmployee.next(true);
          this.datashare.ShowNavBar.next(true);
          this.router.navigate(["dashboard"]);
        }
        };
      })
  }

}
  



