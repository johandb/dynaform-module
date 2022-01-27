import { Directive, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputComponent } from '../controls/input/input.component';
import { SelectComponent } from '../controls/select/select.component';
import { RadioButtonComponent } from '../controls/radiobutton/radiobutton.component';
import { CheckboxComponent } from '../controls/checkbox/checkbox.component';
import { TextAreaComponent } from '../controls/text-area/text-area.component';
import { ColorPickerComponent } from '../controls/color-picker/color-picker.component';
//import { ButtonComponent } from '../controls/button/button.component';
import { DateComponent } from '../controls/date/date.component';

import { Field } from '../model/field';

const controlMapper: any = {
    input: InputComponent,
    select: SelectComponent,
    radiobutton: RadioButtonComponent,
    checkbox: CheckboxComponent,
    textarea: TextAreaComponent,
    date: DateComponent,
    colorpicker: ColorPickerComponent
    // button: ButtonComponent,
};

@Directive({
    selector: '[dynamic-field]'
})
export class DynamicFieldDirective {
    @Input() field!: Field;
    @Input() group!: FormGroup;

    componentRef: any;

    constructor(private resolver: ComponentFactoryResolver, private viewContainer: ViewContainerRef) {
    }

    ngOnInit() {
        this.viewContainer.clear();
        const factory = this.resolver.resolveComponentFactory(controlMapper[this.field.type]);
        this.componentRef = this.viewContainer.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    }

}
