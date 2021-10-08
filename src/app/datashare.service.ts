import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  public ShowNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public HideEmployee: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
