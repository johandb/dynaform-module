import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Field } from "../../model/field.interface";

@Component({
    exportAs: "dynamicForm",
    selector: "dynamic-form",
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {
    @Input() fields: Field[] = [];

    @Output() submit: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;

    get value() {
        return this.form.value;
    }

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

    ngOnChanges() {
        this.form = this.createFormControls();
    }

    onSubmit(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.form.valid) {
            this.submit.emit(this.form.value);
        } else {
            this.validateAllFormFields(this.form);
        }
    }

    createFormControls() {
        const group = this.fb.group({});
        this.fields.forEach(field => {
            if (field.type === "button") return;
            const control = this.fb.control(
                field.value,
                this.bindValidations(field.validations || [])
            );
            group.addControl(field.name, control);
        });
        return group;
    }

    bindValidations(validations: any) {
        if (validations.length > 0) {
            const validList = [];
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
            control.markAsTouched({ onlySelf: true });
        });
    }
}
