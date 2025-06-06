import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">Yash Kathrotiya</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <button class="btn btn-outline-primary" (click)="toggleTheme()">
            <i class="bi" [ngClass]="(isDarkTheme$ | async) ? 'bi-sun' : 'bi-moon'"></i>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      padding: 1rem 0;
    }
    .navbar-brand {
      font-weight: 600;
      color: var(--primary-color);
    }
    .nav-link {
      color: var(--text-color);
      margin: 0 0.5rem;
      transition: color 0.3s ease;
    }
    .nav-link:hover {
      color: var(--primary-color);
    }
    .btn-outline-primary {
      color: var(--primary-color);
      border-color: var(--primary-color);
    }
    .btn-outline-primary:hover {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      color: white;
    }
  `]
})
export class NavbarComponent {
  isDarkTheme$ = this.themeService.isDarkTheme$;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
} 