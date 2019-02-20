import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup,FormControl,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, 
  IconsModule} from 'angular-bootstrap-md';
  import {Router} from '@angular/router';
//import {MatDialog} from '@angular/material';
  // Angular Forms Modules


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(public fb: FormBuilder,private router:Router) { }
  username: string;
  password: string;
  registerForm:FormGroup;
  todaytime;
  public isUserAuthenticated = false;
  public isUserLoggedIn = false;
  public isLoading = false;
  newUser = false;

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["profile"]);
    }else {
      alert("Invalid credentials");
    }
  }
  

  ngOnInit() {
  

    this.registerForm = this.fb.group({
    // $class:"orgparticipant.Addparticipant",
    //  user: this.fb.group({
    //   $class: "orgparticipant.hie",
    OrganisationID: ['', Validators.required],
    OrganisationName: ['', Validators.required],
    OrganisationCode: ['', Validators.required],
    OrganisationType: ['', Validators.required],
    OrganisationCounty: ['', Validators.required],
    OrganisationCountry:['', Validators.required],
    ParentOrganisationID: ['', Validators.required],
    ContactPerson: ['', Validators.required],
    AddressLine1:['', Validators.required],
    AddressLine2:['', Validators.required],
    CityName:['', Validators.required],
    StateCode:['', Validators.required],
    ZipCode:['', Validators.required],
    ContactPhone:['', Validators.required],
    EmailID:['', Validators.required],
    Fax:['', Validators.required],
    WebsiteURL:['',Validators.required],
    TIN:['', Validators.required],
    CCN:['', Validators.required],
    SSN:['', Validators.required],
    NPI:['', Validators.required],
    EIN:['', Validators.required],
    IsInternal:['', Validators.required],
    IsActive:['', Validators.required],
    CreatedDate:this.todaytime,
    ModifiedDate: this.todaytime,
    ProviderCommercialNumber:['', Validators.required],
    LocationNumber:['', Validators.required],
    NCPDPNumber:['', Validators.required],
    OtherIdentifier:['', Validators.required],
    ProviderUPINNumber:['', Validators.required],
    StateLicenseNumber:['', Validators.required]
  })
  
  }
  toggleSignPage() {
  	this.newUser = true;
  }
  register(){
  	console.log(this.registerForm.value);
  }

}


