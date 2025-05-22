import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ClientConfigActions from '../actions/client-config.actions';
import { ClientConfigService } from '../../services/client-config.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ClientConfigEffects {
  constructor(
    private actions$: Actions,
    private clientService: ClientConfigService
  ) {}

  loadClientConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientConfigActions.loadClientConfig),
      mergeMap((action) =>
        this.clientService.loadConfig(action.clientId).pipe(
          map((config) =>
            ClientConfigActions.loadClientConfigSuccess({
              clientId: action.clientId,
              config,
            })
          ),
          catchError((error) =>
            of(ClientConfigActions.loadClientConfigFailure({ error }))
          )
        )
      )
    )
  );
}
