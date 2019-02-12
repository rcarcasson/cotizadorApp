import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MiServicioService } from '../../services/mi-servicio.service';
import { Cotizaciones } from '../../models/cotizacion.model';


@Component({
  selector: 'app-nueva-cotizacion',
  templateUrl: './nueva-cotizacion.component.html',
  styleUrls: []
})
export class NuevaCotizacionComponent implements OnInit {

  public forma: FormGroup;
  private coti: Cotizaciones = new Cotizaciones;


  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<NuevaCotizacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private srvCot: MiServicioService) {
      this.forma = fb.group({
        codigo: ['', [Validators.required, Validators.minLength(1)]],
        referencia: ['', [Validators.required, Validators.minLength(5)]],
        fecha: ['', [Validators.required, Validators.minLength(5)]],
        total: ['', [Validators.required]]
     });
    }

  ngOnInit() {
  }

  clkCerrar(): void {
    this.dialogRef.close();
  }

  clkGuardar(frm: any): void {
    console.log(frm);
    this.coti.codigo = frm.codigo;
    this.coti.referencia = frm.referencia;
    this.coti.fecha = frm.fecha;
    this.coti.total = frm.total;

    this.srvCot.agregarCotizacion(this.coti);
    this.dialogRef.close();

  }

  errorCodigo() {
    console.log(this.forma.controls.codigo.errors);
    return this.forma.controls.codigo.hasError('required') ? 'Campo obligatorio' :
    this.forma.controls.codigo.hasError('minlength') ? 'Mínimo un caracter' : '';
  }
}
