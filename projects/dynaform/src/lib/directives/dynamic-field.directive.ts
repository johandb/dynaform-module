import { Directive, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputComponent } from '../controls/input/input.component';
import { SelectComponent } from '../controls/select/select.component';
import { RadiobuttonComponent } from '../controls/radiobutton/radiobutton.component';
import { CheckboxComponent } from '../controls/checkbox/checkbox.component';
import { ColorPickerComponent } from '../controls/color-picker/color-picker.component';
import { ButtonComponent } from '../controls/button/button.component';
import { TextAreaComponent } from '../controls/text-area/text-area.component';
import { DateComponent } from '../controls/date/date.component';

import { Field } from '../model/field.interface';

const controlMapper = {
    input: InputComponent,
    select: SelectComponent,
    radiobutton: RadiobuttonComponent,
    checkbox: CheckboxComponent,
    colorpicker: ColorPickerComponent,
    button: ButtonComponent,
    textarea: TextAreaComponent,
    date: DateComponent
};

@Directive({
    selector: '[dynamic-field]'
})
export class DynamicFieldDirective {
    @Input() field: Field;
    @Input() group: FormGroup;

    componentRef: any;

    constructor(private resolver: ComponentFactoryResolver, private viewContainer: ViewContainerRef) {
    }

    ngOnInit() {
        const factory = this.resolver.resolveComponentFactory(controlMapper[this.field.type]);
        this.componentRef = this.viewContainer.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    }

}
