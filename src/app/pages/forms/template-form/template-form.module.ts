import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormRoutingModule } from './template-form-routing.module';
import { TemplateFormComponent } from './template-form.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    TemplateFormRoutingModule,
      FormsModule
  ]
})
export class TemplateFormModule { }
