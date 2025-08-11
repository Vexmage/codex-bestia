import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary">
      <span class="logo">Codex Bestia</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/monsters">Monsters</a>
    </mat-toolbar>
    <main class="container">
      <router-outlet />
    </main>
  `,
  styles: [`
    .spacer { flex: 1 }
    .container { padding: 1rem; max-width: 1100px; margin: 0 auto; }
    .logo { font-weight: 600; letter-spacing: .3px; }
  `]
})
export class AppComponent {}
