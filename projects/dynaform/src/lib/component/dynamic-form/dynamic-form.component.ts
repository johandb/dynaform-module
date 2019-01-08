import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';

import { Field } from '../../model/field.interface';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
    @Input() fields: Field[] = [];

    dynamicForm: FormGroup;

    constructor(public fb: FormBuilder) {
    }

    ngOnInit() {
        this.dynamicForm = this.createForm();
    }

    ngOnChanges() {
        this.dynamicForm = this.createForm();
    }

    createForm(): FormGroup {
        var formGroup = this.fb.group({});
        this.fields.forEach(field => {
            var formControl = this.fb.control(field.value, this.bindValidations(field.validations || []));
            formGroup.addControl(field.name, formControl);
        });
        return formGroup;
    }

    bindValidations(validations: any): ValidatorFn {
        if (validations.length > 0) {
            const validList = [];
            validations.forEach(valid => {
                validList.push(valid.validator);
            });
            return Validators.compose(validList);
        }
        return null;
    }

    onSubmit(theForm) {
    }

}
