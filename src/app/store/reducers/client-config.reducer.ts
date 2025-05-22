import { createReducer, on } from '@ngrx/store';
import * as ClientConfigActions from '../actions/client-config.actions';

export interface ClientConfigState {
  clientId: string | null;
  config: any | null;
  loading: boolean;
  error: any;
}

export const initialState: ClientConfigState = {
  clientId: null,
  config: null,
  loading: false,
  error: null,
};

export const clientConfigReducer = createReducer(
  initialState,

  // On Init
  on(ClientConfigActions.loadClientConfig, (state, { clientId }) => ({
    ...state,
    clientId,
    loading: true,
    error: null,
  })),

  // API returned success
  on(
    ClientConfigActions.loadClientConfigSuccess,
    (state, { clientId, config }) => ({
      ...state,
      clientId,
      config,
      loading: false,
      error: null,
    })
  ),

  // API failed
  on(ClientConfigActions.loadClientConfigFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Reset to initial state (e.g. logout)
  on(ClientConfigActions.resetClientConfig, () => ({
    ...initialState,
  }))
);
