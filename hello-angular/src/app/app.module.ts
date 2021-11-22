import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CounterComponent } from './counter/counter.component';
import { Ex1HelloworldComponent } from './ex1-helloworld/ex1-helloworld.component';
import { Ex2MultistatebuttonComponent } from './ex2-multistatebutton/ex2-multistatebutton.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserFormComponent,
    CounterComponent,
    Ex1HelloworldComponent,
    Ex2MultistatebuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
