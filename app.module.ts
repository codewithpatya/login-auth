import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact/contact.component';

import {HttpClientModule} from '@angular/common/http'
import { ContactService } from './backend/contact.service';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';

import { FormsModule } from "@angular/forms";
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule
    
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
