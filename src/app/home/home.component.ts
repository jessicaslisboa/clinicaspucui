import { ConsultaService } from './../consultas/shared/consulta.service';
import { Component, OnInit } from '@angular/core';
import { Consulta } from '../consultas/shared/consulta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  consultas = Array<Consulta>();
  term: string;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.consultaService.listAll()
    .subscribe(dados => this.consultas = dados)
  }


  cancelar(){

  }

}
