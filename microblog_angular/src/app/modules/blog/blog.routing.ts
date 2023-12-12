import { Routes, RouterModule } from '@angular/router';

import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { EditBlogEntryFormComponent } from './edit-blog-entry-form/edit-blog-entry-form.component';
import { LoginGuard } from '../auth/login/login.guard';

export const blogRoutes: Routes = [ {
    path: '', component: BlogPageComponent, data: { title: 'Blog' },
    children: [
        // here, aux-outlet is working
        { path: '', component: BlogListComponent, outlet: 'list-outlet' },
        // { path: 'items', component: BlogListComponent, outlet: 'list-outlet' }, // here, aux-outlet is NOT working (see bugs in github)
        { path: 'new', component: EditBlogEntryFormComponent, canActivate: [ LoginGuard ], data: { title: 'New entry' } },
        { path: ':id', // component: BlogItemComponent, // pathMatch: 'full',
            // outlet: 'list-outlet', // aux outlet not working, bug: https://github.com/angular/angular/issues/10726
            children: [
                // { path: '', component: BlogItemComponent },
                { path: 'edit', component: EditBlogEntryFormComponent,
                    canActivate: [ LoginGuard ], data: { title: 'Edit entry' },
                },
            ]
        },
    ]
} ];

export const blogRoutingComponents = [
    BlogPageComponent, EditBlogEntryFormComponent
];
export const blogRoutingProviders = [ LoginGuard ];
export const blogRouting = RouterModule.forChild(blogRoutes);
