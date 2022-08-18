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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    NgxFontAwesomeModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
