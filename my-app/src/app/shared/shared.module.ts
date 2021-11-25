import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { MultistatebuttonComponent } from './multistatebutton/multistatebutton.component';
import { SelectComponent } from './select/select.component';
import { KebabCasePipe } from './kebab-case.pipe';



@NgModule({
  declarations: [
    ClockComponent,
    MultistatebuttonComponent,
    SelectComponent,
    KebabCasePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
    MultistatebuttonComponent,
    SelectComponent,
    KebabCasePipe,

    CommonModule,
  ]
})
export class SharedModule { }
