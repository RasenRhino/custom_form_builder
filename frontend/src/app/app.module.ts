import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormbuildComponent } from './formbuild/formbuild.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormenterComponent } from './formenter/formenter.component';
import { GensheetComponent } from './gensheet/gensheet.component';
import { CommonModule } from '@angular/common';
import { SlangComponent } from './slang/slang.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormbuildComponent,
    FormenterComponent,
    GensheetComponent,
    SlangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
