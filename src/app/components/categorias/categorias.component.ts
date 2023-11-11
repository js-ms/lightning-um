import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  productos:any = [
    {
      nombre: 'p1',
      descripcion: 'd1',
      precio: 2000,
      cantidad: 5
    },
    {
      nombre: 'p2',
      descripcion: 'd2',
      precio: 3000,
      cantidad: 5
    },
    {
      nombre: 'p3',
      descripcion: 'd3',
      precio: 2000,
      cantidad: 5
    },
  ]
}
