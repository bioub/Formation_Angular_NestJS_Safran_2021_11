import { State } from "./core.reducer";

export function countSelector(state: State) {
  return state.count;
}

// réserver createSelector aux memoizeSelector
// ex: filter un tableau...
// export const countSelector = createSelector((state: State) => state.count);
