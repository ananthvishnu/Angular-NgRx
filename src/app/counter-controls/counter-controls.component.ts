// Import necessary modules from Angular
import { Component } from '@angular/core';

// Import Store from NgRx
import { Store } from '@ngrx/store';

//? Import the increment and decrement actions created earlier
import { increment,decrement } from '../store/counter.action';
//import { IncrementAction } from '../store/counter.action'
@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

   //? Dispatch the increment action to the store with a value of 2
  increment() {
    this.store.dispatch(increment({value:2}));
  }

   //? Dispatch the decrement action to the store with a value of 2
  decrement() {
    this.store.dispatch(decrement({value:2}))
  }
}
