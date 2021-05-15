import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareDataComponent } from './share-data.component';

const routes: Routes = [
    {
        path: '',
        component: ShareDataComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareDataRoutingModule { }
