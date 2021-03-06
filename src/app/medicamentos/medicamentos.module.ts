import { MedicamentosRoutingModule } from './medicamentos.routing.modules';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MedicamentoViewComponent } from './medicamento-view/medicamento-view.component';
import { MedicamentoListComponent } from './medicamento-list/medicamento-list.component';
import { MedicamentoEditComponent } from './medicamento-edit/medicamento-edit.component';
import { MedicamentoCreateComponent } from './medicamento-create/medicamento-create.component';
import { MedicamentoService } from './shared/medicamento.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    MedicamentosRoutingModule
  ],
  exports:[],
  declarations:[
    MedicamentoCreateComponent,
    MedicamentoEditComponent,
    MedicamentoListComponent,
    MedicamentoViewComponent
  ],
  providers:[MedicamentoService]
})
export class MedicamentoModule {}
