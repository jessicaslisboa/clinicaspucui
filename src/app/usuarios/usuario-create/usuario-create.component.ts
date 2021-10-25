import { Perfil } from './../shared/perfil';
import { UsuarioService } from './../shared/usuario.service';
import { Usuario } from './../shared/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = new Usuario();
  perfis:  Array<Perfil>;

  constructor(
    private router: Router,
    private usuarioService : UsuarioService
  ) { }

  ngOnInit() {
    this.listarPerfis();
  }

  listarPerfis(){
    this.usuarioService.listPerfis().subscribe(dados => this.perfis = dados)
  }

  submit(){
    this.usuarioService.salvar(this.usuario).subscribe(res => {
      this.router.navigate(['/usuarios']);
    })
  }

}
