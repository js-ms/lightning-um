import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios: any;

  constructor(
    private usuarioService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe((p) => {
      this.usuarios = p;
    });
  }
}
