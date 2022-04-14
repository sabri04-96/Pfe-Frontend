import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

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
