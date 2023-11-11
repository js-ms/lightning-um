import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  productos: any
  constructor(private productosService: ProductosService){
  }
  ngOnInit(){
    this.productosService.getAll().subscribe( p => {
      this.productos = p
    });
  }
  create(){
    this.productosService.post().subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  }

}
