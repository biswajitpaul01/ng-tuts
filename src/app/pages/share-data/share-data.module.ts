import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareDataRoutingModule } from './share-data-routing.module';
import { ShareDataComponent } from './share-data.component';
import { ShareDataFirstChildComponent } from './share-data-first-child/share-data-first-child.component';


@NgModule({
  declarations: [
    ShareDataComponent,
    ShareDataFirstChildComponent
  ],
  imports: [
    CommonModule,
    ShareDataRoutingModule
  ]
})
export class ShareDataModule { }
