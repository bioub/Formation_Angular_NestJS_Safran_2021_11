import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { MultistatebuttonComponent } from './multistatebutton/multistatebutton.component';
import { SelectComponent } from './select/select.component';
import { KebabCasePipe } from './kebab-case.pipe';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    ClockComponent,
    MultistatebuttonComponent,
    SelectComponent,
    CounterComponent,
    KebabCasePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
    MultistatebuttonComponent,
    SelectComponent,
    CounterComponent,
    KebabCasePipe,

    CommonModule,
  ]
})
export class SharedModule { }
