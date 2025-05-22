import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { clientConfigReducer } from './app/store/reducers/client-config.reducer';
import { ClientConfigEffects } from './app/store/effects/client-config.effects';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ clientConfig: clientConfigReducer }),
    provideEffects([ClientConfigEffects]),
  ],
});
