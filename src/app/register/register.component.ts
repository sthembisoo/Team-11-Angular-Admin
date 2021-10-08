import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerservice: RegisterService, private fb: FormBuilder) { }

  user! : User;
  UserID!: string;
  Username!: string;
  EmailAddress!: string;
  URoleID!: number;
  selectedValue!: number;
  register!: FormGroup;

  ngOnInit(): void {
    this.register = this.fb.group({
      Username: ['', Validators.required],
      EmailAddress: ['', Validators.required],
      selectedValue: ['', Validators.required]
      })
  }

  registerUser() {
    var user = {Username: this.Username,
      EmailAddress: this.EmailAddress,
      URoleID: this.selectedValue};
      if(this.Username == "" || this.EmailAddress == "" || this.selectedValue == 0) {
        alert("Please enter complete user details!");
      }
      else {
        if (confirm("Are you sure you want to register this user?")) {
          this.registerservice.RegisterUser(user).subscribe(res =>{
            alert(res.toString());
          })
        }
        this.register.reset();
      }
  }

}

