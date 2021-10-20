import { PacienteService } from './../shared/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../shared/paciente';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  pacientes : Array<Paciente>;

  constructor(private pacienteService : PacienteService) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.pacienteService.listAll().subscribe(dados => this.pacientes = dados)
  }

  remove(codigo : number){
    this.pacienteService.remover(codigo).subscribe(res => {
          this.pacientes = this.pacientes.filter(item => item.codigo !== codigo);
          console.log('Paciente deleted successfully!');
    })
  }

}
