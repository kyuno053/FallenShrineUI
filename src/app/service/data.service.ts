import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mob} from '../models/mob';
import {User} from '../models/userData';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private apiServer = 'http://kyuno.fr:3350';

    constructor(private httpClient: HttpClient) {
    }

    getAllMobs(): Observable<Mob[]> {
        return this.httpClient.get<Mob[]>(this.apiServer + '/allMobs');
    }

    getUsersData(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.apiServer + '/allDefs');
    }

}



