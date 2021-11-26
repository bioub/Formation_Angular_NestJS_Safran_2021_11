import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GlobalState } from '../state.model';
import { addTodo, removeTodo, updateNewTodo } from './store/todos.action';
import { todosSelector } from './store/todos.selector';
import { Todo } from './todo.model';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {

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

  private subscription!: Subscription;

  constructor(private store: Store<GlobalState>) { }

  ngOnInit(): void {
    // Exercice 2
    // utiliser store.select pour vous abonner
    // au changement du state
    // au choix .subscribe ou | async
    this.subscription = this.store.select(todosSelector).subscribe((todos) => {
      this.todos = todos.items;
      this.newTodo = todos.newTodo;
    });
  }

  updateNewTodo(newTodo: string) {
    // this.newTodo = newTodo;
    // Exercice 5 :
    // remplacer la modif de newTodo par un dispatch
    this.store.dispatch(updateNewTodo({value: newTodo}))
  }

  addTodo(todo: Todo) {
    // changement muable
    // this.todos.push(todo);

    // changement immuable
    // this.todos = [...this.todos, todo];

    // Exercice 5 :
    // remplacer les modif du tableau par des dispatch
    this.store.dispatch(addTodo({todo: todo}))
  }

  removeTodo(todo: Todo) {
    // const index = this.todos.indexOf(todo);
    // // this.todos.splice(index, 1);

    // this.todos = [
    //   ...this.todos.slice(0, index),
    //   ...this.todos.slice(index + 1),
    // ];

    // this.todos = this.todos.filter((t) => t.id !== todo.id);

    // Exercice 5 :
    // remplacer les modif du tableau par des dispatch
    this.store.dispatch(removeTodo({id: (todo.id as number)}))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
