import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks',
    templateUrl: './lifecycle-hooks.component.html',
    styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {

    msg: string;

    constructor() {
        this.msg = "Helllo";
    }

    ngOnInit(): void {
    }

    changeChildMessage() {
        this.msg = Math.random().toString(36).substring(7);
    }

}
