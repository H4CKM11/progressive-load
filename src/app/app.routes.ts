import { Routes } from '@angular/router';
import { HomeComponent } from './Home/feature/home.component';
import { LoginComponent } from './UserAccount/feature/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
