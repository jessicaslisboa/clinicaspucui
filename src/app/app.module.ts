
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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    UsuarioCreateComponent,
    UsuarioListComponent,
    UsuarioEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PacientesModule,
    MedicamentoModule,
    AgendaModule,
    ConsultaModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
