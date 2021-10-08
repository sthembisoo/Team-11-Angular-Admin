import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url='http://localhost:57632/Api/Employee';

  constructor(private http: HttpClient) { }
  getEmployee(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetEmployee');
  }
  createEmployee (employee: any) {
    return this.http.post(this.url+'/CreateEmployee', employee);
  }
  updateEmployee (employee: any) {
    return this.http.put(this.url+'/UpdateEmployee', employee);
  }
  deleteEmployee (employee: any) {
    return this.http.delete(this.url+'/DeleteEmployee/'+employee);
  }
  getGender(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetGender');
  }
  getTitle(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetTitle');
  }
}


  
