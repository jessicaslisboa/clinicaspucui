import { ConsultaService } from './../shared/consulta.service';
import { Exame } from './../shared/exame';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-exame',
  templateUrl: './consulta-exame.component.html',
  styleUrls: ['./consulta-exame.component.css']
})
export class ConsultaExameComponent implements OnInit {

  exame: Exame = new Exame();
  exames: Array<Exame>;

  constructor(
    private consultaService : ConsultaService
  ) { }

  ngOnInit() {
    this.list();
  }

  list(){
    this.consultaService.listaExames().subscribe(dados => this.exames = dados);
  }

  solicitar(){

  }

}
