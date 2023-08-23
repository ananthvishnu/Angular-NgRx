import { createSelector } from "@ngrx/store"

//? Define a basic selector to extract the 'counter' slice of state
export const selectCount = (state: { counter: number }) => state.counter;

//? Define a derived selector using createSelector
export const selectDoubleCount = createSelector(
    selectCount,
    (counterValue: number) => counterValue * 2
);
