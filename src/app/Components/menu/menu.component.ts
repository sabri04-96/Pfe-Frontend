import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProp :Array<Menu>=[{
    id:'1', 
    titre:'Tableau de bord',
    icon:'',
    url: '',
    sousMenu:[
      {
        id:'10',
        titre:'Mes Demandes',
        icon:'',
        url: '',
      }
    ]
  },
  {
    id:'2', 
    titre:'Gerer Services',
    icon:'',
    url: '',
    sousMenu:[
      {
        id:'20',
        titre:'Bulk Provisionning',
        icon:'',
        url: '',
    
      },
      {
        id:'21',
        titre:'Acces WS',
        icon:'',
        url: '',
    
      }]

  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
