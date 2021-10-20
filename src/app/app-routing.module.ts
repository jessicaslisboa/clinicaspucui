import { UsuarioEditComponent } from './usuarios/usuario-edit/usuario-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsuarioCreateComponent } from './usuarios/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';


const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'usuarios', component: UsuarioListComponent},
  { path: 'usuarios/novo', component: UsuarioCreateComponent},
  { path: 'usuarios/:id/edit', component: UsuarioEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
