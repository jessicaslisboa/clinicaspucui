import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteViewComponent } from './paciente-view/paciente-view.component';



const routes: Routes = [

  { path: 'pacientes', component: PacienteListComponent,canActivate: [AuthGuard]},
  { path: 'pacientes/novo', component: PacienteCreateComponent,canActivate: [AuthGuard]},
  { path: 'pacientes/:id', component: PacienteViewComponent,canActivate: [AuthGuard]},
  { path: 'pacientes/:id/edit', component: PacienteEditComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
