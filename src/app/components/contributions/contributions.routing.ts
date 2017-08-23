import { Routes } from '@angular/router';

import { BooksComponent, VideosComponent, ThemesComponent } from './index-contributions.pages';

export const CONTRIBUTIONS_ROUTES: Routes = [

    { path: 'themes', component: ThemesComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'books', component: BooksComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'themes' }
];

