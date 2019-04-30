import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/field.interface';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    field: Field;
    group: FormGroup;

    constructor() { }

    ngOnInit() {
        //console.log('inputcomponent : ngoninit');
        console.log('field:', this.field);
        if (this.field.placeholder === undefined) {
            this.field.placeholder = '';
        }
    }

}
