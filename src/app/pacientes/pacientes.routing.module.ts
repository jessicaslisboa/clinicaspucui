import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteViewComponent } from './paciente-view/paciente-view.component';



const routes: Routes = [

  { path: 'pacientes', component: PacienteListComponent},
  { path: 'pacientes/novo', component: PacienteCreateComponent},
  { path: 'pacientes/:id', component: PacienteViewComponent},
  { path: 'pacientes/:id/edit', component: PacienteEditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
