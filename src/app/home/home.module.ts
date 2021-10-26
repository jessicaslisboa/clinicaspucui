import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports:[],
  declarations:[

  ],
  providers:[]
})
export class HomeModule {}
