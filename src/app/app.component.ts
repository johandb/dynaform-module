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

    //demoFields: Field[] = [];

    cb = [];

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
    ]

    ngOnInit(): void {
        //this.createFields();
    }

    createFields() {
        var i = 0;
        this.values.forEach(element => {
            var field = {
                name: 'cb[' + i + ']',
                type: 'checkbox',
                value: element.txt,
                selected: element.selected
            }
            this.demoFields.push(field);
            i++;
        })
    }


    demoFields: Field[] = [
        {
            type: 'input',
            name: 'street',
            label: 'Street:',
            inputType: 'text',
            value: '',
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
        // {
        //     type: 'textarea',
        //     name: 'vraag',
        //     label: 'Uw vraag',
        //     rows: 5
        // },
        // {
        //     type: 'colorpicker',
        //     name: 'fillColor',
        //     label: 'Fill color:',
        //     inputType: 'text',
        //     value: 'red'
        // },
        {
            type: 'date',
            name: 'currentDate',
            label: 'Date value',
            inputType: 'text',
            value: this.today,
            disabled: false,
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
        console.log('model:', this.form.form.value);
        for (var i = 0; i < this.values.length; i++) {
            if (this.form.form.value['cb[' + i + ']']) {
                console.log('cb[' + i + '] set, value:', this.values[i].value);
            }
        }
    }
}
