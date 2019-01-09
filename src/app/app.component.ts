import { Component, ViewChild, OnInit } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { Field } from 'dynaform';

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
            value: 'red'
        },
    ];

    constructor() {
        this.fields = this.demoFields;
    }
}
