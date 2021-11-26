import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  // newTodo: Todo = {
  //   title: '',
  //   completed: false,
  // };

  @Input() title = '';
  @Output() titleChange = new EventEmitter<string>();
  @Output() add = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  onTitleChange(title: string) {
    this.titleChange.emit(title);
  }

  onSubmit() {
    this.add.emit({id: Math.random(), title: this.title, completed: false});
  }
}
