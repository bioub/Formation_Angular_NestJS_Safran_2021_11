import { GlobalState } from "src/app/state.model";

export function countSelector(state: GlobalState) {
  return state.core.count;
}

// réserver createSelector aux memoizeSelector
// ex: filter un tableau...
// export const countSelector = createSelector((state: State) => state.count);
