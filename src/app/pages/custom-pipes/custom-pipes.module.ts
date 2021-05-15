import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipesRoutingModule } from './custom-pipes-routing.module';
import { CustomPipesComponent } from './custom-pipes.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomPipesComponent,
  ],
  imports: [
    CommonModule,
    CustomPipesRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CustomPipesModule { }
