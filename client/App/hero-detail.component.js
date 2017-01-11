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
var common_1 = require('@angular/common');
var hero_1 = require('./hero');
var hero_service_1 = require('./hero.service');
var HeroDetail = (function () {
    function HeroDetail(heroService, routes, location) {
        this.heroService = heroService;
        this.routes = routes;
        this.location = location;
    }
    HeroDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params.forEach(function (params) {
            var id = +params['id'];
            _this.heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
        });
    };
    HeroDetail.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    HeroDetail.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetail.prototype, "hero", void 0);
    HeroDetail = __decorate([
        core_1.Component({
            selector: 'hero-detail',
            templateUrl: 'App/hero-detail.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
    ], HeroDetail);
    return HeroDetail;
}());
exports.HeroDetail = HeroDetail;
//# sourceMappingURL=hero-detail.component.js.map