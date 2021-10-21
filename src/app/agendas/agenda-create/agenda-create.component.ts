import { AgendaService } from './../shared/agenda.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuarios/shared/usuario';
import { Agenda } from '../shared/agenda';
import { UsuarioService } from 'src/app/usuarios/shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-create',
  templateUrl: './agenda-create.component.html',
  styleUrls: ['./agenda-create.component.css']
})
export class AgendaCreateComponent implements OnInit {

  agenda : Agenda = new Agenda();
  medicos: Array<Usuario>;
  MEDICO_COD = 2;

  constructor(
    private router : Router,
    private agendaService : AgendaService,
    private usuarioService : UsuarioService
  ) { }

  ngOnInit() {
    this.listMedicos();
  }

  listMedicos(){
    this.usuarioService.listUsuarioPorPefil(this.MEDICO_COD)
    .subscribe(dados => this.medicos = dados)
  }

  submit(){
    //TODO validar se já tem agenda cadastrada
    this.agenda.disponivel =true;
    this.agendaService.salvar(this.agenda).subscribe(res => {
      this.router.navigate(['/agendas']);
    })
  }
}
