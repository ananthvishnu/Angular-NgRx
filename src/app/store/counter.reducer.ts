// Import more necessary functions from @ngrx/store
import { createReducer, on } from "@ngrx/store";

// Import the increment action created earlier
import { increment } from "./counter.action";

// Define an initial state for the counter
const initialState = 0;

// Create a reducer using createReducer function
export const counterReducer = createReducer(
    initialState,
    on(increment, (state: number, action) => state + action.value)
);

// export function counterReducer(state = initialState) {
//     return initialState,
//     on(increment, (state:number) => state + 1)

// }