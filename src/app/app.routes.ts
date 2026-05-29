import { Routes } from '@angular/router';
import { Countries } from './features/countries/countries';

export const routes: Routes = [
    {path: 'countries', component:Countries},
    {path:'*', redirectTo:'countries'}
];
