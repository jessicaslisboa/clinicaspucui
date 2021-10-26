import { ReceitaCreateComponent } from './receita-create/receita-create.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ReceitasRoutingModule } from './receitas.routing.module';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReceitasRoutingModule
  ],
  exports:[],
  declarations:[
    ReceitaCreateComponent
  ],
  providers:[]
})
export class ReceitasModule {}
