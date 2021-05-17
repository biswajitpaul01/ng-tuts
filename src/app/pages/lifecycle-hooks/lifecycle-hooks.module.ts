import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing.module';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { LifecycleHooksChildComponent } from './lifecycle-hooks-child/lifecycle-hooks-child.component';


@NgModule({
  declarations: [
    LifecycleHooksComponent,
    LifecycleHooksChildComponent
  ],
  imports: [
    CommonModule,
    LifecycleHooksRoutingModule
  ]
})
export class LifecycleHooksModule { }
