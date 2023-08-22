import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';

bootstrapApplication(AppComponent, {
    providers: [provideStore()]
});
