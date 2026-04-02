import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contactus } from './contactus/contactus';
import { Login } from './login/login';
import { Signup } from './signup/signup';


export const routes: Routes = [
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: About},
    {path: 'contactus', component: Contactus},
    {path: 'login', component: Login},
    {path: 'signup', component: Signup}
];
