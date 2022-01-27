import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';

import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { RadioButtonComponent } from './controls/radiobutton/radiobutton.component';
import { InputComponent } from './controls/input/input.component';
import { SelectComponent } from './controls/select/select.component';
import { SimpleDatePickerComponent } from './controls/date-picker/simple-date-picker.component';
import { DateComponent } from './controls/date/date.component';
import { TextAreaComponent } from './controls/text-area/text-area.component';
import { ColorPickerComponent } from './controls/color-picker/color-picker.component';

@NgModule({
  declarations: [
    DynamicFieldDirective,
    CheckboxComponent,
    RadioButtonComponent,
    InputComponent,
    SelectComponent,
    SimpleDatePickerComponent,
    DateComponent,
    TextAreaComponent,
    ColorPickerComponent,
    DynamicFormComponent
  ],
  imports: [
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    DynamicFieldDirective,
    DynamicFormComponent
  ]
})
export class DynaformModule { }
