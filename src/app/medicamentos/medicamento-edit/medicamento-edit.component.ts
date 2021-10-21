import { MedicamentoService } from './../shared/medicamento.service';
import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../shared/medicamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicamento-edit',
  templateUrl: './medicamento-edit.component.html',
  styleUrls: ['./medicamento-edit.component.css']
})
export class MedicamentoEditComponent implements OnInit {

  codigo:number;
  medicamento: Medicamento = new Medicamento();

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private medicamentoService : MedicamentoService,
  ) { }

  ngOnInit() {
    this.codigo = this.route.snapshot.params['id'];
    this.medicamentoService.encontrar(this.codigo).subscribe((data: Medicamento)=>{
      this.medicamento = data;
    });
  }

  submit(){
    this.medicamentoService.editar(this.codigo, this.medicamento)
    .subscribe(res => {
      this.router.navigate(['/medicamentos']);
    })
  }

}
