import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';
import { ExameSolicitarComponent } from './exame-solicitar/exame-solicitar.component';



const routes: Routes = [

  { path: 'exames', component: ExameSolicitarComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExameRoutingModule { }
