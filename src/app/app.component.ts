import { Component, ViewChild, OnInit } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { Field } from '../../projects/dynaform/src/lib/model/field.interface';

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
            value: 'Main Street'
        },
        {
            type: 'input',
            name: 'city',
            label: 'City:',
            inputType: 'text',
            value: 'Rotterdam'
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
        },
        {
            type: 'button',
            label: 'Submit'
        }
    ];

    constructor() {
        this.fields = this.demoFields;
    }

    submit(value: any) {
        console.log('form values : ', value);
    }

}
