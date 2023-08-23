//? Importing necessary modules and components
import { Component, OnInit } from '@angular/core';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { Store } from '@ngrx/store';
import { init } from './store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CounterOutputComponent, CounterControlsComponent],
})
export class AppComponent implements OnInit {
  //? Initializing the component
  ngOnInit(): void {
    //? Dispatching the init action when the component initializes
    this.store.dispatch(init());
  }

  //? Injecting the NgRx store into the component
  constructor(private store: Store) {}
}
