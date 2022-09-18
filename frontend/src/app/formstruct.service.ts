import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormstructService {

  constructor(private http:HttpClient) { }
  sendForm(a:any){
    return this.http.post('http://localhost:4444/newform',a);
  }
}
