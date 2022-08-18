import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementListComponent } from './ADMIN/departement-list/departement-list.component';
import { TeamListComponent } from './ADMIN/team-list/team-list.component';
import { PersonsListComponent } from './Components/persons-list/persons-list.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageRequestsComponent } from './Pages/page-requests/page-requests.component';

const routes: Routes = [  
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
      path:'departements',
      component:DepartementListComponent
    },
    {
      path:'teams',
      component:TeamListComponent
    }
  ]
  }, 
  {
  path:'requests',
  component:PageRequestsComponent
}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
