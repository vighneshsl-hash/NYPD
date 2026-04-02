import { Routes } from '@angular/router';
import { Landingpage } from './components/landingpage/landingpage';
import { OurTeam } from './components/our-team/our-team';
import { Events } from './components/events/events';
import { Magazine } from './components/magazine/magazine';
import { Gallery } from './components/gallery/gallery';
import { ContactUs } from './components/contact-us/contact-us';
import { Aboutus } from './components/aboutus/aboutus';

export const routes: Routes = [
  { path: '', component: Landingpage },
  { path: 'aboutus', component: Aboutus },
  { path: 'our-team', component: OurTeam },
  { path: 'events', component: Events },
  { path: 'magazine', component: Magazine },
  { path: 'gallery', component: Gallery },
  { path: 'contact-us', component: ContactUs }
];
