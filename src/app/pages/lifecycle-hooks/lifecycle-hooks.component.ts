import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks',
    templateUrl: './lifecycle-hooks.component.html',
    styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {

    data = "Hello";

    constructor() {
        console.log(`constructor - data is ${this.data}`);
    }

    ngOnChanges() {
        console.log(`ngOnChanges - data is ${this.data}`);
    }

    ngOnInit(): void {
        console.log(`ngOnInit  - data is ${this.data}`);
    }

    ngDoCheck() {
        console.log("ngDoCheck")
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
    }

}
