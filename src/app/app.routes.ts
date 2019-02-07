import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { InicioComponent } from './components/inicio/inicio.component';

const app_routes: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'productos', component: ProductosComponent },
    { path: 'cotizaciones', component: CotizacionesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];


export const APP_ROUTING = RouterModule.forRoot(app_routes);
