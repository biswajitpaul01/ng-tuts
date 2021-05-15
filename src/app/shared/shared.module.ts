import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbertowordsPipe } from './pipes/numbertowords.pipe';



@NgModule({
  declarations: [
    NumbertowordsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbertowordsPipe
  ]
})
export class SharedModule { }
