import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  {component:HomeComponent,path:""},
  {component:CategoriasComponent,path:"categorias"},
  {component:CarritoComponent,path:"carrito"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
