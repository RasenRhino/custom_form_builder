import { Component, OnInit } from '@angular/core';
import { FormlistService } from '../formlist.service';
import {GensheetService} from '../gensheet.service';
@Component({
  selector: 'app-gensheet',
  templateUrl: './gensheet.component.html',
  styleUrls: ['./gensheet.component.css']
})
export class GensheetComponent implements OnInit {
  formlist!:any[];
  temp!:any;
  stat!:any;
  constructor(private fls:FormlistService,private gs:GensheetService) { }

  ngOnInit(): void {
    this.fls.sendList().subscribe((data)=>{

      this.formlist=data;
      console.log(data);
  });

}
  gensheet(a:any){
    console.log(a);
    let b={"title":a};
    this.temp=b;
  }
  genmysheet(){
    this.gs.gensheet(this.temp).subscribe((data)=>{
      console.log(data);
    });
    this.stat="your sheet will be ready in a while"
  }
}
