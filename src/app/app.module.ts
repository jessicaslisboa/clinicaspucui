import { AuthGuard } from './guards/auth.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PacientesModule } from './pacientes/pacientes.module';
import { MedicamentoModule } from './medicamentos/medicamentos.module';
import { ConsultaModule } from './consultas/consultas.module';
import { AgendaModule } from './agendas/agendas.module';
import { UsuarioCreateComponent } from './usuarios/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuarios/usuario-edit/usuario-edit.component';
import { LoginComponent } from './usuarios/login/login.component';
import { UsuarioService } from './usuarios/shared/usuario.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    UsuarioCreateComponent,
    UsuarioListComponent,
    UsuarioEditComponent,
    LoginComponent,
    ConfirmModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    PacientesModule,
    MedicamentoModule,
    AgendaModule,
    ConsultaModule,
    AppRoutingModule,
  ],
  entryComponents:[ConfirmModalComponent],
  providers: [UsuarioService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
