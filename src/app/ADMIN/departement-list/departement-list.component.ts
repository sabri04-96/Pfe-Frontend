import { Component, OnInit, Output } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {

  departments?: Departement[];
  constructor(private departementService: DepartementService) { }
  ngOnInit(): void {
  this.retrieveAll();
  }
  retrieveAll():void
  {
    this.departementService.getAllDepartement()
    .subscribe({
      next: (data) => {
        this.departments = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}

