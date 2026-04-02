import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
	<header class="absolute left-4 right-4 top-6 z-20 bg-transparent sm:left-8 sm:right-8 lg:left-[170px] lg:right-[170px] lg:top-[85px]">
		<nav class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 text-center lg:gap-x-24" aria-label="Primary">
			<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">Home</a>
			<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/aboutus" routerLinkActive="active-link">About us</a>
			<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/our-team" routerLinkActive="active-link">Our team</a>
			<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/events" routerLinkActive="active-link">Events</a>
			<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/magazine" routerLinkActive="active-link">Magazine</a>
			<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/gallery" routerLinkActive="active-link">Gallery</a>
			<a class="nav-link" [class.dark-mode]="isDarkText" routerLink="/contact-us" routerLinkActive="active-link">Contact us</a>
		</nav>
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
  `]
})
export class NavComponent {
    isDarkText = false;

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
            this.cdr.markForCheck();
        });
    }
}
