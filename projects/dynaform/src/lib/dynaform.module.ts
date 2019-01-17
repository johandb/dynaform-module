import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { ColorPickerModule } from 'ngx-color-picker';

import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { InputComponent } from './controls/input/input.component';
import { RadiobuttonComponent } from './controls/radiobutton/radiobutton.component';
import { SelectComponent } from './controls/select/select.component';
import { ButtonComponent } from './controls/button/button.component';
import { ColorPickerComponent } from './controls/color-picker/color-picker.component';

import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ColorPickerModule
    ],
    declarations: [
        DynamicFieldDirective,
        CheckboxComponent,
        InputComponent,
        RadiobuttonComponent,
        SelectComponent,
        ButtonComponent,
        ColorPickerComponent,
        DynamicFormComponent
    ],
    entryComponents: [
        InputComponent,
        SelectComponent,
        CheckboxComponent,
        RadiobuttonComponent,
        ColorPickerComponent
    ],
    exports: [
        DynamicFieldDirective,
        DynamicFormComponent
    ]
})
export class DynaformModule { }
