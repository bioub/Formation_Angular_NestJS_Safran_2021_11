import { createAction, props } from "@ngrx/store";

export const increment = createAction('INCREMENT', props<{
  step: number
}>());

// export function increment(step = 1) {
//   return {
//     type: 'INCREMENT',
//     step: step,
//   };
// }
