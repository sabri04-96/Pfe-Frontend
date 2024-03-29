import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-page-requests',
  templateUrl: './page-requests.component.html',
  styleUrls: ['./page-requests.component.css']
})
export class PageRequestsComponent implements OnInit {
 
  requests?: any[];
  constructor(private requestService: RequestService) { }
  ngOnInit(): void {
  this.retrieveAll();
  }
  retrieveAll():void
  {
    this.requestService.getAllRequests().subscribe({
      next: (data) => {
         //this.requests = data.filter(a => (a as Request).status !== 'SUBMITTED' && (a as Request).status !=='VALIDATED' && (a as Request).status !== 'ASSIGNED');
        this.requests = data.filter(a => (a as Request).status !== 'CANCELED' && (a as Request).status !== 'REJECTED');
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}

