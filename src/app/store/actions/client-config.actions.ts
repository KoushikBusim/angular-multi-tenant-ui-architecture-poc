import { createAction, props } from '@ngrx/store';

export const loadClientConfig = createAction(
  '[Client] Load Config',
  props<{ clientId: string }>()
);

export const loadClientConfigSuccess = createAction(
  '[Client] Load Config Success',
  props<{ clientId: string; config: any }>()
);

export const loadClientConfigFailure = createAction(
  '[Client] Load Config Failure',
  props<{ error: any }>()
);

export const resetClientConfig = createAction('[Client] Reset Config');
