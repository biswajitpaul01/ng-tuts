import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebFormsComponent } from './web-forms.component';

const routes: Routes = [
  {
    path: '',
    component: WebFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebFormsRoutingModule { }
