import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module'
import { InMemoryDataService } from './in-memory-data.service'

import { AppComponent } from './app.component'
import { HeroDetail } from './hero-detail.component'
import { HeroComponent } from './hero.component'
import { HeroService } from './hero.service'
import { DashboardComponent } from './dashboard.component'
import { HeroSearch } from './hero-search.component'
import './rxjs-extensions'

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'heroes',
            component: HeroComponent
        },
        {
            path: 'detail/:id',
            component: HeroDetail
        }
    ])
     ],
    declarations: [ AppComponent, HeroComponent, HeroDetail, DashboardComponent, HeroSearch ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }