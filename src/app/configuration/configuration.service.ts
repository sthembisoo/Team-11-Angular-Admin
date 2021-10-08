import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

    url='http://localhost:57632/Api/Configuration';

  constructor(private http: HttpClient) { }
  getConfiguration(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetConfiguration');
  }
  createConfiguration(config: any) {
    return this.http.post(this.url+'/CreateConfiguration', config);
  }
  deleteConfiguration(config: any) {
    return this.http.delete(this.url+'/DeleteConfiguration/'+config);
  }
  getConfigTypes(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetConfigTypes');
  }

}