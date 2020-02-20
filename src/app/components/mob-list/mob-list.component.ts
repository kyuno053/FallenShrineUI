import {Component, OnInit} from '@angular/core';
import {Mob} from '../../models/mob';
import {DataService} from '../../service/data.service';

@Component({
    selector: 'app-mob-list',
    templateUrl: './mob-list.component.html',
    styles: []
})
export class MobListComponent implements OnInit {

    private mobs: Mob[];
    private service: DataService;
    private processed = [];

    constructor(service: DataService) {
        this.service = service;
    }

    ngOnInit() {
        this.service.getAllMobs().subscribe(
            (data: Mob[]) => {
                this.mobs = data;
                let j = 0;
                while (j < data.length) {
                    const row = [];
                    for (let i = 0; i < 8; i++) {
                      row.push(data[j]);
                      j++;
                    }
                    this.processed.push(row);
                }
            }
        );
    }
}
