import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsListComponent } from './Components/persons-list/persons-list.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';

const routes: Routes = [  
  {
  path:'login',
  component:PageLoginComponent 
},
{
  path:'dashboard',
  component:DashboardComponent 
},
{path:'persons',
  component:PersonsListComponent}
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
