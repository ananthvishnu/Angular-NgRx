//? Import more necessary functions from @ngrx/store
import { createReducer, on } from '@ngrx/store';

import { Action } from "@ngrx/store";
//import { CounterAction,INCREMENT, IncrementAction } from "./counter.action";

//? Import the increment action created earlier
import { decrement, increment, set } from './counter.action';

//? Define an initial state for the counter
const initialState = 0;

//? Create a reducer using createReducer function
export const counterReducer = createReducer(
    initialState,
    on(increment, (state: number, action) => state + action.value),
    on(decrement,(state:number,action) => state - action.value),
    on(set, (state:number,action) => action.value)
);




// export function counterReducer(state = initialState, action: CounterAction | Action ) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }

