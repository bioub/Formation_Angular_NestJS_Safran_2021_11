import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [{
    id: 1,
    title: 'Pain',
    completed: false,
  }, {
    id: 2,
    title: 'Lait',
    completed: true,
  }];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
