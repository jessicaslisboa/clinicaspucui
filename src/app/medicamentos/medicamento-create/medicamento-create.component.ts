import { MedicamentoService } from './../shared/medicamento.service';
import { Router } from '@angular/router';
import { Medicamento } from './../shared/medicamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicamento-create',
  templateUrl: './medicamento-create.component.html',
  styleUrls: ['./medicamento-create.component.css']
})
export class MedicamentoCreateComponent implements OnInit {

  medicamento: Medicamento = new Medicamento();

  constructor(
    private router : Router,
    private medicamentoService: MedicamentoService
  ) { }

  ngOnInit() {
  }

  submit(){
    this.medicamentoService.salvar(this.medicamento).subscribe(res => {
      this.router.navigate(['/medicamentos']);
    })
  }

}
