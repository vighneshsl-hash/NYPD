import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
	<header class="absolute left-4 right-4 top-6 z-20 bg-transparent sm:left-8 sm:right-8 lg:left-[170px] lg:right-[170px] lg:top-[85px]">
		<div class="mx-auto max-w-6xl rounded-full bg-black/20 px-4 py-3 backdrop-blur lg:bg-transparent">
      <div class="flex items-center justify-between gap-3 lg:hidden">
        <span class="text-base font-semibold uppercase tracking-[0.08em]" [class.dark-mode-label]="isDarkText">Menu</span>
        <button
          type="button"
          class="menu-toggle"
          [class.dark-mode-btn]="isDarkText"
          aria-label="Toggle navigation"
          [attr.aria-expanded]="isMenuOpen"
          (click)="toggleMenu()">
          <span class="sr-only">Toggle navigation</span>
          <span class="bar" aria-hidden="true"></span>
          <span class="bar" aria-hidden="true"></span>
          <span class="bar" aria-hidden="true"></span>
        </button>
      </div>

			<nav class="mx-auto hidden max-w-6xl items-center justify-center gap-x-8 gap-y-2 py-1 text-center lg:flex lg:gap-x-24" aria-label="Primary">
				<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">Home</a>
				<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/aboutus" routerLinkActive="active-link">About us</a>
				<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/our-team" routerLinkActive="active-link">Our team</a>
				<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/events" routerLinkActive="active-link">Events</a>
				<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/magazine" routerLinkActive="active-link">Magazine</a>
				<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/gallery" routerLinkActive="active-link">Gallery</a>
				<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/contact-us" routerLinkActive="active-link">Contact us</a>
			</nav>

      <div *ngIf="isMenuOpen" class="mt-3 flex flex-col gap-3 rounded-2xl bg-black/80 px-4 py-4 text-center shadow-lg backdrop-blur lg:hidden" aria-label="Mobile navigation">
        <a class="nav-link block" [class.dark-mode]="false" routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
        <a class="nav-link block" [class.dark-mode]="false" routerLink="/aboutus" routerLinkActive="active-link" (click)="closeMenu()">About us</a>
        <a class="nav-link block" [class.dark-mode]="false" routerLink="/our-team" routerLinkActive="active-link" (click)="closeMenu()">Our team</a>
        <a class="nav-link block" [class.dark-mode]="false" routerLink="/events" routerLinkActive="active-link" (click)="closeMenu()">Events</a>
        <a class="nav-link block" [class.dark-mode]="false" routerLink="/magazine" routerLinkActive="active-link" (click)="closeMenu()">Magazine</a>
        <a class="nav-link block" [class.dark-mode]="false" routerLink="/gallery" routerLinkActive="active-link" (click)="closeMenu()">Gallery</a>
        <a class="nav-link block" [class.dark-mode]="false" routerLink="/contact-us" routerLinkActive="active-link" (click)="closeMenu()">Contact us</a>
      </div>
		</div>
	</header>
  `,
  styles: [`
    .nav-link {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 400;
        transition: transform 0.2s, color 0.2s;
        color: rgba(255, 255, 255, 0.95);
        cursor: pointer;
    }
    .nav-link:hover {
        transform: translateY(-2px);
        color: white;
    }
    .active-link {
        color: white !important;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
    }

    /* Dark Mode Theme (for white backgrounds) */
    .nav-link.dark-mode {
        color: #1C1C1C;
    }
    .nav-link.dark-mode:hover {
        color: black;
    }
    .nav-link.dark-mode.active-link {
        color: black !important;
    }

    .menu-toggle {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      padding: 10px;
      border-radius: 9999px;
      border: 1px solid rgba(255, 255, 255, 0.35);
      background: rgba(0, 0, 0, 0.35);
      cursor: pointer;
      transition: transform 0.2s, background-color 0.2s, border-color 0.2s;
    }
    .menu-toggle:hover {
      transform: translateY(-1px);
      border-color: rgba(255, 255, 255, 0.6);
    }
    .menu-toggle .bar {
      width: 22px;
      height: 2px;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 9999px;
      display: block;
      transition: background-color 0.2s;
    }
    .menu-toggle.dark-mode-btn {
      background: rgba(255, 255, 255, 0.9);
      border-color: rgba(0, 0, 0, 0.1);
    }
    .menu-toggle.dark-mode-btn .bar {
      background: #1C1C1C;
    }
    .dark-mode-label {
      color: #1C1C1C;
    }
  `]
})
export class NavComponent {
    isDarkText = false;
    isMenuOpen = false;

    constructor(private router: Router, private cdr: ChangeDetectorRef) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
            const url = event.urlAfterRedirects || event.url;
            // The Home ('/') and About ('/aboutus') pages have hero images extending to the top.
            // On these pages, we keep the text color white.
            if (url === '/' || url.startsWith('/about')) {
                this.isDarkText = false;
            } else {
                this.isDarkText = true;
            }
            // Close mobile menu when navigating
            this.isMenuOpen = false;
            this.cdr.markForCheck();
        });
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu(): void {
        this.isMenuOpen = false;
    }
}
