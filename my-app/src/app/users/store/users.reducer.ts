import { createReducer, on } from "@ngrx/store";
import { initialState } from "src/app/state.model";
import { User } from "../shared/user.model";
import { fetchUsers, fetchUsersSuccess } from "./users.action";

export interface UsersState {
  loading: boolean;
  items: User[];
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


export const usersReducer = createReducer(initialState.users,
  on(fetchUsers, (state, action) => ({...state, loading: true})),
  on(fetchUsersSuccess, (state, action) => ({...state, loading: false, items: action.users})),
);
