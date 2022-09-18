import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GensheetService {

  constructor(private http:HttpClient) {

   }
   gensheet(a:any):Observable<any>{
    return this.http.post("http://localhost:4444/gensheet",a)
   }
}
