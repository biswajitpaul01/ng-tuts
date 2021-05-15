import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesComponent } from './custom-pipes.component';

const routes: Routes = [
    {
        path: '',
        component: CustomPipesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPipesRoutingModule { }
