import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing.module';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';


@NgModule({
  declarations: [
    LifecycleHooksComponent
  ],
  imports: [
    CommonModule,
    LifecycleHooksRoutingModule
  ]
})
export class LifecycleHooksModule { }
