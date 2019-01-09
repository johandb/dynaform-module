Dynaform
========

A small library that adds dynamic forms to your application

## Installation

  `npm install dynaform`

## Dependencies
 
   bootstrap-4
   font-awesome

## Usage

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

    constructor(public fb: FormBuilder) {
        super(fb);
    }

    ngOnInit() {
    }

}

```

Create the html template for this component, see below

```html
<div>
    <h1>Dynamic Form</h1>
    <form [formGroup]="dynamicForm" novalidate (ngSubmit)="onSubmit(dynamicForm)">
        <ng-container *ngFor="let field of fields" dynamic-field [field]="field" [group]="dynamicForm"></ng-container>
        <br>
        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
</div>
```

And finally do something in you AppComponent to build the dynamic forms

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

```

And your app html

```html
<div>
    <app-home [fields]="fields"></app-home>
</div>
```


