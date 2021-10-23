import { ReceitaMedicamento } from './../shared/receita-medicamento';
import { MedicamentoService } from './../../medicamentos/shared/medicamento.service';
import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/medicamentos/shared/medicamento';

@Component({
  selector: 'app-receita-create',
  templateUrl: './receita-create.component.html',
  styleUrls: ['./receita-create.component.css']
})
export class ReceitaCreateComponent implements OnInit {

  medicamentoReceita : ReceitaMedicamento  = new ReceitaMedicamento();
  medicamentos : Array<Medicamento>;
  medicamentosReceita: Array<ReceitaMedicamento> = Array<ReceitaMedicamento>();

  constructor(
    private medicamentoService:MedicamentoService,
  ) { }

  ngOnInit() {
    this.medicamentoService.listAll().subscribe(dados => this.medicamentos = dados);
  }

  adicionar(){
    this.medicamentosReceita.push(this.medicamentoReceita);
  }

  remover(medicamentoReceita: ReceitaMedicamento){
    this.medicamentosReceita = this.medicamentosReceita.filter(item => item !== medicamentoReceita);
  }

  emitir(){

  }

  imprimir(){

  }

}
