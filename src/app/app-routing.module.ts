import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementListComponent } from './ADMIN/departement-list/departement-list.component';
import { GraphsComponent } from './ADMIN/graphs/graphs.component';
import { TeamListComponent } from './ADMIN/team-list/team-list.component';
import { PersonsListComponent } from './Components/persons-list/persons-list.component';
import { UserRequestListComponent } from './Components/user-request-list/user-request-list.component';
import { DashboardUserComponent } from './Pages/dashboard-user/dashboard-user.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageRequestsComponent } from './Pages/page-requests/page-requests.component';
import { GraphUserComponent } from './User/graph-user/graph-user.component';

const routes: Routes = [  
  {
    path:'userrequests',
    component:UserRequestListComponent
  },
  
  {
    path:'user',
    component:DashboardUserComponent, 
    children: 
    [  
   
      {
        path:'mygraph',
        component:GraphUserComponent
      },
  
  
    ]
  }, 

  {
  path:'login',
  component:PageLoginComponent 
  },      
 


  {
  path:'',
  component:DashboardComponent, 
  children: 
  [
    { path:'persons',
      component:PersonsListComponent
    },
    {
      path:'graphs',
      component:GraphsComponent
    },
    {
      path:'departements',
      component:DepartementListComponent
    },
    {
      path:'teams',
      component:TeamListComponent
    },
    
    {
      path:'requests',
      component:PageRequestsComponent
    }
 
  ]
  }, 
 
  



];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
