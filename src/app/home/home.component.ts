import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public isCollapsed = [];
    public isColl = [];
 docinfo:any=[];
 
  infos:any=[];
 
  constructor() {
   
      this.docinfo=[{"docname":"Dr. Yazuvendra Nihal","Designation":"MBBS","Specialist":"General Physician","Experience":"5","Contact":"875874845","Address":"hyd"},
      {"docname":"Dr. Donald Christopher","Designation":"MD","Specialist":"General Physician","Experience":"6","Contact":"784584165","Address":"wgl"},
      {"docname":"Dr. Musharaf Mastan Malik","Designation":"MBBS","Specialist":"Neurologist","Experience":"5","Contact":"954621574","Address":"delhi"},
      {"docname":"Dr. Mumtaz Naziria","Designation":"MD","Specialist":"General Physician","Experience":"8","Contact":"987451212","Address":"kanpur"},
      {"docname":"Dr. Venkateshwarlu","Designation":"MBBS","Specialist":"Dentist","Experience":"9","Contact":"987458747","Address":"hyd"},
      {"docname":"Dr. Harish Chandra Prasad","Designation":"MD","Specialist":"Child Specialist","Experience":"4","Contact":"875874845","Address":"indore"},
      {"docname":"Dr. Gangasagar Venkat Ramana","Designation":"MBBS","Specialist":"Orthopaedic","Experience":"5","Contact":"878745549","Address":"banglore"},
      {"docname":"Dr. Harmapreet Kaur Singh","Designation":"MD","Specialist":"General Physician","Experience":"6","Contact":"987451258","Address":"chennai"},
      {"docname":"Dr. Chatureshwar Pujan","Designation":"MBBS","Specialist":"Heart Surgeon","Experience":"9","Contact":"5464121547","Address":"mumbai"}]

   }

     changeStatus(index){
        if(this.isColl[index] == 0){
            this.isColl[index] = 1
        }else{
            for(let i=0;i<this.isColl.length;i++){
                this.isCollapsed[i] = 1;
                this.isColl[i] = 1;
            }
            this.isColl[index] = 0;
        }
    }

  ngOnInit() {
  }



  profile(id,i){
    alert(id);
    alert(i)
    this.infos=this.docinfo[i];


  }

  // receiveMessage($event) {
  //   let message = $event
  //   console.log('iam from the child',message)
  // }

}
