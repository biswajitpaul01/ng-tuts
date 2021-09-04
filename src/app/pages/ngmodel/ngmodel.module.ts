import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgmodelRoutingModule } from './ngmodel-routing.module';
import { NgmodelComponent } from './ngmodel.component';


@NgModule({
  declarations: [
    NgmodelComponent
  ],
  imports: [
    CommonModule,
    NgmodelRoutingModule
  ]
})
export class NgmodelModule { }
