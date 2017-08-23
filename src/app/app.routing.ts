import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//importamos los componentes
import { HomeComponent, AboutComponent, ContributionsComponent } from './components/index-components.pages';
import { CONTRIBUTIONS_ROUTES } from './components/contributions/contributions.routing';
//arrray con la configuracion de rutas

const APP_ROUTES:Routes =[
    { path: '',  component:HomeComponent },
    { path: 'home',  component:HomeComponent },
    { path: 'about',  component:AboutComponent },
    { path: 'contributions',  component:ContributionsComponent , children: CONTRIBUTIONS_ROUTES},
    { path: '**', redirectTo:'', pathMatch:'full' }
];


export const ROUTING :ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash:true });

