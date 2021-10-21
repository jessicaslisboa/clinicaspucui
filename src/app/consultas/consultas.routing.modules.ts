import { ConsultasCreateComponent } from './consultas-create/consultas-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { AuthGuard } from '../guards/auth.guard';



const routes: Routes = [

  { path: 'consultas', component: ConsultaListComponent,canActivate: [AuthGuard]},
  { path: 'consultas/novo', component: ConsultasCreateComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
