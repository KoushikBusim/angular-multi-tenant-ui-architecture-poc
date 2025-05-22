import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { selectClientConfig } from '../store/selectors/client-config.selectors';
import { resetClientConfig } from '../store/actions/client-config.actions';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule, RouterModule],
})
export class DashboardComponent {
  config$ = this.store.select(selectClientConfig);

  constructor(private store: Store, private router: Router) {}

  getNavLinks(config: any): { label: string; path: string }[] {
    const clientId = config.clientId;
    const features = config.features.standAlone;
    const links = [];

    if (features.profileEditing) {
      links.push({ label: 'Profile', path: `/${clientId}/profile` });
    }
    if (features.analytics) {
      links.push({ label: 'Analytics', path: `/${clientId}/analytics` });
    }
    if (features.voiceTuning) {
      links.push({ label: 'Voice Tuning', path: `/${clientId}/voice-tuning` });
    }

    links.push({ label: 'Logout', path: 'logout' });

    return links;
  }

  handleClick(path: string) {
    if (path === 'logout') {
      this.logout();
    } else {
      this.router.navigateByUrl(path);
    }
  }

  logout() {
    this.store.dispatch(resetClientConfig());
    this.router.navigate(['/login']);
  }

  trackByLabel(index: number, item: any): string {
    return item.label;
  }
}
