import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { ProfileComponent } from './profile/profile.component';


// import { CalendarComponent } from './calendar/calendar.component';
// import {MbscModule} from '@mobiscroll/angular-lite';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { MapsComponent } from './maps/maps.component';
import { LoginComponent } from './login/login.component';
import { PatregComponent } from './patreg/patreg.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule,MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    ProfileComponent,
    MapsComponent,
    LoginComponent,
    PatregComponent
    
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
     MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    DlDateTimePickerDateModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
     
    
  ],
  exports:[
    CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule,
   MatFormFieldModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
