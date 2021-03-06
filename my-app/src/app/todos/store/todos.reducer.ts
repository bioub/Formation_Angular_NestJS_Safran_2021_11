import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "src/app/state.model";
import { Todo } from "../todo.model";
import { addTodo, removeTodo, updateNewTodo } from "./todos.action";

export interface TodosState {
  newTodo: string;
  items: Todo[]
}

// Exercice 4
// creer un reducer todosReducer avec createReducer
// traiter les 3 actions
// UPDATE_NEWTODO doit modifier la clé newTodo, en retournant un nouvel objet state (avec {... })
// ADD_TODO doit ajouter au tableau de manière immuable, en retournant un nouvel objet state (avec {... })
// REMOVE_TODO doit supprimer au tableau de manière immuable, en retournant un nouvel objet state (avec {... })
// Pour ADD_TODO ET REMOVE_TODO reprendre les lignes de todos.component.ts
// pour ADD_TODO, il y aura 2 niveau d'immuabilité:    {...state, todos: [...]}

// Remplacer la fonction suivante (state: TodosState, action: Action) => (state as any);
// par un createReducer
// export const todosReducer = (state = initialState.todos, action: Action) => (state as any);


export const todosReducer = createReducer(initialState.todos,
  on(updateNewTodo, (state, action) => ({...state, newTodo: action.value})),
  on(addTodo, (state, action) => ({...state, items: [...state.items, action.todo]})),
  on(removeTodo, (state, action) => ({...state, items: state.items.filter((t) => t.id !== action.id)})),
);
