import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipesRoutingModule } from './custom-pipes-routing.module';
import { CustomPipesComponent } from './custom-pipes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomPipesComponent,
  ],
  imports: [
    CommonModule,
    CustomPipesRoutingModule,
    FormsModule
  ]
})
export class CustomPipesModule { }
