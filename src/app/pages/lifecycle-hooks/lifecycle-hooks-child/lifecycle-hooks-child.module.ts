import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleHooksChildRoutingModule } from './lifecycle-hooks-child-routing.module';
import { LifecycleHooksChildComponent } from './lifecycle-hooks-child.component';


@NgModule({
  declarations: [
    LifecycleHooksChildComponent
  ],
  imports: [
    CommonModule,
    LifecycleHooksChildRoutingModule
  ]
})
export class LifecycleHooksChildModule { }
