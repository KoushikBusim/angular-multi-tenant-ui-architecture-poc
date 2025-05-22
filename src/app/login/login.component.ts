import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadClientConfig } from '../store/actions/client-config.actions';
import {
  selectClientConfigLoading,
  selectClientConfigError,
} from '../store/selectors/client-config.selectors';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule],
})
export class LoginComponent {
  constructor(private router: Router, private store: Store) {}

  loading$ = this.store.select(selectClientConfigLoading);
  error$ = this.store.select(selectClientConfigError);

  selectClient(clientId: string) {
    this.store.dispatch(loadClientConfig({ clientId }));
    this.router.navigate([`/${clientId}/dashboard`]);
  }
}
