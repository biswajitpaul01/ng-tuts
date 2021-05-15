import { Component, OnInit, ViewChild } from '@angular/core';
import { ShareDataFirstChildComponent } from './share-data-first-child/share-data-first-child.component';

@Component({
    selector: 'app-share-data',
    templateUrl: './share-data.component.html',
    styleUrls: ['./share-data.component.css']
})
export class ShareDataComponent implements OnInit {

    @ViewChild(ShareDataFirstChildComponent, {static: false}) sc: any;

    childHeading: string = "";
    countIndex: number = 0;
    childMessageName: string = "X";

    constructor() {
        this.childHeading = "Child Count Total";
    }

    ngOnInit(): void {
    }

    increaseCount() {
        this.countIndex++;
    }

    decreaseCount() {
        this.countIndex--;
    }

    setChildMessage(data: any) {
        this.childMessageName = data.name;
    }

    changeChildMessageFromParent() {
        this.sc.passDataToParent();
    }

}
