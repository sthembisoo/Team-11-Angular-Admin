import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url='http://localhost:57632/Api/User';

  constructor(private http: HttpClient) { }

  RegisterUser(user: any) {
    return this.http.post(this.url + '/RegisterUser', user);
  }
}


