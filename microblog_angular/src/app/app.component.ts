import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'ck-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.styl' ]
})
export class AppComponent implements OnInit {
    private defaultTitle;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private titleService: Title) { }

    ngOnInit() {
        this.defaultTitle = this.titleService.getTitle();
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                this.setBrowserTitle();
            });

        const title = this.activatedRoute.snapshot.data['title'];
        if (title) {
            this.titleService.setTitle(title);
        }
    }

    setBrowserTitle() {
        let title = this.defaultTitle;
        let route = this.activatedRoute;
        while (route.firstChild) {
            route = route.firstChild;
            title = route.snapshot.data['title'] || title;
        }
        this.titleService.setTitle(title);
    }


}
