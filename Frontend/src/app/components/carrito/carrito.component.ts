import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { CarritoService, Usuario } from 'src/app/services/carrito.service';
import { QrCodeService } from 'src/app/services/qr-code.service';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  template:`
  <div *ngIf="total">
    <p>Total a pagar: {{ total }}</p>
    <img [src]="qrCode" alt="Código QR">
    <button (click)="generarCodigoQR()">Generar Código QR</button>
  </div>
`,
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  productos: any;
  total: number;
  totalSatoshi: number;
  Saldo: number;
  qrCode: string = '';
  mensajePago: string = '';
  

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService,
    private qrCodeService: QrCodeService
  ) {
    this.total = 0;
    this.Saldo = 0;
    this.totalSatoshi = 0;
    this.productos = [];
  }
  
  // Función para convertir pesos colombianos a satoshis
  ngOnInit(): void {
    this.consultarSaldo();
    this.productos = this.carritoService.getProductos();
    this.total = this.productos.reduce((total:number,valor:any) => total+valor.precio,0);
    this.totalSatoshi = this.bitcoinASatoshis(this.total)
  }

  generateQRCode(): void {
    // Convert the total to a string before passing it to the service
    this.qrCode = this.qrCodeService.generateQRCode(this.total.toString());
  }

  bitcoinASatoshis(pesos: number): number {
    // Obtener el tipo de cambio actual desde una fuente externa o usar una tasa fija
    const tipoCambio = 10000000;
    // Calcula el valor en satoshis
    return pesos / tipoCambio * 10000000;
  }
  
  // Función para formatear un número como una cadena con un número específico de decimales
  formatearComoBitcoin(valor: number, decimales: number): string {
    return valor.toFixed(decimales);
  }
  

  public pagar() {
  
    this.carritoService.saldo(1).subscribe((saldoResponse) => {
      const usuario: Usuario = { nombre: saldoResponse.nombre, saldo: saldoResponse.saldo };
      this.carritoService
        .venta({ nombre: usuario.nombre, saldo: usuario.saldo - this.total }, 1)
        .subscribe((ventaResponse) => console.log(ventaResponse.mensaje));
  
      // Generate the QR code after receiving the user's saldo
      this.qrCode = this.qrCodeService.generateQRCode(this.total.toString());
  
      // Display the QR code
    });
  }


  consultarSaldo () {
    this.carritoService.saldo(1).subscribe(res=>{
      this.Saldo=res.saldo;
    });
  }
 
}