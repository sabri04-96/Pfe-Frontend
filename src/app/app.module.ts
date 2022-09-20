import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PersonsListComponent } from './Components/persons-list/persons-list.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { NgxFontAwesomeModule } from 'ngx-font-awesome';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { PageRequestsComponent } from './Pages/page-requests/page-requests.component';
import { DepartementListComponent } from './ADMIN/departement-list/departement-list.component';
import { TeamListComponent } from './ADMIN/team-list/team-list.component';
import { GraphsComponent } from './ADMIN/graphs/graphs.component';
import { NgChartsModule } from 'ng2-charts';
import { MenuUserComponent } from './Components/menu-user/menu-user.component';
import { DashboardUserComponent } from './Pages/dashboard-user/dashboard-user.component';
import { GraphUserComponent } from './User/graph-user/graph-user.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    DashboardComponent,
    MenuComponent,
    PersonsListComponent,
    HeaderComponent,
    PageRequestsComponent,
    DepartementListComponent,
    TeamListComponent,
    GraphsComponent,
    MenuUserComponent,
    DashboardUserComponent,
    GraphUserComponent,
  ],
  imports: [
    BrowserModule,
    
    NgChartsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    NgxFontAwesomeModule,
    FontAwesomeModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
