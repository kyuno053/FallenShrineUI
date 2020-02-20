import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mob} from '../models/mob';
import {Data} from '../models/userData';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private apiServer = 'http://localhost:3250';

    constructor(private httpClient: HttpClient) {
    }

    getAllMobs(): Observable<Mob[]> {
        return this.httpClient.get<Mob[]>(this.apiServer + '/allMobs');
    }

    getUsersData(): Observable<Data> {
        return this.httpClient.get<Data>(this.apiServer + '/allDefs');
    }

}



