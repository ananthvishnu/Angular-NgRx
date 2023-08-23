//? Importing necessary modules and components
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

//? Importing NgRx functions for store and effects
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './app/store/counter.effects';

//? Bootstrapping the Angular application
bootstrapApplication(AppComponent, {
    //? Providing providers for the application
    providers: [
        //? Setting up the store with the counterReducer
        provideStore({ counter: counterReducer }),
        
        //? Setting up effects using CounterEffects
        provideEffects([CounterEffects])
    ]
});
