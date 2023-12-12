import { NgModule } from '@angular/core';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { UserStore } from './user/user.store';

import { authRouting, authRoutingComponents } from './auth.routing';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        authRouting
    ],
    declarations: [
        ...authRoutingComponents,
        LoginFormComponent
    ]
})
export class AuthModule { }
