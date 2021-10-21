import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuarios/shared/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

}
