import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styles: []
})
export class HelpComponent implements OnInit {


    isOperator = true;
    isSettingsCommand = true;
    isDebugCommand = true;
    isUserCommand = true;
    isGsCommand = true;

    constructor() {
    }


    ngOnInit() {
    }

    toggleOperator() {
        this.isOperator = !this.isOperator;
    }

    toggleSettingsCommand() {
        this.isSettingsCommand = !this.isSettingsCommand;
    }

    toggleDebugCommands() {
        this.isDebugCommand = !this.isDebugCommand;
    }

    toggleUserCommands() {
        this.isUserCommand = !this.isUserCommand;
    }

    toggleGsCommands() {
        this.isGsCommand = !this.isGsCommand;
    }

}
