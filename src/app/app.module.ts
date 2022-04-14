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

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    DashboardComponent,
    MenuComponent,
    PersonsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
