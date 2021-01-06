import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
 

  constructor() { }

  ngOnInit(): void {

  }

}
