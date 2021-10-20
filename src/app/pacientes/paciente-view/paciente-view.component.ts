import { PacienteService } from './../shared/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../shared/paciente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paciente-view',
  templateUrl: './paciente-view.component.html',
  styleUrls: ['./paciente-view.component.css']
})
export class PacienteViewComponent implements OnInit {

  codigo: number;
  paciente : Paciente = new Paciente();

  constructor(
    public pacienteService: PacienteService,

    private route: ActivatedRoute,

    private router: Router
  ) { }

  ngOnInit() : void {
    this.codigo = this.route.snapshot.params['id'];
    this.pacienteService.encontrar(this.codigo).subscribe((data: Paciente)=>{
      this.paciente = data;
    });
  }

}
