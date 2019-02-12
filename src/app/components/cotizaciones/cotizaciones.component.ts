import { Component } from '@angular/core';
import { NuevaCotizacionComponent } from './nueva-cotizacion.component';
import { MatDialog } from '@angular/material';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Cotizaciones } from '../../models/cotizacion.model';



@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styles: []
})
export class CotizacionesComponent {
  columnas: string[] = ['Código', 'Fecha', 'Referencia', 'Total'];
  private itemsCollection: AngularFirestoreCollection<Cotizaciones>;
  cotizaciones: Observable<Cotizaciones[]>;
  public misDatos;

  constructor(public dialog: MatDialog, private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Cotizaciones>('cotizaciones');
    this.cotizaciones = this.itemsCollection.valueChanges();
    this.misDatos = this.cotizaciones;
   }

  NuevaCotizacion() {
    const dialogRef = this.dialog.open(NuevaCotizacionComponent, {
      width: '350px'
    });
  }
}
