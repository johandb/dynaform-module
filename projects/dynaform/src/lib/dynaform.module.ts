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
import { TextAreaComponent } from './controls/text-area/text-area.component';
import { ColorPickerComponent } from './controls/color-picker/color-picker.component';
import { SimpleDatePickerComponent } from './controls/date-picker/simple-date-picker.component';
import { DateComponent } from './controls/date/date.component';

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
        TextAreaComponent,
        SimpleDatePickerComponent,
        DateComponent,
        DynamicFormComponent
    ],
    entryComponents: [
        InputComponent,
        SelectComponent,
        CheckboxComponent,
        RadiobuttonComponent,
        ColorPickerComponent,
        ButtonComponent,
        TextAreaComponent,
        DateComponent,
        SimpleDatePickerComponent
    ],
    exports: [
        DynamicFieldDirective,
        DynamicFormComponent
    ]
})
export class DynaformModule { }
