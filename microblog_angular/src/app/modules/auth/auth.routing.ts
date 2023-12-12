import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth-component/auth.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

export const authRoutes: Routes = [ {
    // path '' is the component holding the outlet
    path: '', component: AuthComponent, data: { title: 'Login' } ,
    children: [
        { path: '', component: LoginPageComponent }
    ] }
];
export const authRoutingComponents = [
    AuthComponent, LoginPageComponent
];
export const authRoutingProviders = [ ];
export const authRouting = RouterModule.forChild(authRoutes);
