import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AllRecpieComponent } from './all-recpie/all-recpie.component';
import { DeteilsComponent } from './deteils/deteils.component';
import { EnteringComponent } from './entering/entering.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:'home',component:HomeComponent},
  {path:'all',component:AllRecpieComponent,
  // children:[{path:'deteilse/:p',component:DeteilsComponent}]
},
{path:'deteilse/:p',component:DeteilsComponent},
  {path:'add',component:AddComponent},
  {path:'enter',component:EnteringComponent},
  // {path:'login',component:LoginComponent},
  {path:'login/:d',component:LoginComponent},
  {path:'""',redirectTo:'/all',pathMatch :"full"},
  {path:'**',component:AllRecpieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
