# Dynaform

A small library that adds dynamic forms to your application.
Angular  version : 13.1+

## Installation

`npm install dynaform`

## Dependencies

```html
bootstrap-5 font-awesome ngx-color-picker
```

## Usage

Import the DynaformModule in your app.module.ts

```javascript
import { DynaformModule } from 'dynaform';

imports: [
  DynaformModule,
  .....
];
```

Create the html template for this component, see below

```javascript
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

    street: string = 'Main Street';

    demoFields: Field[] = [
        {
            id: 'street',
            label: 'Street:',
            type: 'input',
            inputType: 'text',
            value: this.street
        },
        {
            id: 'password',
            label: 'Password:',
            type: 'input',
            inputType: 'password',
            cls: 'fa-fa-lock'
        },
        {
            id: 'input',
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
            id: 'colors',
            type: 'select',
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
            id: 'question',
            type: 'textarea',
            label: 'Your Question',
            rows: 5
        },
        {
            id: 'fillColor',
            label: 'Fill color:',
            type: 'colorpicker',
            inputType: 'text',
            value: 'red'
        },
        {
            id: 'date',
            type: 'date',
            label: 'Today''s date',
            inputType: text
        }
    ];

    constructor() {
        this.fields = this.demoFields;
    }

}

```

And your app html

```html
<div class="container">
  <app-home [fields]="demoFields"></app-home>
</div>
```
