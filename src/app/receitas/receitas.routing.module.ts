import { ReceitaCreateComponent } from './receita-create/receita-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';



const routes: Routes = [

  { path: 'receitas', component: ReceitaCreateComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitasRoutingModule { }
