import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CarritoComponent } from './components/carrito/carrito.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QrCodeService } from './services/qr-code.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [QrCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
