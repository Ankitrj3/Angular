import { Routes } from '@angular/router';
import { Child } from './child/child';
import { Parent } from './parent/parent';

export const routes: Routes = [
    {path: 'child', component: Child},
    {path: 'parent', component: Parent}
];
