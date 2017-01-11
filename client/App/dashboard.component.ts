import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Hero } from './hero'
import { HeroService } from './hero.service'
import { HeroSearch } from './hero-search.component'

@Component({
    selector: 'dashboard',
    templateUrl:'App/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    ngOnInit(): void {
        this.heroService.getHeroes().then(
            (heroes) => this.heroes = heroes.slice(1, 5)
        )
    }

    heroes: Hero[] = [];
    constructor (
        private heroService: HeroService,
        private router: Router
        ){ }
        
    goToDetail(hero: Hero): void{
        let link = ['/detail', hero.id]
        this.router.navigate(link);
    }
}