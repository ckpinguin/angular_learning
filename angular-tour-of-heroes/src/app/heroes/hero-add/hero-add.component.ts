import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';

@Component({
    moduleId: module.id,
    selector: 'toh-hero-add',
    templateUrl: './hero-add.component.html',
    // directives: [AlertModule]
    styleUrls: [ './hero-add.component.styl' ]
})
export class HeroAddComponent implements OnInit {
    @Input() selectedHero: Hero;

    newHero: Hero;
    submitted = false;

    powers = ['Really Smart', 'Super Flexible',
               'Super Hot', 'Weather Changer'];

    constructor(
        private heroService: HeroService,
    ) {}

    ngOnInit(): void {
        this.createEmptyHero();
    }

    createEmptyHero(): void {
        this.newHero = {
            id: null,
            name: null,
            alterEgo: null,
            power: null
        };
    }

    // TODO: After submitting, the new hero is not shown in hero list (parent)
    // Why? The model has changed, so all Views using it (like the hero list)
    // should be invalidated...
    onSubmit(hero: Hero): void {
        if (!hero.name) { return; }
        console.log(JSON.stringify(hero, null, '   '));
        hero.name = hero.name.trim();
        this.heroService.create(hero)
            .then(() => {
                this.selectedHero = null;
            });
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.newHero); }
}
