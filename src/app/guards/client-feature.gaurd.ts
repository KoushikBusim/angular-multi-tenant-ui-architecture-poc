import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectClientConfig } from '../store/selectors/client-config.selectors';
import { map, take } from 'rxjs';

export const clientFeatureGuard = (featureKey: string): CanActivateFn => {
  return () => {
    console.log('🔥 clientFeatureGuard loaded');

    const store = inject(Store);
    const router = inject(Router);

    return store.select(selectClientConfig).pipe(
      take(1),
      map((config) => {
        if (config?.features?.standAlone?.[featureKey]) {
          return true;
        }
        router.navigate(['/not-available']);
        return false;
      })
    );
  };
};
