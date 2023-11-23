import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Usuario {
  nombre: string;
  saldo: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos:Array<any> = []
  constructor(private http: HttpClient) { }
  // Agrega el método getProductos()
  public getProductos(): Array<any> {
    return this.productos;
  }
  public agregarProducto(producto:any){
    this.productos.push(producto);
  }

  venta(compra:Usuario, id:number): Observable<any>{
    return this.http.patch('http://localhost:3000/usuarios/' +id , compra
      );
  }

  saldo(id:number): Observable<any>{
    return this.http.get('http://localhost:3000/usuarios/'+id
      );
  }

}