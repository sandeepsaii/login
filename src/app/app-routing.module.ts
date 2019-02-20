import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent} from './login/login.component';
import { PatregComponent } from './patreg/patreg.component';





const appRoutes: Routes = [

  { path:'',component:StartComponent },
  { path:'login',component:LoginComponent},
  { path:'home', component: HomeComponent },
  { path:'profile', component:ProfileComponent},
  {path:'start', component:StartComponent},
  {path:'patreg', component:PatregComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
