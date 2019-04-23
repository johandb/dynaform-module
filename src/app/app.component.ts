import { Component, ViewChild } from '@angular/core';

import { Field } from '../../projects/dynaform/src/lib/model/field.interface';
import { Validators, FormGroup } from '@angular/forms';
import { DynamicFormComponent } from 'projects/dynaform/src/lib/component/dynamic-form/dynamic-form.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'dynamic-form-module';

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    demoFields: Field[] = [
        {
            type: 'input',
            name: 'street',
            label: 'Street:',
            inputType: 'text',
            value: 'Dorpsweg',
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
        },
        {
            type: 'date',
            name: 'currentDate',
            label: 'Date value',
            inputType: 'text',
            value: '11-04-2019'
        }
    ];

    constructor() {
    }

    onSubmit() {
        console.log('model:', this.form.value);
    }
}
