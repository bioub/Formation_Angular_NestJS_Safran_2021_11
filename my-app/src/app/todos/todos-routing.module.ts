import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos.component';

const routes: Routes = [{
  path: 'todos',
  component: TodosComponent,
  data: {
    title: 'Ma TodoList',
    // roles: ['ROLE_ADMIN']
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
