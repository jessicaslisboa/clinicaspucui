import { ConsultaService } from './../shared/consulta.service';
import { Component, OnInit } from '@angular/core';
import { Consulta } from '../shared/consulta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta-atendimento',
  templateUrl: './consulta-atendimento.component.html',
  styleUrls: ['./consulta-atendimento.component.css']
})
export class ConsultaAtendimentoComponent implements OnInit {

  codigo:number;
  consulta: Consulta = new Consulta();

  constructor(
    private consultaService : ConsultaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.codigo = this.route.snapshot.params['id'];
    this.consultaService.encontrar(this.codigo).subscribe((data: Consulta)=>{
      this.consulta = data;
    });
  }
}
