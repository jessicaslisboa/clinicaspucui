import { UsuarioService } from './../shared/usuario.service';
import { Usuario } from './../shared/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {


  usuarios : Array<Usuario>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.usuarioService.listAll()
    .subscribe(dados => this.usuarios = dados)
  }

  remove(codigo: number){
    this.usuarioService.remover(codigo).subscribe(res => {
      this.usuarios = this.usuarios.filter(item => item.codigo !== codigo);
    })
  }

}
