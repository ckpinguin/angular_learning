import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdSnackBarModule } from '@angular/material';

import { NavBarComponent } from './navbar/navbar.component';
import { ShowErrorComponent } from './show-error/show-error.component';
import { DateFormatPipe } from './dateFormat.pipe';

import { NavigationService } from './navigation.service';
// Some services from their respective modules need to be availabe
// for other modules too, so we import them here. This still is
// not a clean solution. This has to do with the quite special
// concept of a "module" in angular: The module in the first place
// is about handling lazy-loading, not about organizing. Even though
// it makes sense to have everything located in the corresponding
// module, even services that ought to be available shared/global.
import { BlogService } from '../blog/blog.service';
import { BlogStore } from '../blog/blog.store';
import { LoginService } from '../auth/login/login.service';
import { UserService } from '../auth/user/user.service';
import { UserStore } from '../auth/user/user.store';
import { LoginGuard } from '../auth/login/login.guard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        MdSnackBarModule
    ],
    declarations: [
        ShowErrorComponent,
        NavBarComponent,
        DateFormatPipe
    ],
    exports: [
        ShowErrorComponent,
        NavBarComponent,
        CommonModule,
        HttpModule,
        FormsModule,
        MdSnackBarModule,
        DateFormatPipe
    ]
})
export class SharedModule {
    // Service providers have to be put here instead of
    // the @NgModule annotation! This static addition to the
    // Module has to be imported in root App Module only!
    // The other modules only import the Module itself (without
    // forRoot() )
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                NavigationService,
                BlogService,
                BlogStore,
                UserStore,
                LoginService,
                UserService,
                LoginGuard
            ]
        };
    }
}
