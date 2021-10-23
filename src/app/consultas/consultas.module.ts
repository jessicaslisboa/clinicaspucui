import { ReceitaCreateComponent } from './../receitas/receita-create/receita-create.component';
import { ConsultaService } from './shared/consulta.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConsultaRoutingModule } from './consultas.routing.modules';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { ConsultasCreateComponent } from './consultas-create/consultas-create.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConsultaAtendimentoComponent } from './consulta-atendimento/consulta-atendimento.component';
import { ConsultaExameComponent } from './consulta-exame/consulta-exame.component';



@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ConsultaRoutingModule
  ],
  exports:[],
  declarations:[
    ConsultaListComponent,
    ConsultasCreateComponent,
    ConsultaAtendimentoComponent,
    ReceitaCreateComponent,
    ConsultaExameComponent
  ],
  providers:[ConsultaService]
})
export class ConsultaModule {}
