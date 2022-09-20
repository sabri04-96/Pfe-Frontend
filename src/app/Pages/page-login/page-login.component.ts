import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  public username = "";
  public password = "";

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    this.loginService.login({username: this.username, password: this.password}).subscribe({
      next: (response: any) => {
        sessionStorage.setItem("jwttoken", response.jwttoken);
        this.router.navigateByUrl(`/`);
        console.log(response.jwttoken)
      }
    });
  }
  
}
