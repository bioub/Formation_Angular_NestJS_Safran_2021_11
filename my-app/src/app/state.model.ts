import { CoreState } from './core/store/core.reducer';
import { TodosState } from './todos/store/todos.reducer';
import { UsersState } from './users/store/users.reducer';

export interface GlobalState {
  core: CoreState;
  todos: TodosState;
  users: UsersState;
}

export const initialState: GlobalState = {
  core: {
    count: 0,
  },
  todos: {
    newTodo: 'Beurre',
    items: [
      {
        id: 1,
        title: 'Pain',
        completed: false,
      },
      {
        id: 2,
        title: 'Lait',
        completed: true,
      },
    ],
  },
  users: {
    loading: false,
    items: [],
  }
};
