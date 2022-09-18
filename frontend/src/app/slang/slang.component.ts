import { Component, OnInit } from '@angular/core';
import {GetslangService} from '../getslang.service';
@Component({
  selector: 'app-slang',
  templateUrl: './slang.component.html',
  styleUrls: ['./slang.component.css']
})
export class SlangComponent implements OnInit {
  mainlist!:any[];
  slanglist?:any[];
  showslangs:boolean;
  constructor(private gsl:GetslangService) {
    this.showslangs=true;
  }

  ngOnInit(): void {
    this.gsl.getslang().subscribe((data)=>{
      this.mainlist=data;
    });
  }
  showslang(a:any){

    for(let  i=0;i<this.mainlist.length;i++){
      if(this.mainlist[i]["city"]==a){
        this.slanglist=this.mainlist[i]["slangs"];
      }
    }
    this.showslangs=false;
  }
}


