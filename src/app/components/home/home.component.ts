import { Component, OnInit, OnChanges } from '@angular/core';
import { DynamicFormComponent } from 'projects/dynaform/src/public_api';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent extends DynamicFormComponent implements OnInit, OnChanges {

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
        console.log('canceled in home');
    }

    clicked() {
        console.log('clicked in home:', this.form.value);
    }
}
