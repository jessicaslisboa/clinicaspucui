import { ConsultaService } from './../shared/consulta.service';
import { AgendaService } from './../../agendas/shared/agenda.service';
import { Component, OnInit } from '@angular/core';
import { Agenda } from 'src/app/agendas/shared/agenda';
import { Usuario } from 'src/app/usuarios/shared/usuario';
import { Consulta } from '../shared/consulta';
import { UsuarioService } from 'src/app/usuarios/shared/usuario.service';
import { PacienteService } from 'src/app/pacientes/shared/paciente.service';
import { Paciente } from 'src/app/pacientes/shared/paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas-create',
  templateUrl: './consultas-create.component.html',
  styleUrls: ['./consultas-create.component.css']
})
export class ConsultasCreateComponent implements OnInit {

  consulta: Consulta = new Consulta();

  pacientes : Array<Paciente>;

  agendas: Array<Agenda>;

  constructor(
    private pacienteService: PacienteService,
    private agendaService: AgendaService,
    private consultaService: ConsultaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.agendaService.listAll().subscribe(
      dados => this.agendas = dados
    )
    this.pacienteService.listAll().subscribe(
      dados => this.pacientes = dados
    )
  }

  submit(){
    this.consulta.realizda = false;
    this.consultaService.salvar(this.consulta).subscribe(res => {
      this.router.navigate(['/']);
    })

  }

}
