import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebFormsRoutingModule } from './web-forms-routing.module';
import { WebFormsComponent } from './web-forms.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WebFormsComponent
  ],
  imports: [
    CommonModule,
    WebFormsRoutingModule,
    FormsModule
  ]
})
export class WebFormsModule { }
