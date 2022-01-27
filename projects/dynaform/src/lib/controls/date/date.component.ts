import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/field';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
    field!: Field;
    group!: FormGroup;

    constructor() { }

    ngOnInit() {
        //console.log('field:', this.field);
    }

    onDatePickerChange(dateValue: any): void {
        //console.log('onDatePickerChange:', dateValue);
        //if(this.group) {
        let control = this.group.get(this.field.id);
        control?.setValue(dateValue);
        //this.group.get(this.field.id).setValue(dateValue);
        this.field.value = dateValue;
        //}
        
        //console.log('group:', this.group);
        //console.log('field:', this.field);
    }

}
