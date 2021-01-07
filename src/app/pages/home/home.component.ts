import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { ServicesService } from 'src/app/services/services/services.service';
import { TeamService } from 'src/app/services/team/team.service';
import { WorksService } from 'src/app/services/works/works.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home: any = {};
  services: any[] = [];
  works: any[] = [];
  team: any[] = [];

  constructor(private _home: HomeService, private _services: ServicesService, private _works: WorksService, private _team: TeamService) { }

  ngOnInit(): void {
    this.getHome();
    this.getServices();
    this.getWorks();
    this.getTeam();
  
  }

  getHome() {
    this._home.get_home().subscribe(
      (data: any) => {
        this.home = data.acf;
        console.log('#Home', this.home)
      }
    )
  }

  getServices() {
    this._services.get_services().subscribe(
      (data: any) => {
        this.services = data;
        console.log('#SERVICES', this.services)
      }
    )
  }

  getWorks() {
    this._works.get_works().subscribe(
      (data: any) => {
        this.works = data;
        console.log('#WORKS', this.works)
      }
    )
  }

  getTeam() {
    this._team.get_team().subscribe(
      (data: any) => {
        this.team = data;
        console.log('#TEAM', this.team)
      }
    )
  }
}
