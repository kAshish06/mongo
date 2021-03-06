import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Rx'
import { Subject } from 'rxjs/subject'

import { Hero } from './hero'
import { HeroSearchService } from './hero-search.service'

@Component ({
    selector: 'hero-search',
    templateUrl: 'App/hero-search.component.html',
    providers: [ HeroSearchService ]
})

export class HeroSearch implements OnInit {
    ngOnInit(): void{
        this.heroes = this.searchTerms
                        //.debounceTime(300)
                        //.distinctUntilChanged()
                        .switchMap( term => term
                        ? this.heroSearchService.search(term)
                        : Observable.of<Hero[]>([]))
                        .catch( error => {
                            console.log(error);
                            return Observable.of<Hero[]>([])
                        })                      
    };

    heroes: Observable <Hero[]>;
    private searchTerms = new Subject <string>();

    constructor (
        private heroSearchService: HeroSearchService,
        private router: Router
    ) { };

    search(term: string): void {
        this.searchTerms.next(term);
    };

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}