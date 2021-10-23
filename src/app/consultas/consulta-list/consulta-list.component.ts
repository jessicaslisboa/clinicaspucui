import { Component, OnInit } from '@angular/core';
import { Consulta } from '../shared/consulta';
import { ConsultaService } from '../shared/consulta.service';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.css']
})
export class ConsultaListComponent implements OnInit {

  consultas = Array<Consulta>();
  term: string;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.consultaService.listAll()
    .subscribe(dados => this.consultas = dados)
  }


  cancelar(codigo: number){
    this.consultaService.remover(codigo).subscribe(res => {
      this.consultas = this.consultas.filter(item => item.codigo !== codigo);
    })
  }
}
