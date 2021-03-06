import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgendaService } from './shared/agenda.service';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { AgendaEditComponent } from './agenda-edit/agenda-edit.component';
import { AgendaCreateComponent } from './agenda-create/agenda-create.component';
import { AgendaRoutingModule } from './agendas.routing.modules';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    AgendaRoutingModule
  ],
  exports:[],
  declarations:[
    AgendaCreateComponent,
    AgendaEditComponent,
    AgendaListComponent
  ],
  providers:[AgendaService]
})
export class AgendaModule {}
