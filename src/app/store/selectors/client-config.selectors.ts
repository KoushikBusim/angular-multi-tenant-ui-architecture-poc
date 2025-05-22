import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientConfigState } from '../reducers/client-config.reducer';

export const selectClientConfigState =
  createFeatureSelector<ClientConfigState>('clientConfig');

export const selectClientConfig = createSelector(
  selectClientConfigState,
  (state) => state.config
);

export const selectClientId = createSelector(
  selectClientConfigState,
  (state) => state.clientId
);

export const selectClientConfigLoading = createSelector(
  selectClientConfigState,
  (state) => state.loading
);

export const selectClientConfigError = createSelector(
  selectClientConfigState,
  (state) => state.error
);
