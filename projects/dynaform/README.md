Dynaform
========

A small library that adds dynamic forms to your application

## Installation

  `npm install dynaform`

## Dependencies
 ```html

    bootstrap-4
    font-awesome
    ngx-color-picker

```

## Usage

Import the DynaformModule in your app.module.ts

```javascript
import { DynaformModule } from 'dynaform';

imports: [
    DynaformModule,
];

```

Create a new component and extend it from DynamicFormComponent, see below for an example

```javascript
import { Component, OnInit } from '@angular/core';
import { DynamicFormComponent } from 'dynaform';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent extends DynamicFormComponent implements OnInit {

    constructor(fb: FormBuilder) {
        super(fb);
    }

    ngOnInit() {
    }

    ngOnChanges() {
        console.log("HomeComponent : ngOnChange")
        this.form = this.createFormControls();
    }

    cancel() {
    }
    
    clicked() {
      console.log('form values:', this.form.value);
    }

}

```

Create the html template for this component, see below

```html
<div>
    <h1>Dynamic Form</h1>
    {{ form.value | json }}
    <form [formGroup]="form" novalidate">
        <ng-container *ngFor="let field of fields" dynamic-field [field]="field" [group]="form"></ng-container>
        <button (click)="clicked()" class="btn btn-primary mr-2" type="submit">Submit</button>
        <button (click)="cancel()" class="btn btn-secondary mr-2" type="button">Cancel</button>
    </form>
</div>
```

And finally do something in you AppComponent to build the dynamic forms

NOTE : You can replace the values for value in the Field class with your property value i.e value: myclass.someproperty

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
            name: 'street',
            label: 'Street:',
            type: 'input',
            inputType: 'text',
            value: this.street
        },
        {
            name: 'password',
            label: 'Password:',
            type: 'input',
            inputType: 'password',
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
            name: 'fillColor',
            label: 'Fill color:',
            type: 'colorpicker',
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
   
}

```

And your app html

```html
<div class="container">
    <app-home [fields]="fields"></app-home>
</div>
```


