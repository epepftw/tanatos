import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() background: string = "";
  @Input() heading: string = "";
  @Input() subtitle: string = "";
  @Input() height: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
