import { Routes } from '@angular/router';
import { BooksComponent, VideosComponent, ThemesComponent, ExamComponent } from './index-contributions.pages';

//ruta de detalle del un theme
import { DetailThemeComponent } from '../detail-theme/detail-theme.component';

export const CONTRIBUTIONS_ROUTES: Routes = [

    { path: 'themes', component: ThemesComponent},
    { path: 'themes/detail-theme/:idTheme/:idArticle', component: DetailThemeComponent},
    { path: 'videos', component: VideosComponent },
    { path: 'books', component: BooksComponent },
    { path: 'exam', component: ExamComponent },
    //ruta detalle theme
    { path: '**', pathMatch: 'full', redirectTo: 'themes' }
];

