import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/field';

@Component({
    selector: 'app-text-area',
    templateUrl: './text-area.component.html',
    styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
    field!: Field;
    group!: FormGroup;

    constructor() { }

    ngOnInit() {
    }


}
