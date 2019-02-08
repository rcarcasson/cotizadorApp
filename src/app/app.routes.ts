import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';

const app_routes: Routes = [
    { path: 'productos', component: ProductosComponent },
    { path: 'cotizaciones', component: CotizacionesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'cotizaciones' }
];


export const APP_ROUTING = RouterModule.forRoot(app_routes);
