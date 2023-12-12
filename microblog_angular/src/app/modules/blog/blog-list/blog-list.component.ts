import { Component, OnInit, Input, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { BlogEntry } from '../model-interfaces';
import { BlogService } from '../blog.service';

@Component({
    selector: 'ck-blog-list',
    templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {

    entries$: Observable<Array<BlogEntry>>;

    constructor(
        private blogService: BlogService,
    ) { }

    ngOnInit() {
        this.entries$ = this.blogService.entries$;
    }
}
