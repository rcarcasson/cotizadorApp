import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Cotizaciones } from '../models/cotizacion.model';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  data: any;
  constructor(private afs: AngularFirestore) {  }

  public agregarCotizacion(coti: Cotizaciones) {
    this.data = JSON.parse(JSON.stringify(coti));
    this.data.codigo = Number(this.data.codigo);
    this.data.total = Number(this.data.total);
    this.afs.collection('cotizaciones').add(this.data);
  }
}
