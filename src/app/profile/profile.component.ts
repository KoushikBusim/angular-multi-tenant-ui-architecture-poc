import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectClientConfig } from '../store/selectors/client-config.selectors';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports: [CommonModule],
})
export class ProfileComponent {
  config$ = this.store.select(selectClientConfig);

  constructor(private store: Store) {}

  trackByField(index: number, field: string): string {
    return field;
  }
}
