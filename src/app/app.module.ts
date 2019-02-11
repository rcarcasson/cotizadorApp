import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { ReactiveFormsModule } from '@angular/forms';


// Rutas
import { APP_ROUTING } from './app.routes';

import { NuevaCotizacionComponent } from './components/cotizaciones/nueva-cotizacion.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  entryComponents: [
    NuevaCotizacionComponent
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    CotizacionesComponent,
    NuevaCotizacionComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
