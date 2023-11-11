import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any>{
    return this.http.get('http://localhost:3000/productos/');
  }

  post(): Observable<any>{
    return this.http.post('http://localhost:3000/productos/nuevo', {
      nombre: 'torta',
      descripcion: 'la mejor',
      img: 'assets/img/expresso.png',
      precio: 5000,
      cantidad: 2
    });
  }
}
