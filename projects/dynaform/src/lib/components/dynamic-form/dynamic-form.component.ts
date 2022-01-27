import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Field, Validator } from "../../model/field";

@Component({
    exportAs: "dynamicForm",
    selector: "dynamic-form",
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {
    @Input() fields: Field[] = [];

    @Output() submit: EventEmitter<any> = new EventEmitter<any>();

    form!: FormGroup;

    get value() {
        return this.form.value;
    }

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

    ngOnChanges() {
        this.form = this.createFormControls();
    }

    createFormControls() {
        const group = this.fb.group({});
        this.fields.forEach(field => {
            //console.log('field:', field);
            if (field.type === "button") return;
            if (field.type == "checkbox") {
                const control = this.fb.control(field.selected);
                group.addControl(field.id, control);
            } else {
                const control = this.fb.control({ value: field.value, disabled: field.disabled },
                    this.bindValidations(field.validations || [])
                );
                group.addControl(field.id, control);
            }
        });
        return group;
    }

    bindValidations(validations: any[]) {
        if (validations.length > 0) {
            const validList: any[] = [];
            validations.forEach(valid => {
                validList.push(valid.validator);
            });
            return Validators.compose(validList);
        }
        return null;
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            control?.markAsTouched({ onlySelf: true });
        });
    }
}
