import { AgendaService } from './../shared/agenda.service';
import { Component, OnInit } from '@angular/core';
import { Agenda } from '../shared/agenda';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.css']
})
export class AgendaListComponent implements OnInit {

  agendas : Array<Agenda>;
  term: string;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.agendaService.listAll()
    .subscribe(dados => this.agendas = dados)
  }

  remove(codigo: number){
    this.agendaService.remover(codigo).subscribe(res => {
      this.agendas = this.agendas.filter(item => item.codigo !== codigo);
    })
  }
}
