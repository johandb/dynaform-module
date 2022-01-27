import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/field';

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
    field!: Field;
    group!: FormGroup;

    constructor() { }

    ngOnInit() {
    }

    onColorPickerChange(colorCode: any): void {
        let control = this.group.get(this.field.id);
        control?.setValue(colorCode);
        //this.group.get(this.field.id).setValue(colorCode);
    }
}
