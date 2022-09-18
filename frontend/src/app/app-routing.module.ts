import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormbuildComponent } from './formbuild/formbuild.component';
import {FormenterComponent} from './formenter/formenter.component';
import {GensheetComponent} from './gensheet/gensheet.component';
import {SlangComponent} from './slang/slang.component';
const routes: Routes = [
  {path:'formbuild',component:FormbuildComponent},
  {path:'formenter',component:FormenterComponent},
  {path:'gensheet',component:GensheetComponent},
  {path:'slang',component:SlangComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
