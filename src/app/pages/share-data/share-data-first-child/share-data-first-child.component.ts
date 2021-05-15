import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-share-data-first-child',
    templateUrl: './share-data-first-child.component.html',
    styleUrls: ['./share-data-first-child.component.css']
})
export class ShareDataFirstChildComponent implements OnInit {

    @Input() parentCounter: number = 0;
    @Input() parentHeading: string = "";
    @Output() childMessage = new EventEmitter();

    names = ["John", "Jane", "Ryan", "Tim", "Penny", "William"];

    constructor() { }

    ngOnInit(): void {
    }

    passDataToParent() {
        this.childMessage.emit({
            name: this.names[Math.floor(Math.random() * 6)]
        });
    }

}
