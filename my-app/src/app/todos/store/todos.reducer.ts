import { Action } from "@ngrx/store";
import { Todo } from "../todo.model";

export interface TodosState {
  newTodo: string;
  items: Todo[]
}

const initialState: TodosState = {
  newTodo: 'Acheter du p...',
  items: [{
    id: 1,
    title: 'Pain',
    completed: false,
  }, {
    id: 2,
    title: 'Lait',
    completed: true,
  }],
};


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
export const todosReducer = (state: TodosState, action: Action) => (state as any);
