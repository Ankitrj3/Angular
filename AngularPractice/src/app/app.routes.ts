import { Routes } from '@angular/router';




export const routes: Routes = [
    {path:'dashboard', loadComponent: ()=> import('./dash-board/dash-board').then(m => m.DashBoard)},
    {path:'',loadComponent: ()=> import('./home/home').then(m => m.Home)},
    {path:'child',loadComponent: ()=> import('./dash-board/child/child').then(m => m.Child)},
    {path:'twoway', loadComponent: ()=> import('./two-way-binding/two-way-binding').then(m => m.TwoWayBinding)},
    {path:'**', loadComponent: ()=> import('./home/home').then(m => m.Home)}
];
