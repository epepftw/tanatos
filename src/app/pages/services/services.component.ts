import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() icon: string = "";
  @Input() title: string = "";
  @Input() description: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}


