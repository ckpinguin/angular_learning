import { NgModule } from '@angular/core';

import { AdminPageComponent } from './admin-page/admin-page.component';

import { adminRouting, adminRoutingComponents } from './admin.routing';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        adminRouting
    ],
    declarations: [
        ...adminRoutingComponents,
        AdminPageComponent
    ]
})
export class AdminModule { }
