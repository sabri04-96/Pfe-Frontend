import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';
const baseUrl = 'http://localhost:8080/accessmanager';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(baseUrl+'/Persons');
  }
}
