import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormschemaService {

  constructor(private http:HttpClient) {

   }
   sendSchema(a:any):Observable<any>{
    const url='http://localhost:4444/formstruct/'+a;
    return this.http.get(url);
  }
}
