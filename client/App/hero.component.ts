import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { HeroDetail } from './hero-detail.component'
import { Hero } from './hero'
import { HeroService } from './hero.service'



@Component({
    selector: 'heroes',
    templateUrl:'App/hero.component.html',
})

export class HeroComponent implements OnInit {
    ngOnInit(): void {
        this.getHeroes();
    };

    heroes: Hero[];
    selectedHero: Hero;

    onSelect(hero: Hero): void{        
        this.selectedHero = hero;
    };

    constructor( 
        private heroService: HeroService,
        private router: Router
        ) { };

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(
                (heroes) => this.heroes = heroes
                );
    }

    goToDetail(hero: Hero): void{
        let link = ['/detail', hero.id]
        this.router.navigate(link);
    }
}