"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Rx_1 = require('rxjs/Rx');
var subject_1 = require('rxjs/subject');
var hero_search_service_1 = require('./hero-search.service');
var HeroSearch = (function () {
    function HeroSearch(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.searchTerms = new subject_1.Subject();
    }
    HeroSearch.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.searchTerms
            .switchMap(function (term) { return term
            ? _this.heroSearchService.search(term)
            : Rx_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.of([]);
        });
    };
    ;
    ;
    HeroSearch.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ;
    HeroSearch.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    HeroSearch = __decorate([
        core_1.Component({
            selector: 'hero-search',
            templateUrl: 'App/hero-search.component.html',
            providers: [hero_search_service_1.HeroSearchService]
        }), 
        __metadata('design:paramtypes', [hero_search_service_1.HeroSearchService, router_1.Router])
    ], HeroSearch);
    return HeroSearch;
}());
exports.HeroSearch = HeroSearch;
//# sourceMappingURL=hero-search.component.js.map