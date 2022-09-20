import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  public menuProp :Array<Menu>=[{
    id:'1', 
    titre:'Tableau de bord',
    icon:'fa-solid fa-table-columns',
    url: 'graphs'
  },
  {
    id:'2', 
    titre:'Gerer Services',
    icon:'fa-solid fa-gears',
    url: ''
 },
  {
    id:'3', 
    titre:'Utilisateurs',
    icon:'fa-solid fa-users',
    url: 'persons'

  },
  {
    id:'4', 
    titre:'Departements',
    icon:'fa-solid fa-house-laptop',
    url: 'departements'

  },
  {
    id:'5', 
    titre:'Equipes',
    icon:'fa-solid fa-people-group',
    url: 'teams'
    
  },
  {
    id:'6', 
    titre:'Demandes',
    icon:'fa-solid  fa-table-cells',
    url: 'requests'
    
  }
]


constructor(
  private router : Router
){}
ngOnInit():void{
}
navigate(url:any):void{
  this.router.navigate(url);
}
}
