import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-not-available',
  template:
    '<h2>🚫 Feature Not Available</h2><p>This feature is not enabled for your client.</p>',
})
export class NotAvailableComponent {}
