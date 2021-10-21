import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './usuarios/login/login.component';
import { UsuarioEditComponent } from './usuarios/usuario-edit/usuario-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsuarioCreateComponent } from './usuarios/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';


const routes: Routes = [

  { path: '', component: HomeComponent,
    canActivate: [AuthGuard]},

  { path: 'login', component: LoginComponent},

  { path: 'usuarios', component: UsuarioListComponent,
    canActivate: [AuthGuard]},

  { path: 'usuarios/novo', component: UsuarioCreateComponent,
    canActivate: [AuthGuard]},

  { path: 'usuarios/:id/edit', component: UsuarioEditComponent,
    canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
