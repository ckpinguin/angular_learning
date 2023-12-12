import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';

@Component({
    moduleId: module.id, // to have templateUrl, styleUrls relativ to this
    selector: 'toh-heroes',
    templateUrl: './hero-list.component.html',
    styleUrls: [ './hero-list.component.styl' ]
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
        ) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .then((heroes: Hero[]) => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }
}
