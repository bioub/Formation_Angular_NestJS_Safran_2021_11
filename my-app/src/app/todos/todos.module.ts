import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TodosComponent,
    TodoFormComponent,
    TodosListComponent,
    TodoItemComponent
  ],
  imports: [
    SharedModule,
    TodosRoutingModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
