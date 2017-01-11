import { Component } from '@angular/core'

import { HeroComponent } from './hero.component'

@Component({
    selector: 'app',
    templateUrl:'App/app.component.html'
})

export class AppComponent {
    title = "Tour of Heroes";
}