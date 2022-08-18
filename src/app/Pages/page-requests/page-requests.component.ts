import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-page-requests',
  templateUrl: './page-requests.component.html',
  styleUrls: ['./page-requests.component.css']
})
export class PageRequestsComponent implements OnInit {
  requests?: Request[]; 
  constructor(private requestService: RequestService) { }
  ngOnInit(): void {
  this.retrieveAll();
  }
  retrieveAll():void
  {
    this.requestService.getAllRequests()
    .subscribe({
      next: (data) => {
     //   this.requests = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
