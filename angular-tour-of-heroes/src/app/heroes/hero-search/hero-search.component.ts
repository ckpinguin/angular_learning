import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from '../shared/hero-search.service';
import { Hero } from '../shared/hero.model';

@Component({
    moduleId: module.id,
    selector: 'toh-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: [ './hero-search.component.styl' ],
    providers: [ HeroSearchService ]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            /*
            *  `switchMap` calls our search service for each search term that makes it
            *  through the debounce and distinctUntilChanged gauntlet.
            *  It cancels and discards previous search observables, returning
            *  only the latest search service observable.
            */
            .switchMap(term => term
                // return the http search observable
                ? this.heroSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Hero[]>([])
            )
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        const link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}
