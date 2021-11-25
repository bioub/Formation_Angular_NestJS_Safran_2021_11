import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  // todos: Todo[] = [{
  //   id: 1,
  //   title: 'Pain',
  //   completed: false,
  // }, {
  //   id: 2,
  //   title: 'Lait',
  //   completed: true,
  // }];

  todos: Todo[] = (new Array(2000)).fill({}).map(() => ({
    id: Math.random(),
    title: 'ABC',
    completed: false,
  }));

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo: Todo) {
    // changement muable
    // this.todos.push(todo);

    // changement immuable
    this.todos = [...this.todos, todo];
  }

  removeTodo(todo: Todo) {
    // const index = this.todos.indexOf(todo);
    // // this.todos.splice(index, 1);

    // this.todos = [
    //   ...this.todos.slice(0, index),
    //   ...this.todos.slice(index + 1),
    // ];

    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }
}
