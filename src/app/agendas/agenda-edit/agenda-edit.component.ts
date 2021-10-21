import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/usuarios/shared/usuario';
import { UsuarioService } from 'src/app/usuarios/shared/usuario.service';
import { Agenda } from '../shared/agenda';
import { AgendaService } from '../shared/agenda.service';

@Component({
  selector: 'app-agenda-edit',
  templateUrl: './agenda-edit.component.html',
  styleUrls: ['./agenda-edit.component.css']
})
export class AgendaEditComponent implements OnInit {

  codigo: number;
  agenda: Agenda = new Agenda();
  medicos:  Array<Usuario>;
  MEDICO_COD = 2;


  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private agendaService : AgendaService,
    private usuarioService : UsuarioService
  ) { }

  ngOnInit() {
    this.codigo = this.route.snapshot.params['id'];
    this.usuarioService.listUsuarioPorPefil(this.MEDICO_COD).subscribe(dados => this.medicos = dados)
    this.agendaService.encontrar(this.codigo).subscribe((data: Agenda)=>{
      this.agenda = data;
    });

  }

  submit(){
    this.agendaService.editar(this.codigo, this.agenda)
    .subscribe(res => {
      this.router.navigate(['/angendas']);
    })
  }
}
