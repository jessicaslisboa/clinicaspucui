import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../shared/usuario.service';
import { Usuario } from './../shared/usuario';
import { Component, OnInit } from '@angular/core';
import { Perfil } from '../shared/perfil';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  codigo: number;
  usuario: Usuario = new Usuario();
  perfis:  Array<Perfil>;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.codigo = this.route.snapshot.params['id'];
    this.usuarioService.listPerfis().subscribe(dados => this.perfis = dados)
    this.usuarioService.encontrar(this.codigo).subscribe((data: Usuario)=>{
      this.usuario = data;
    });
  }

  submit(){
    this.usuarioService.editar(this.codigo, this.usuario)
    .subscribe(res => {
      this.router.navigate(['/usuarios']);
    })
  }
}
