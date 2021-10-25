import { ExameRoutingModule } from './exames.routing.modules';
import { ExameService } from './shared/exame.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ExameSolicitarComponent } from './exame-solicitar/exame-solicitar.component';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ExameRoutingModule
  ],
  exports:[],
  declarations:[
    ExameSolicitarComponent
  ],
  providers:[ExameService]
})
export class ExameModule {}
