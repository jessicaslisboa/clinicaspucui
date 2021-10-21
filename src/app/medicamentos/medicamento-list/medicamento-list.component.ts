import { MedicamentoService } from './../shared/medicamento.service';
import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../shared/medicamento';

@Component({
  selector: 'app-medicamento-list',
  templateUrl: './medicamento-list.component.html',
  styleUrls: ['./medicamento-list.component.css']
})
export class MedicamentoListComponent implements OnInit {

  medicamentos : Array<Medicamento>;
  term:string;

  constructor(private medicamentoService: MedicamentoService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.medicamentoService.listAll()
    .subscribe(dados => this.medicamentos = dados)
  }

  remove(codigo: number){
    this.medicamentoService.remover(codigo).subscribe(res => {
      this.medicamentos = this.medicamentos.filter(item => item.codigo !== codigo);
    })
  }
}
