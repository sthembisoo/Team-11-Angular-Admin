import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='http://localhost:57632/Api/User';


  constructor(private http: HttpClient) { }
  Login(user: any)
  {
    return this.http.post(this.url +'/Login', user);
  }
}

