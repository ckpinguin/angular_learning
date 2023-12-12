import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { BlogService } from '../blog.service';
import { BlogEntry } from '../model-interfaces';

import debug from '../../../../debug';

@Component({
    selector: 'ck-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: [ './blog-page.component.styl' ]
})
export class BlogPageComponent implements OnInit {
    private callPath: string;
    private newEntry: BlogEntry;
    // When using AOT, all members used in the template must not be private:
    title: string;
    pathNew = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private blogService: BlogService
    ) { }

    ngOnInit() {
        if (debug) console.log('activatedRoute: ', this.activatedRoute);
        this.title = this.activatedRoute.snapshot.data['title'];
        this.pathNew = false;
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                if (event['url'].split('/').pop() === 'new') {
                    this.pathNew = true;
                    this.blogService.createNewEntry();
                } else {
                    this.pathNew = false;
                }
            });
        this.blogService.getLastEntry().subscribe(entry => {
            this.newEntry = entry;
            if (debug) console.log('last entry: ', this.newEntry);
        });
    }

}
