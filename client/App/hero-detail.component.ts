import { Component, Input, Output, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
    selector: 'hero-detail',
    templateUrl: 'App/hero-detail.component.html'
})

export class HeroDetail implements OnInit {
    @Input()
    hero: Hero;
    constructor (
        private heroService: HeroService,
        private routes: ActivatedRoute,
        private location: Location
    ){ }

    ngOnInit(): void {
       this.routes.params.forEach(
           (params: Params) => {
               let id = +params['id'];
               this.heroService.getHero(id).then(
                   (hero) => this.hero = hero
            )
        }
    )}

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack())
    }

    goBack(): void {
        this.location.back();
    }
}