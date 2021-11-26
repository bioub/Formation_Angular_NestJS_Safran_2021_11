import { createAction, props } from "@ngrx/store";

export const increment = createAction('INCREMENT', props<{
  step: number
}>());
