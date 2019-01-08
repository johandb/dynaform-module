import { Component, OnInit } from '@angular/core';
import { DynamicFormComponent } from 'projects/dynaform/src/public_api';
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
