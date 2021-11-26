// Exercice 3 :
// créer et exporter 3 actions creators avec createAction

import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo.model";

// - type: UPDATE_NEWTODO (mettre à jour le champ), value: valeur saisie
// - type: ADD_TODO (insère une nouvelle todo au tableau), todo: todo à créer
// - type: REMOVE_TODO (supprimer une todo du tableau), todo: todo à supprimer

export const updateNewTodo = createAction('UPDATE_NEWTODO', props<{value: string}>());
export const addTodo = createAction('ADD_TODO', props<{todo: Todo}>());
export const removeTodo = createAction('REMOVE_TODO', props<{id: number}>());
