import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario:Usuario = new Usuario;

  constructor(private usuariosService: UsuarioService) { }

  ngOnInit() {
  }

  login(){
    this.usuariosService.logar(this.usuario);
  }
}
