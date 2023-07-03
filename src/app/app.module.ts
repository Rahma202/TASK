import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent}from '../ComponentShared/home/home.component';
import {FeatureComponent }from '../ComponentShared/feature/feature.component';
import{ NavbarComponent}from '../ComponentShared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    HomeComponent,
    FeatureComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
