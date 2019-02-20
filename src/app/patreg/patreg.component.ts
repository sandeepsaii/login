import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-patreg',
  templateUrl: './patreg.component.html',
  styleUrls: ['./patreg.component.css']
})
export class PatregComponent {
  
  primaryInsurance = this.insurance();
secondaryInsurance = this.insurance();
tertiaryInsurance = this.insurance();
public show:boolean = false;
public buttonName:any = 'Create New Patient';
public isCollapsedone = false;

 toggle() {
  this.show = !this.show;
  // CHANGE THE NAME OF THE BUTTON.
  if(this.show)  
    this.buttonName = "Hide Details";
  else
    this.buttonName = "Create New Patient";
  }

  constructor(private fb: FormBuilder){}
  Arrshow=[false,false,false,false,false,false,false,false]
  cnt:any = 0;
  whotoggle(value){
      this.Arrshow[value-1]=!this.Arrshow[value-1]
      this.cnt++;
      console.log(this.Arrshow,this.cnt)

  }
    //   if(value==1){
    //  this.whoshow = !this.whoshow;
    //   }else if(value == 2){
    //     this.conshow=!this.conshow
    //   }
    //   else if(value == 3){
    //     this.choshow=!this.choshow
    //   }
    //   else if(value == 4){
    //     this.empshow=!this.empshow
    //   }
    //   else if(value == 5){
    //     this.statshow=!this.statshow
    //   }
    //   else if(value == 6){
    //     this.miscshow=!this.miscshow
    //   }
    //   else if(value == 7){
    //     this.guashow=!this.guashow
    //   }
    //   else if(value == 8){
    //     this.insushow=!this.insushow
    //   }
      
   
  //  contoggle(value){

  //   this.conshow = !this.conshow;
  // }

insurance(){


   return this.fb.group({
        $class :  "iehr.Insurance" ,
        Insurance_Provider :  [""  ,Validators.required],
        Plan_Name :  [""  ,Validators.required],
        Policy_Number : [""  ,Validators.required],
        Effective_Date : [""  ,Validators.required],
        Group_Number :[""  ,Validators.required],
        Subscriber_Employer :  [""  ,Validators.required],
        SEAddress : this.fb.group({
          $class :  "iehr.ContactDetails" ,
          Address : [""  ,Validators.required],
          City :  [""  ,Validators.required],
          State :  [""  ,Validators.required],
          Postal_Code :  [""  ,Validators.required],
          Country :  [""  ,Validators.required],
          County :  [""  ,Validators.required],
          Mothers_Name :  [""  ,Validators.required],
          Emergency_Phone :  [""  ,Validators.required],
          Home_Phone : [""  ,Validators.required],
          Work_Phone : [""  ,Validators.required],
          Mobile_Phone : [""  ,Validators.required],
          Email :  [""  ,Validators.required],
          Trusted_Email : [""  ,Validators.required]
       }),
        Subscriber :  [""  ,Validators.required],

        Relationship :  [""  ,Validators.required],
        SAddress : this.fb.group({
          $class :  "iehr.ContactDetails",
          Address :  [""  ,Validators.required],
          City :  [""  ,Validators.required],
          State :  [""  ,Validators.required],
          Postal_Code :  [""  ,Validators.required],
          Country : [""  ,Validators.required],
          County :  [""  ,Validators.required],
          Mothers_Name :  [""  ,Validators.required],
          Emergency_Phone :  [""  ,Validators.required],
          Home_Phone :[""  ,Validators.required],
          Work_Phone : [""  ,Validators.required],
          Mobile_Phone : [""  ,Validators.required],
          Email :  [""  ,Validators.required],
          Trusted_Email :  [""  ,Validators.required]
       }),
        CoPay :  [""  ,Validators.required],
        Accept_Assignment :  [""  ,Validators.required],
        Secondary_Medicare_Type :  [""  ,Validators.required]
     
   })
}
public uRegister;
 ngOnInit(){
     this.uRegister=this.fb.group({
    $class :  "iehr.Addpatient",
    Newpatient : this.fb.group({
      $class :  "iehr.Patient" ,
      EMPI :  [ "" ,Validators.required],
      SSN :  [ "" ,Validators.required],
      First_Name :[ "" ,Validators.required],
      Last_Name :[""  ,Validators.required],
      Middle_Name :[ "" ,Validators.required],
      DOB : [ "" ,Validators.required],
      Sex : [ "" ,Validators.required],
      marital_status : [ ""],
      User_Defined : [""],
      Billing_Note : [""],
      External_ID : [""],
      prid :  [ "" ,Validators.required]
   }),
   patientrecord : this.fb.group({
      $class :  "iehr.PatientRecord",
      prid :  [ "" ,Validators.required],
      patientid :  [ "" ,Validators.required],
      insurance :  this.fb.array([
        this.primaryInsurance,this.secondaryInsurance,this.tertiaryInsurance
      ]),
      Contact :this.fb.group({
        $class :  "iehr.ContactDetails",
        Address : [ "" ,Validators.required]  ,
        City :  [ "" ,Validators.required] ,
        State : [ "" ,Validators.required]  ,
        Postal_Code : [ "" ,Validators.required]  ,
        Country : [ "" ,Validators.required]  ,
        County :  [ "" ,Validators.required] ,
        Mothers_Name : [ "" ,Validators.required]  ,
        Emergency_Phone : [ "" ,Validators.required]  ,
        Home_Phone : [ "" ,Validators.required],
        Work_Phone : [ "" ,Validators.required],
        Mobile_Phone : [ "" ,Validators.required],
        Email :  [ "" ,Validators.required] ,
        Trusted_Email :   [ "" ,Validators.required]
      }),
      employer :this.fb.group({
        $class :  "iehr.Employer",
        Industry :  [""  ,Validators.required],
        Occupation :   [""  ,Validators.required],
        Employer_Name :  [""  ,Validators.required],
        EmployerAddress : this.fb.group ({
          $class :  "iehr.ContactDetails",
          Address :  [""  ,Validators.required],
          City :  [""  ,Validators.required],
          State :  [""  ,Validators.required],
          Postal_Code :  [""  ,Validators.required],
          Country :  [""  ,Validators.required],
          County :   [""  ,Validators.required]
     })
    }),
      choices : this.fb.group({
        $class :  "iehr.Choices",
        Provider :   [""  ,Validators.required],
        Referring_Provider :   [""  ,Validators.required],
        Pharmacy :   [""  ,Validators.required],
        HIPAA_Notice_Received :  [""  ,Validators.required],
        Leave_Message_With :  [""  ,Validators.required],
        Allow_SMS : [""  ,Validators.required],
        Allow_Voice_Message : [""  ,Validators.required],
        Allow_Mail_Message :  [""  ,Validators.required],
        Allow_Email : [""  ,Validators.required],
        Allow_Immunization_Registry_Use :  [""  ,Validators.required],
        Allow_Immunization_Info_Sharing :  [""  ,Validators.required],
        Allow_Health_Information_Exchange :  [""  ,Validators.required],
        Allow_Patient_Portal :  [""  ,Validators.required],
        Care_Team :   [""  ,Validators.required],
        CMS_Portal_Login :   [""  ,Validators.required],
        Immunization_Registry_Status :   [""  ,Validators.required],
        Immunization_Registry_Status_Effective_Date :  [""  ,Validators.required],
        Publicity_Code :   [""  ,Validators.required],
        Publicity_Code_Effective_Date :  [""  ,Validators.required],
        Protection_Indicator : [""  ,Validators.required],
        Protection_Indicator_Effective_Date :  [""  ,Validators.required]
      }),
      stats : this.fb.group({
        $class :  "iehr.Stats",
        Language :   [""  ,Validators.required],
        Race :  [""  ,Validators.required],
        Financial_Review_Date :  [""  ,Validators.required],
        Homeless :   [""  ,Validators.required],
        Ethnicity :   [""  ,Validators.required],
        Migrant_Seasonal :   [""  ,Validators.required],
        Family_Size :   [""  ,Validators.required],
        Monthly_Income :   [""  ,Validators.required],
        VFC :   [""  ,Validators.required],
        Interpreter :   [""  ,Validators.required],
      Referral_Source :   [""  ,Validators.required],
        Religion :   [""  ,Validators.required],
      }),
      misc : this.fb.group({
        $class :  "iehr.Misc",
        Date_Deceased :  [""  ,Validators.required],
        Reason_Deceased :   [""  ,Validators.required]
      }),
      guardian : this.fb.group({
        $class :  "iehr.Guardian",
        Name :   [""  ,Validators.required],
        Relationship :   [""  ,Validators.required],
        Sex :  [""  ,Validators.required],
        GuardianAddress : this.fb.group({
          $class :  "iehr.ContactDetails",
          phone:"",
          Address :   [""  ,Validators.required],
          City :   [""  ,Validators.required],
          State :   [""  ,Validators.required],
          Postal_Code :   [""  ,Validators.required],
          Country :   [""  ,Validators.required],
          County :   [""  ,Validators.required],
          Mothers_Name :   [""  ,Validators.required],
          Emergency_Phone :   [""  ,Validators.required],
          Home_Phone : [""  ,Validators.required],
          Work_Phone :[""  ,Validators.required],
          Mobile_Phone : [""  ,Validators.required],
          Email :   [""  ,Validators.required],
          Trusted_Email :   [""  ,Validators.required]
       })
      })
  })
  })

   console.log(this.uRegister.value);
}
register(event){
  console.log(this.uRegister.value);
}
}




