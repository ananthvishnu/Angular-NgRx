//? Import necessary functions and modules from @ngrx/store
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Counter] Init');

export const set = createAction('[Counter] Set', props<{ value: number }>());

//? Create an action using createAction function
export const increment = createAction(
  '[Counter] Increment', // Action type (a description for debugging)
  props<{ value: number }>() // Payload structure for the action
);

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
