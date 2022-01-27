import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/field';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
    field!: Field;
    group!: FormGroup;

    constructor() { }

    ngOnInit() {
        this.field.options?.forEach(element => {
            if (element.description === undefined || element.description === null) {
                element.description = element.value;
            }
        });
    }
}
