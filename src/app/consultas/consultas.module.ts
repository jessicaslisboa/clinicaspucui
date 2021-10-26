import { ConsultaService } from './shared/consulta.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConsultaRoutingModule } from './consultas.routing.modules';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { ConsultasCreateComponent } from './consultas-create/consultas-create.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ConsultaEditComponent } from './consulta-edit/consulta-edit.component';



@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ConsultaRoutingModule
  ],
  exports:[ConsultaListComponent],
  declarations:[
    ConsultaListComponent,
    ConsultasCreateComponent,
    ConsultaEditComponent
  ],
  providers:[ConsultaService]
})
export class ConsultaModule {}
