import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CounterComponent } from './counter/counter.component';
import { Ex1HelloworldComponent } from './ex1-helloworld/ex1-helloworld.component';
import { Ex2MultistatebuttonComponent } from './ex2-multistatebutton/ex2-multistatebutton.component';
import { ClockComponent } from './clock/clock.component';
import { KebabCasePipe } from './kebab-case.pipe';
import { SelectComponent } from './select/select.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserFormComponent,
    CounterComponent,
    Ex1HelloworldComponent,
    Ex2MultistatebuttonComponent,
    ClockComponent,
    KebabCasePipe,
    SelectComponent,
    HighlightDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
