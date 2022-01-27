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
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent, Field } from 'dynaform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;

  street: string = 'Main Street';

  fields: Field[] = [
    {
      id: 'street',
      type: 'input',
      label: 'Street:',
      inputType: 'text',
      value: this.street,
      placeholder: 'Enter a street name',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Street Required',
        },
      ],
    },
    {
      id: 'robot',
      label: 'I am not a robot',
      type: 'checkbox',
      inputType: 'checkbox',
      value: true,
    },
    {
      id: 'gender',
      type: 'radiobutton',
      label: 'Gender:',
      inputType: 'radio',
      options: [
        { value: 'Male', enabled: true, description: 'Male' },
        { value: 'Female', enabled: true, description: 'Female' },
      ],
      value: 'Male',
    },
    {
      id: 'colors',
      type: 'select',
      label: 'Select color',
      value: 'RED',
      options: [
        {
          value: 'BLUE',
          enabled: true,
          description: 'Blue color',
        },
        {
          value: 'RED',
          enabled: true,
        },
        {
          value: 'YELLOW',
          enabled: false,
        },
        {
          value: 'GREEN',
          enabled: true,
        },
      ],
    },
    {
      id: 'fillColor',
      type: 'colorpicker',
      label: 'Fill color:',
      inputType: 'text',
      value: 'red',
    },
    {
      id: 'Question',
      type: 'textarea',
      label: 'Your question',
      rows: 5,
      value: 'Hi there',
    },
    {
      id: 'currentDate',
      type: 'date',
      label: 'Date value',
      inputType: 'text',
      //value: this.today,
      disabled: false,
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Date is required',
        },
        {
          name: 'pattern',
          validator: Validators.pattern(
            '(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}'
          ),
          message: 'Date format not valid (dd-mm-yyyy)',
        },
      ],
    },
  ];

  onSubmit() {
    console.log('model:', this.form.form.value);
  }
}

```

And your app html

```html
<div class="container">
    <dynamic-form [fields]="fields"></dynamic-form>
    <button class="btn btn-primary mt-2" (click)="onSubmit()" type="submit">Submit</button>
</div>
```
