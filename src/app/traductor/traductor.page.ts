import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {

  constructor() { }

  numero1: number = 0;

  resultado: string = "-";

  traducir(){
    
    
    function numeroALetras(numero: number): string {
      const unidades = ['Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve'];
      const especiales = ['Diez', 'Once', 'Doce', 'Trece', 'Catorce', 'Quince', 'Dieciséis', 'Diecisiete', 'Dieciocho', 'Diecinueve'];
      const decenas = ['', '', 'Veinte', 'Treinta', 'Cuarenta', 'Cincuenta', 'Sesenta', 'Setenta', 'Ochenta', 'Noventa'];
      const centenas = ['', 'Ciento', 'Doscientos', 'Trescientos', 'Cuatrocientos', 'Quinientos', 'Seiscientos', 'Setecientos', 'Ochocientos', 'Novecientos'];
    
      if (numero < 10) {
        return unidades[numero];
      } else if (numero < 20) {
        return especiales[numero - 10];
      } else if (numero < 100) {
        let textoDecenas = decenas[Math.floor(numero / 10)];
        let textoUnidades = (numero % 10) > 0 ? ' y ' + unidades[numero % 10] : '';
        return textoDecenas + textoUnidades;
      } else if (numero === 100) {
        return 'Cien';
      } else if (numero < 1000) {
        let textoCentenas = centenas[Math.floor(numero / 100)];
        let resto = numero % 100;
        let textoResto = (resto > 0) ? ' ' + numeroALetras(resto) : '';
        return textoCentenas + textoResto;
      } else if (numero === 1000) {
        return 'Mil';
      }
      else {
        return 'Número fuera de rango';
      }
    }
    
    // Ejemplo de uso:
    this.resultado = numeroALetras(this.numero1);
    
  }

  ngOnInit() {
  }

}
