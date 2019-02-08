import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  links = ['Cotizaciones', 'Productos'];
  activeLink = this.links[0];

  constructor() { }


}
