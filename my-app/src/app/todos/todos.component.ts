import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  newTodo = '';

  todos: Todo[] = [{
    id: 1,
    title: 'Pain',
    completed: false,
  }, {
    id: 2,
    title: 'Lait',
    completed: true,
  }];

  // todos: Todo[] = (new Array(2000)).fill({}).map(() => ({
  //   id: Math.random(),
  //   title: 'ABC',
  //   completed: false,
  // }));

  constructor() { }

  ngOnInit(): void {
    // Exercice 5
    // utiliser store.select pour vous abonner
    // au changement du state
    // au choix .subscribe ou | async
  }

  updateNewTodo(newTodo: string) {
    this.newTodo = newTodo;
    // Exercice 2 :
    // remplacer la modif de newTodo par un dispatch
  }

  addTodo(todo: Todo) {
    // changement muable
    // this.todos.push(todo);

    // changement immuable
    this.todos = [...this.todos, todo];

    // Exercice 2 :
    // remplacer les modif du tableau par des dispatch
  }

  removeTodo(todo: Todo) {
    // const index = this.todos.indexOf(todo);
    // // this.todos.splice(index, 1);

    // this.todos = [
    //   ...this.todos.slice(0, index),
    //   ...this.todos.slice(index + 1),
    // ];

    this.todos = this.todos.filter((t) => t.id !== todo.id);

    // Exercice 2 :
    // remplacer les modif du tableau par des dispatch
  }
}
