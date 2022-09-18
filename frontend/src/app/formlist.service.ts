import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormlistService {

  constructor(private http:HttpClient) {
  }
  sendList():Observable<any>{
    return this.http.get('http://localhost:4444/formlist');
  }

}
