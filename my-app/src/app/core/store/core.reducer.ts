import { createReducer, on } from '@ngrx/store';
import { initialState } from 'src/app/state.model';
import { increment } from './core.action';

export interface CoreState {
  count: number;
}

export const coreReducer = createReducer(
  initialState.core,
  on(increment, (state, action) => ({...state, count: state.count + action.step})),
);

