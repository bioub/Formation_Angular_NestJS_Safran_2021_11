import { NgModule } from '@angular/core';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodosComponent,
    TodoFormComponent,
    TodosListComponent,
    TodoItemComponent
  ],
  imports: [
    SharedModule,
    TodosRoutingModule,
    FormsModule,
  ],
  exports: [
    // TodosComponent
  ]
})
export class TodosModule { }
