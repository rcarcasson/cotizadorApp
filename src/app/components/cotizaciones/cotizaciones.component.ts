import { Component } from '@angular/core';

export interface Cotizaciones {
  codigo: number;
  fecha: number;
  referencia: string;
  total: number;
}

const COTIZACIONES: Cotizaciones[] = [
  {codigo: 1, fecha: 1, referencia: 'Cotización 1', total: 1},
  {codigo: 2, fecha: 2, referencia: 'Cotización 2', total: 2},
  {codigo: 3, fecha: 3, referencia: 'Cotización 3', total: 3},
  {codigo: 4, fecha: 4, referencia: 'Cotización 4', total: 4},
  {codigo: 5, fecha: 5, referencia: 'Cotización 5', total: 5},
  {codigo: 6, fecha: 6, referencia: 'Cotización 6', total: 6},
  {codigo: 7, fecha: 7, referencia: 'Cotización 7', total: 7},
  {codigo: 8, fecha: 8, referencia: 'Cotización 8', total: 8}
];

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styles: []
})
export class CotizacionesComponent {
  columnas: string[] = ['Código', 'Fecha', 'Referencia', 'Total'];
  misDatos = COTIZACIONES;

  constructor() { }

}
