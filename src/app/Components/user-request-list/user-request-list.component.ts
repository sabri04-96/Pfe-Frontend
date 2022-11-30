import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-user-request-list',
  templateUrl: './user-request-list.component.html',
  styleUrls: ['./user-request-list.component.css']
})
export class UserRequestListComponent implements OnInit {

  requestoo?: any[];
  constructor(private requestService: RequestService) { }
  ngOnInit(): void {
  this.retrieveAll();
  }
  retrieveAll():void
  {
    this.requestService.getAllRequests().subscribe({
      next: (data) => {
         this.requestoo = data.filter(a => (a as Request).status !== 'SUBMITTED' && (a as Request).status !=='VALIDATED' && (a as Request).status !== 'ASSIGNED');
        //this.requests = data.filter(a => (a as Request).status !== 'CANCELED' && (a as Request).status !== 'REJECTED');
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
