import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import {MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {


  persons?: Person[];
  constructor(private personService: PersonService) { }
  ngOnInit(): void {
  this.retrieveAll();
  }
  retrieveAll():void
  {
    this.personService.getAll()
    .subscribe({
      next: (data) => {
        this.persons = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  




}
