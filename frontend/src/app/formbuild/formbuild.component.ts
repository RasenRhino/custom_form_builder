import { Component, OnInit } from '@angular/core';
import {FormstructService} from '../formstruct.service';
interface inputfeild{
  name:string;
  type:string;
  id:number;
}
interface plugList{
  sms:boolean;
  gensheet:boolean;
}
interface myforms{
  title:string;
  feilds:inputfeild[];
  plugin:plugList;
}
@Component({
  selector: 'app-formbuild',
  templateUrl: './formbuild.component.html',
  styleUrls: ['./formbuild.component.css']
})
export class FormbuildComponent implements OnInit {
  formtitle!: any;
  inptitle!:any;
  formid:number=0;
  pluginmap=new Map();

  formlist:myforms={
    title: '',
    feilds: [],
    plugin: {sms:false,gensheet:false},
  };
  constructor(private fs:FormstructService) {
  }

  ngOnInit(): void {
  }
  addInput(a:any){
    this.formlist.title=this.formtitle;
    this.formlist.title=this.formlist.title.trim();
    this.formlist.feilds.push({name:this.inptitle,type:a,id:this.formid});
    this.inptitle=' ';
    this.formid++;
  }
  addForm(){
    // this.http.post('http://localhost:4444/newform',this.formlist).subscribe((data)=>{
    //   console.log(data);
    // });
    this.fs.sendForm(this.formlist).subscribe((data)=>{
      console.log(data);
    });
    this.formlist={
      title: '',
      feilds: [],
      plugin: {sms:false,gensheet:false},
    };
    this.formtitle='';
    this.formid=0;
  }
  marker(){
    console.log(this.formlist);
  }

  }
