import { Component, ViewChild, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { Field } from '../../projects/dynaform/src/lib/model/field.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'dynamic-form-module';

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    fields: Field[] = [];

    demoFields: Field[] = [
        {
            name: 'street',
            label: 'Street:',
            type: 'input',
            inputType: 'text',
            value: 'Main Street'
        },
        {
            name: 'city',
            label: 'City:',
            type: 'input',
            inputType: 'text',
            value: 'Rotterdam'
        },
        {
            name: 'password',
            label: 'Password:',
            type: 'input',
            inputType: 'password',
        },
        {
            name: 'fillColor',
            label: 'Fill color:',
            type: 'colorpicker',
            inputType: 'text',
            value: '#ddd'
        },
    ];

    constructor() {
        this.fields = this.demoFields;
    }
}
