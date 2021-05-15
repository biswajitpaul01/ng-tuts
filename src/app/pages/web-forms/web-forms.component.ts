import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-web-forms',
    templateUrl: './web-forms.component.html',
    styleUrls: ['./web-forms.component.css']
})
export class WebFormsComponent implements OnInit {

    switchValue: number = 0;

    constructor() { }

    ngOnInit(): void {
    }

}
