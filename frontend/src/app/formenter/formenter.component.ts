import { Component, OnInit } from '@angular/core';
import {FormlistService} from '../formlist.service';
import {FormschemaService} from '../formschema.service';
import { SenddataService } from '../senddata.service';
interface inputfeild{
  name:string;
  type:string;
  id:number;
}
interface myforms{
  _id:string;
  title:string;
  feilds:inputfeild[];
}
@Component({
  selector: 'app-formenter',
  templateUrl: './formenter.component.html',
  styleUrls: ['./formenter.component.css']
})
export class FormenterComponent implements OnInit {
  stat?:any;
  formstruct?:any[];
  formschema:myforms={
    _id:'',
    title: '',
    feilds: [],
  };
  vals:string[];
  constructor(private fls:FormlistService,private fss:FormschemaService,private sds:SenddataService) {
   this.vals=[];
   }


  ngOnInit(): void {
    this.fls.sendList().subscribe((data)=>{
      console.log(data);
      this.formstruct=data;
  });
  }
  getFormStruct(a:any){
    this.fss.sendSchema(a).subscribe((data)=>{
      console.log(data[0]);
      for(let i=0;i<data[0].feilds.length;i++){
        this.vals.push("");
      }
      this.formschema=data[0];
    });
  }
  sendFormData(){
    let a:any={
      title:this.formschema.title,
      formid:this.formschema._id,
      data:[]
    }
      for(let i=0;i<this.formschema.feilds.length;i++){
          let b={name:this.formschema.feilds[i].name,value:this.vals[i]};
          a.data.push(b);
        }
      // console.log(a);
       this.sds.sendData(a).subscribe((data)=>{
        this.stat="success"
        console.log(data);
       })
    }

  showdict(){
    if(this.vals){
    console.log(this.vals);
    }

  }
}

