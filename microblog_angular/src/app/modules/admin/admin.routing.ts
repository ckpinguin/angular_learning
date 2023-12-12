import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from './admin-page/admin-page.component';

export const adminRoutes: Routes = [ {
    // path '' is the component holding the outlet
    path: '', component: AdminPageComponent, data: { title: 'Admin' }
} ];
export const adminRoutingComponents = [
    AdminPageComponent
];
export const adminRoutingProviders = [ ];
export const adminRouting = RouterModule.forChild(adminRoutes);
