import { Component, ViewChild } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { Field } from '../../projects/dynaform/src/lib/model/field.interface';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'dynamic-form-module';

    @ViewChild(HomeComponent) form: HomeComponent;

    fields: Field[] = [];

    demoFields: Field[] = [
        {
            type: 'input',
            name: 'street',
            label: 'Street:',
            inputType: 'text',
            value: 'Main Street',
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
            options: ["BLUE", "RED", "GREEN", "YELLOW"]
        },
        {
            type: 'input',
            name: 'password',
            label: 'Password:',
            inputType: 'password',
        },
        {
            type: 'colorpicker',
            name: 'fillColor',
            label: 'Fill color:',
            inputType: 'text',
            value: 'red'
        }
    ];

    constructor() {
        this.fields = this.demoFields;
    }

}
