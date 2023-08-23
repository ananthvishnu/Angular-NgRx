//? Import necessary modules from Angular
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

//? Import Store from NgRx
import { Store } from '@ngrx/store';

//? Import the AsyncPipe from Angular common module
import { AsyncPipe } from '@angular/common';

//? Import custom selectors
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

//? Define a component using the Component decorator
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports:[AsyncPipe]//? Note: Imports should not be used in @Component decorator
})
export class CounterOutputComponent  {
  //? Declare observable properties
  count$!: Observable<number>;
  doubleCount$!: Observable<number>

  constructor(private store: Store<{counter:number}>){
   //? Select the 'counter' slice of state from the store
    this.count$ = store.select(selectCount)
    this.doubleCount$ = store.select(selectDoubleCount)
  }
}
