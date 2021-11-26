import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
// import { UsersModule } from './users/users.module';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/store/core.reducer';
// import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    TodosModule,
    // UsersModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    AppRoutingModule, // le dernier à cause de la route **
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
