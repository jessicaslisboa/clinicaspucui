import { Exame } from './../../consultas/shared/exame';
import { PacienteService } from './../../pacientes/shared/paciente.service';
import { Paciente } from './../../pacientes/shared/paciente';
import { ExameService } from './../shared/exame.service';
import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/consultas/shared/consulta.service';

@Component({
  selector: 'app-exame-solicitar',
  templateUrl: './exame-solicitar.component.html',
  styleUrls: ['./exame-solicitar.component.css']
})
export class ExameSolicitarComponent implements OnInit {

  pacientes: Array<Paciente>;
  paciente : Paciente = new Paciente();

  exame: Exame = new Exame();
  exames: Array<Exame>;
  examesSelecionados: Array<Exame> = new Array<Exame>();

  constructor(
    private exameService: ExameService,
    private pacienteService: PacienteService,
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.pacienteService.listAll().subscribe(dados => this.pacientes = dados);
    this.consultaService.listaExames().subscribe(dados => this.exames = dados);
  }

  adicionar(){
    this.examesSelecionados.push(this.exame);
  }

  remove(codigo:number){

  }

  submit(){

  }
}
