import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    contactForm: any;
    formSubmitted: boolean = false;
    validationRequired: boolean = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.generateForm();
    }

    generateForm(): void {
        this.contactForm = this.fb.group({
            contactName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            contactMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
        });
    }

    get formControls() {
        return this.contactForm.controls;
    }

    sendMessage(): void {
        this.formSubmitted = true;

        if (this.contactForm.valid) {
            this.validationRequired = false;
            console.log(this.contactForm.value);
            this.formSubmitted = false;
            alert('Form submitted');

            // Reset the complete form
            this.contactForm.reset();
        } else {
            this.validationRequired = true;
        }
    }

}
