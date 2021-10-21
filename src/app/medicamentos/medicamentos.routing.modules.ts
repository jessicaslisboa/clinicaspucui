import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoCreateComponent } from './medicamento-create/medicamento-create.component';
import { MedicamentoListComponent } from './medicamento-list/medicamento-list.component';
import { MedicamentoEditComponent } from './medicamento-edit/medicamento-edit.component';
import { MedicamentoViewComponent } from './medicamento-view/medicamento-view.component';
import { AuthGuard } from '../guards/auth.guard';



const routes: Routes = [

  { path: 'medicamentos', component: MedicamentoListComponent,canActivate: [AuthGuard]},
  { path: 'medicamentos/novo', component: MedicamentoCreateComponent,canActivate: [AuthGuard]},
  { path: 'medicamentos/:id', component: MedicamentoViewComponent,canActivate: [AuthGuard]},
  { path: 'medicamentos/:id/edit', component: MedicamentoEditComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
