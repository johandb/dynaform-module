import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/field.interface';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
    field: Field;
    group: FormGroup;

    constructor() { }

    ngOnInit() {
        //console.log('field:', this.field);
    }

    onDatePickerChange(dateValue: string): void {
        //console.log('onDatePickerChange:', dateValue);
        this.group.get(this.field.name).setValue(dateValue);
        //console.log('group:', this.group);
        this.field.value = dateValue;
        //console.log('field:', this.field);
    }

}
