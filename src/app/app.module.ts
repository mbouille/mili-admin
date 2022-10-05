import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {DataService} from "./data.service";
import {ToasterModule} from "angular2-toaster";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HomeModule,
    HttpModule,
    FormsModule,
    ToasterModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
