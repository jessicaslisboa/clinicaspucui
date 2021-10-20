import { PacienteService } from '../shared/paciente.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../shared/paciente';

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit {

  paciente: Paciente = new Paciente();

  constructor(
    private router: Router,
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {}

  submit(){
    this.pacienteService.salvar(this.paciente).subscribe(res => {
      this.router.navigate(['/pacientes']);
    })
  }


}
