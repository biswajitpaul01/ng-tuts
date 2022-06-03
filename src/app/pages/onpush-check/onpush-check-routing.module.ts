import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemDetailsComponent } from './blog-item-details/blog-item-details.component';
import { OnpushCheckComponent } from './onpush-check.component';

const routes: Routes = [
    {
        path: '',
        component: OnpushCheckComponent,
        children: [
            {
                path: ':id',
                component: BlogItemDetailsComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnpushCheckRoutingModule { }
