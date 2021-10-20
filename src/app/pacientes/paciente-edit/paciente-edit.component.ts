import { PacienteService } from './../shared/paciente.service';
import { Paciente } from './../shared/paciente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.css']
})
export class PacienteEditComponent implements OnInit {

  codigo:number;
  paciente: Paciente = new Paciente();

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.codigo = this.route.snapshot.params['id'];
    this.pacienteService.encontrar(this.codigo).subscribe((data: Paciente)=>{
      this.paciente = data;
    });
  }

  submit(){
    this.pacienteService.editar(this.codigo, this.paciente).subscribe(res => {
      console.log('Post updated successfully!');
      this.router.navigate(['/pacientes']);
    })

  }
}
