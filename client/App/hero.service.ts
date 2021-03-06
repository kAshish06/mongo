import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { Hero } from './hero'

@Injectable()

export class HeroService {
    private headers = new Headers({'content-type': 'application/json'});
    private heroesUrl = 'App/heroes';

    constructor ( private http: Http ){ }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                .toPromise()
                .then((response) => response.json().data as Hero[])
                .catch(this.handleError)
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(
            (heroes) => heroes.find((hero)=> hero.id === id)
        )
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
                .put(url, JSON.stringify(hero), {headers: this.headers})
                .toPromise()
                .then(() => hero)
                .catch(this.handleError)
    } 

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error)
        return Promise.reject( error.message || error)
    } 
 }