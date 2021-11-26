// Exercice 1
// Créer 2 selecteur pour récupérer les
// clé newTodo et items du state de Todos
// qui elles meme sont à la clé todos du state Global
// Le state global est défini dans app/state.model.ts

import { GlobalState } from "../../state.model";

// le state global ressemble à :
// {
//   core: {
//     count: 0,
//   },
//   todos: {
//     newTodo: 'Achete',
//     items: [],
//   }
// }

export function usersSelector(state: GlobalState) {
  return state.users;
}
