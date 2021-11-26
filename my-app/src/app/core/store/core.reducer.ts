import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { increment } from './core.action';

export interface State {
  count: number;
}

export interface CounterAction {
  type: 'INCREMENT' | 'DECREMENT';
  payload: number;
}

const initialState: State = {
  count: 0,
};

// export function reducer(state = initialState, action: CounterAction): State {
//   console.log('reducer');

//   if (action.type === 'INCREMENT') {
//     return {
//       ...state,
//       count: state.count + action.payload,
//     };
//   }

//   return state;
// }

// export function countReducer(state = initialState.count, action: Action): number {
//   if (action.type === 'INCREMENT') {
//     return state + 1;
//   }

//   return state;
// }

export const countReducer = createReducer(
  initialState.count,
  on(increment, (state, action) => state + action.step),
);

export const reducers: ActionReducerMap<State> = {
  count: countReducer,
};
