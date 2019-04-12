import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicFormComponent } from 'projects/dynaform/src/lib/component/dynamic-form/dynamic-form.component';
import { Field } from 'projects/dynaform/src/lib/model/field.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent extends DynamicFormComponent implements OnInit, OnChanges {

    fields: Field[] = [];

    demoFields: Field[] = [
        {
            type: 'input',
            name: 'street',
            label: 'Street:',
            inputType: 'text',
            value: 'Main Street',
            disabled: true,
            validations: [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Street Required"
                },
            ]
        },
        {
            type: 'input',
            name: 'city',
            label: 'City:',
            inputType: 'text',
            value: 'Rotterdam',
            validations: [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "City Required"
                },
            ]
        },
        {
            type: 'select',
            name: 'colors',
            label: 'Select color',
            value: "RED",
            options: [
                {
                    value: "BLUE",
                    enabled: true
                },
                {
                    value: "RED",
                    enabled: true
                },
                {
                    value: "YELLOW",
                    enabled: false
                },
                {
                    value: "GREEN",
                    enabled: true
                },
            ]
        },
        {
            type: 'input',
            name: 'password',
            label: 'Password:',
            inputType: 'password',
        },
        {
            type: 'textarea',
            name: 'vraag',
            label: 'Uw vraag',
            rows: 5
        },
        {
            type: 'colorpicker',
            name: 'fillColor',
            label: 'Fill color:',
            inputType: 'text',
            value: 'red'
        }
    ];

    constructor(fb: FormBuilder) {
        super(fb);
        this.fields = this.demoFields;
    }

    ngOnInit() {
        this.form = this.createFormControls();
    }

    ngOnChanges() {
        console.log("HomeComponent : ngOnChange")
    }

    cancel() {
        console.log('canceled in home');
    }

    clicked() {
        console.log('clicked in home:', this.form.value);
    }
}
