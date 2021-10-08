import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationtypeService {
  url= 'http://localhost:57632/Api/ConfigurationType';

  constructor(private http: HttpClient) { }

  getAllConfigurationTypes(): Observable<any[]> {
    return this.http.get<any>(this.url+'/GetConfigTypes');
  }
  createConfigurationtype (configurationtype: any) {
    return this.http.post(this.url+'/CreateConfigType', configurationtype);
  }
  deleteConfigurationType (configurationtype: any) {
    return this.http.delete(this.url+'/DeleteConfigType/'+configurationtype);
  }
}
