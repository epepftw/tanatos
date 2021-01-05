import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { ServicesService } from 'src/app/services/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home: any = {};
  services: any[] = [];

  constructor(private _home: HomeService, private _services: ServicesService) { }

  ngOnInit(): void {
    this.getHome();
    this.getServices();
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

}
