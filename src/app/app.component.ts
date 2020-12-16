import { Component, ViewChild, OnInit } from '@angular/core';

import { Validators } from '@angular/forms';
import { DynamicFormComponent, Field } from 'dynaform';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'dynamic-form-module';
    today = '21-05-2019';

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    cb = [];

    columnValue = 3;

    values = [
        {
            id: 1,
            name: 'ouderling',
            value: 7,
            txt: 'Ouderling',
            selected: true,
            checked: true
        },
        {
            id: 1,
            name: 'diaken',
            txt: 'Diaken',
            value: 1,
            selected: false,
            checked: true
        },
        {
            id: 1,
            name: 'organist',
            txt: 'Organist',
            value: 4,
            selected: false,
            checked: true
        }
    ];

    demoFields: Field[] = [
        {
            type: 'input',
            id: 'street',
            label: 'Street:',
            inputType: 'text',
            value: '',
            placeholder: 'Geef een straat',
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Street Required'
                },
            ]
        },
        {
            type: 'input',
            id: 'city',
            label: 'City:',
            inputType: 'text',
            value: 'Rotterdam',
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'City Required'
                },
            ]
        },
        {
            type: 'select',
            id: 'colors',
            label: 'Select color',
            value: 'RED',
            options: [
                {
                    value: 'BLUE',
                    enabled: true,
                    description: 'Blauw kleur'
                },
                {
                    value: 'RED',
                    enabled: true
                },
                {
                    value: 'YELLOW',
                    enabled: false
                },
                {
                    value: 'GREEN',
                    enabled: true
                },
            ]
        },
        {
            type: 'input',
            id: 'password',
            label: 'Password:',
            inputType: 'password',
            cls: 'fa fa-lock'
        },
        {
            type: 'textarea',
            id: 'vraag',
            label: 'Uw vraag',
            rows: 5,
            value: 'Hallo'
        },
        {
            type: 'radiobutton',
            label: 'Gender:',
            id: 'gender',
            options: [
                { value: 'Male', enabled: true, description: 'Male' },
                { value: 'Female', enabled: true, description: 'Female' },
            ],
            value: 'Male'
        },
        {
            id: 'robot',
            label: 'I am not a robot',
            type: 'checkbox',
            inputType: 'checkbox',
            value: true
        },
        {
            type: 'colorpicker',
            id: 'fillColor',
            label: 'Fill color:',
            inputType: 'text',
            value: 'red'
        },
        {
            type: 'date',
            id: 'currentDate',
            label: 'Date value',
            inputType: 'text',
            //value: this.today,
            disabled: false,
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Datum is verplicht'
                },
                {
                    name: 'pattern',
                    validator: Validators.pattern('(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}'),
                    message: 'Datum formaat niet juist (dd-mm-jjjj)'
                }
            ],
        }
    ];

    ngOnInit(): void {
        // this.createFields();
    }

    createFields() {
        let i = 0;
        this.values.forEach(element => {
            const field = {
                id: 'cb[' + i + ']',
                type: 'checkbox',
                value: element.txt,
                selected: element.selected
            };
            this.demoFields.push(field);
            i++;
        });
    }

    constructor() {
    }

    onSubmit() {
        console.log('model:', this.form.form.value);
        for (let i = 0; i < this.values.length; i++) {
            if (this.form.form.value['cb[' + i + ']']) {
                console.log('cb[' + i + '] set, value:', this.values[i].value);
            }
        }
    }
}
