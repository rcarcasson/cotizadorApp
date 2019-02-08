import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';

// Rutas
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    CotizacionesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
