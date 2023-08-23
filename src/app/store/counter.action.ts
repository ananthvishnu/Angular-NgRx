// Import necessary functions and modules from @ngrx/store
import { createAction, props } from "@ngrx/store";

// Create an action using createAction function
export const increment = createAction(
    '[Counter] Increment', // Action type (a description for debugging)
     props<{value: number}>() // Payload structure for the action
);
