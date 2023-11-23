import { Injectable } from '@angular/core';
import * as QRCode from 'qrcode-generator';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {
  generateQRCode(data: string): string {
    const typeNumber = 4; // You can adjust this according to your needs
    const errorCorrectionLevel = 'L';
    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData(data);
    qr.make();
    return qr.createDataURL(10, 0);
  }
}