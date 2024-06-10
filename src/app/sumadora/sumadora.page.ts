import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {

  constructor() { }

  numero1: number = 0;
  numero2: number = 0;
  resultado: string="-";

  sumar(){
    this.resultado = (this.numero1 + this.numero2).toString();
  }

  ngOnInit() {
  }

}
