import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { MultistatebuttonComponent } from './multistatebutton/multistatebutton.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    ClockComponent,
    MultistatebuttonComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
    MultistatebuttonComponent,
    SelectComponent,

    CommonModule,
  ]
})
export class SharedModule { }
