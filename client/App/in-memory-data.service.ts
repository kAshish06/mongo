import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Iron Man'},
            {id: 12, name: 'Hulk'},
            {id: 13, name: 'Superman'},
            {id: 14, name: 'Flash'},
            {id: 15, name: 'Captain America'},
            {id: 16, name: 'Spiderman'},
            {id: 17, name: 'Wolverine'},
            {id: 18, name: 'Windstorm'},
            {id: 19, name: 'Cyclops'},
            {id: 20, name: 'Night Crowler'},
            {id: 21, name: 'Prof X'},
            {id: 22, name: 'Thor'},
        ];
        return {heroes};
    };
    
}