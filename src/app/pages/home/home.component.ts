import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home: any = {};

  constructor(private _home: HomeService) { }

  ngOnInit(): void {
    this.getHome();
  }

  getHome() {
    this._home.get_home().subscribe(
      (data: any) => {
        this.home = data.acf;
        console.log('#Home', this.home.subtitle)
      }
    )
  }

}
