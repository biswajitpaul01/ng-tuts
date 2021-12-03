import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-template-form',
    templateUrl: './template-form.component.html',
    styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

    model: any = {};

    constructor() {
    }

    ngOnInit(): void {
    }

    submitForm(form: NgForm): void {
        console.log('form value', form.value);

        // Note: https://stackoverflow.com/questions/41500102/cleanest-way-to-reset-forms/43985754#43985754
        form.reset();
        // form.resetForm();
    }

}
