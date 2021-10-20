import { ConsultasCreateComponent } from './consultas-create/consultas-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaListComponent } from './consulta-list/consulta-list.component';



const routes: Routes = [

  { path: 'consultas', component: ConsultaListComponent},
  { path: 'consultas/novo', component: ConsultasCreateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
