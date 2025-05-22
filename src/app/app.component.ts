// src/app/app.component.ts

import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // 👈 THIS makes it a standalone component
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
