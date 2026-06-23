import { Routes } from '@angular/router';
import { Helloworld } from './helloworld/helloworld';
import { Child } from './helloworld/child/child';

export const routes: Routes = [
    {path: '', component: Helloworld},
    {path: 'child', component: Child}
];
