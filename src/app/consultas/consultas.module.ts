import { ConsultaService } from './shared/consulta.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConsultaRoutingModule } from './consultas.routing.modules';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { ConsultasCreateComponent } from './consultas-create/consultas-create.component';



@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ConsultaRoutingModule
  ],
  exports:[],
  declarations:[
    ConsultaListComponent,
    ConsultasCreateComponent,
  ],
  providers:[ConsultaService]
})
export class ConsultaModule {}
