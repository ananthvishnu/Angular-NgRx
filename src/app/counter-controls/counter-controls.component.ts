import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { increment } from '../store/counter.action'
@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

   // Dispatch the increment action to the store with a value of 2
  increment() {
    this.store.dispatch(increment({value: 2}));
  }

  decrement() {
  }
}
