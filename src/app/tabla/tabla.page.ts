import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  constructor() { }

  numero1: number=0;

  tabla = [1,2,3,4,5,6,7,8,9,10,11,12,13];

  ngOnInit() {
  }

}
