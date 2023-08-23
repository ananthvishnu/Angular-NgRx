// Import necessary modules from Angular
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

// Define a component using the Component decorator
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports:[AsyncPipe]
})
export class CounterOutputComponent  {
  count$!: Observable<number>;

  constructor(private store: Store<{counter:number}>){
   // Select the 'counter' slice of state from the store
    this.count$ = store.select('counter')
    this.count$.subscribe()// Subscribe to the count$ observable

  }
}
