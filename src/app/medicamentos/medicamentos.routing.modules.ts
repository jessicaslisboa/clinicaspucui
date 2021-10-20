import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoCreateComponent } from './medicamento-create/medicamento-create.component';
import { MedicamentoListComponent } from './medicamento-list/medicamento-list.component';
import { MedicamentoEditComponent } from './medicamento-edit/medicamento-edit.component';
import { MedicamentoViewComponent } from './medicamento-view/medicamento-view.component';



const routes: Routes = [

  { path: 'medicamentos', component: MedicamentoListComponent},
  { path: 'medicamentos/novo', component: MedicamentoCreateComponent},
  { path: 'medicamentos/:id', component: MedicamentoViewComponent},
  { path: 'medicamentos/:id/edit', component: MedicamentoEditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
