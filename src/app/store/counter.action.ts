//? Import necessary functions and modules from @ngrx/store
import { createAction, props } from '@ngrx/store';

//? Create an action to initialize the counter
export const init = createAction('[Counter] Init');

//? Create an action to set the counter value
export const set = createAction('[Counter] Set', props<{ value: number }>());

//? Create an action to increment the counter value
export const increment = createAction(
  '[Counter] Increment', 
  props<{ value: number }>()
);

//? Create an action to decrement the counter value
export const decrement = createAction(
  '[Counter] Decrement',
  props<{ value: number }>()
);

// export const INCREMENT = '[Counter] Increment'

// export class IncrementAction implements Action {
//     readonly type = INCREMENT;

//     constructor(public value: number) {}
// }

// export type CounterAction = IncrementAction
