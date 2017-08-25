import { Routes } from '@angular/router';
import { BooksComponent, VideosComponent, ThemesComponent } from './index-contributions.pages';

//ruta de detalle del un theme
import { DetailThemeComponent } from '../detail-theme/detail-theme.component';

export const CONTRIBUTIONS_ROUTES: Routes = [

    { path: 'themes', component: ThemesComponent},
    { path: 'themes/detail-theme/:id/:iddos', component: DetailThemeComponent},
    { path: 'videos', component: VideosComponent },
    { path: 'books', component: BooksComponent },
    //ruta detalle theme
    { path: '**', pathMatch: 'full', redirectTo: 'themes' }
];

