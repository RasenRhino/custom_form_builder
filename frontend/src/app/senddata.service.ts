import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SenddataService {

  constructor(private http:HttpClient) { }
  sendData(a:any):Observable<any>{
    return this.http.post("http://localhost:4444/formdata",a);
  }
}
