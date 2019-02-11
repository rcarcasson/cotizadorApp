import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nueva-cotizacion',
  templateUrl: './nueva-cotizacion.component.html',
  styleUrls: []
})
export class NuevaCotizacionComponent implements OnInit {

  public forma: FormGroup;

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<NuevaCotizacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
      this.forma = fb.group({
        codigo: '',
        referencia: '',
        fecha: '',
        total: ''
      });
     }

  ngOnInit() {
  }

}
