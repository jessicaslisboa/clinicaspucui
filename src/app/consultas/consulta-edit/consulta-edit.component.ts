import { PacienteService } from './../../pacientes/shared/paciente.service';
import { ConsultaService } from './../shared/consulta.service';
import { Component, OnInit } from '@angular/core';
import { Consulta } from '../shared/consulta';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from 'src/app/agendas/shared/agenda.service';
import { Agenda } from 'src/app/agendas/shared/agenda';

@Component({
  selector: 'app-consulta-edit',
  templateUrl: './consulta-edit.component.html',
  styleUrls: ['./consulta-edit.component.css']
})
export class ConsultaEditComponent implements OnInit {


  codigo: number;
  consulta: Consulta = new Consulta();
  agendas: Array<Agenda>;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private consultaService: ConsultaService,
    private agendaService : AgendaService,
  ) { }

  ngOnInit() {
    this.codigo = this.route.snapshot.params['id'];
    this.consultaService.encontrar(this.codigo).subscribe((data: Consulta)=>{
      this.consulta = data;
    });
    this.agendaService.listAll().subscribe(
      dados => this.agendas = dados
    )
  }

  submit(){
    this.consultaService.editar(this.codigo, this.consulta)
    .subscribe(res => {
      this.router.navigate(['/consultas']);
    })
  }
}
