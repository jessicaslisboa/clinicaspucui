import { ExameModule } from './exames/exames.module';
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
import { ReceitaCreateComponent } from './receitas/receita-create/receita-create.component';
import { ExameSolicitarComponent } from './exames/exame-solicitar/exame-solicitar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    UsuarioCreateComponent,
    UsuarioListComponent,
    UsuarioEditComponent,
    LoginComponent,


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
    ExameModule,
    AppRoutingModule,
  ],
  entryComponents:[],
  providers: [UsuarioService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
