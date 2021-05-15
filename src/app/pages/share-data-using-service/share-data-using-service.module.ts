import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareDataUsingServiceRoutingModule } from './share-data-using-service-routing.module';
import { ShareDataUsingServiceComponent } from './share-data-using-service.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShareDataUsingServiceComponent
  ],
  imports: [
    CommonModule,
    ShareDataUsingServiceRoutingModule,
    FormsModule
  ]
})
export class ShareDataUsingServiceModule { }
