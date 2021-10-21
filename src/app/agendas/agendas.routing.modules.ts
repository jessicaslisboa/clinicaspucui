import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { AgendaCreateComponent } from './agenda-create/agenda-create.component';
import { AgendaEditComponent } from './agenda-edit/agenda-edit.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';



const routes: Routes = [

  { path: 'agendas', component: AgendaListComponent,canActivate: [AuthGuard]},
  { path: 'agendas/novo', component: AgendaCreateComponent,canActivate: [AuthGuard]},
  { path: 'agendas/:id/edit', component: AgendaEditComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
