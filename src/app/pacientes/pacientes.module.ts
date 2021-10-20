import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PacienteViewComponent } from './paciente-view/paciente-view.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteCreateComponent } from "./paciente-create/paciente-create.component";
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteService } from './shared/paciente.service';
import { PacientesRoutingModule } from './pacientes.routing.module';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    PacientesRoutingModule
  ],
  exports:[],
  declarations:[
    PacienteCreateComponent,
    PacienteEditComponent,
    PacienteListComponent,
    PacienteViewComponent
  ],
  providers:[PacienteService]
})
export class PacientesModule {}
