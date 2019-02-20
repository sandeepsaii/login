import { Component , Output, EventEmitter,Input } from '@angular/core';
import {Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
//   title = 'loginhealth';
//    @Input() messageEvent = new EventEmitter<object>();
// 	bodycomponent=false
// 	singleobject;
// 	doctorlist;

// 	 object=[{'doctortype':'Immunologist','expereince':'','address':'','phoneno':'','fee':''},
// 	 {'doctortype':'Anesthesiologist','doctorname':'Dr.Yazuvendra Nihal','expereince':'','address':'','phoneno':'','fee':''},
// 	 {'doctortype':'Cardiologist','doctorname':'Dr.Palaniswami','expereince':'','address':'','phoneno':'','fee':''},
// 	 {'doctortype':'Dermatologist','doctorname':'Dr.Keerthi Palvancha','expereince':'','address':'','phoneno':'','fee':''}
// 	 ,{'doctortype':'Neurologist','doctorname':'Dr.Afzal Khuranna Khan','expereince':'','address':'','phoneno':'','fee':''}]

// constructor(public router:Router){

// }
// ngOnInit(){
// 	this.singleobject=null
// 	this.bodycomponent=false;

// }


//  onChange(newValue) {
//     console.log(newValue);
//     for (let i=0;i<this.object.length;i++){
//     	if(this.object[i].doctortype==newValue){
//     		this.bodycomponent=true
//     		console.log(this.object[i].doctorname)
//     		this.doctorlist=this.object[i].doctorname
//     		this.singleobject=this.object[i]
//     		console.log(this.singleobject[0])

//  		    this.messageEvent.emit(this.object[i])
//     	}

//     }
//     console.log(this.doctorlist)
// }
}
