import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';

@Component({
    moduleId: module.id,
    selector: 'toh-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: [ './hero-detail.component.styl' ]
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    // The hero id is a number. Route parameters are always strings.
    // So we convert the route parameter value to a number with the JavaScript (+) operator.
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}
