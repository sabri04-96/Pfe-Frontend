import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

 
  teams?: Team[];
  constructor(private teamService: TeamService) { }
  ngOnInit(): void {
  this.retrieveAll();
  }
  retrieveAll():void
  {
    this.teamService.getAllTeams()
    .subscribe({
      next: (data) => {
        this.teams = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}

