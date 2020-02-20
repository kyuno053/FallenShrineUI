import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';
import {Data} from '../../models/userData';
import {Mob} from '../../models/mob';

@Component({
    selector: 'app-gs-def',
    templateUrl: './gs-def.component.html',
    styles: [
        '.center {\n' +
        '    display: block;\n' +
        '    margin-left: auto;\n' +
        '    margin-right: auto;\n' +
        '    width: 50%;\n' +
        '}'
    ]
})
export class GsDefComponent implements OnInit {

    private data: Data;
    private mobs: Mob[];
    private service: DataService;
    private isvisible: { [id: string]: boolean };

    constructor(service: DataService) {
        this.service = service;
    }

    ngOnInit() {
        this.service.getUsersData().subscribe(
            (remote: Data) => {
                this.data = remote;
                remote.users.forEach(item => {
                    this.isvisible = {...this.isvisible, [item.userId]: true}
                });
            }
        );

        this.service.getAllMobs().subscribe(
            (a: Mob[]) => this.mobs = a
        );

        setInterval(() => this.service.getUsersData().subscribe(
            (e) => this.data = e
        ), 15000);
    }


    mapMobs(name: string): Mob {
        return this.mobs.filter(item => item.nom === name)[0];
    }

    toggleIsVisible(id: string) {
        this.isvisible[id] = !this.isvisible[id];
    }

}
