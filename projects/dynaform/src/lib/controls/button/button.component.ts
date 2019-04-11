import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field } from '../../model/field.interface';

@Component({
    selector: "app-button",
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    field: Field;
    group: FormGroup;

    constructor() {
    }

    ngOnInit() {
    }

}
