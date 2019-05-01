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
            placeholder: 'Geef een straat',
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
                    enabled: true,
                    description: 'Blauw kleur'
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
            cls: 'fa fa-lock'
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
            value: '11-04-2019',
            validations: [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Datum is verplicht"
                },
                {
                    name: "pattern",
                    validator: Validators.pattern("(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}"),
                    message: "Datum formaat niet juist (dd-mm-jjjj)"
                }
            ],

        }
    ];

    constructor() {
    }

    onSubmit() {
        console.log('model:', this.form.value);
    }
}
