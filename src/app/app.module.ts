import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';

import { DynamicFieldDirective } from 'projects/dynaform/src/lib/directives/dynamic-field.directive';
import { DynamicFormComponent } from 'projects/dynaform/src/lib/component/dynamic-form/dynamic-form.component';
import { InputComponent, ColorPickerComponent, CheckboxComponent } from 'projects/dynaform/src/public_api';
import { ButtonComponent } from 'projects/dynaform/src/lib/controls/button/button.component';
import { SelectComponent } from 'projects/dynaform/src/lib/controls/select/select.component';
import { TextAreaComponent } from 'projects/dynaform/src/lib/controls/text-area/text-area.component';
import { SimpleDatePickerComponent } from 'projects/dynaform/src/lib/controls/date-picker/simple-date-picker.component';
import { DateComponent } from 'projects/dynaform/src/lib/controls/date/date.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFieldDirective,
        InputComponent,
        ColorPickerComponent,
        ButtonComponent,
        CheckboxComponent,
        SelectComponent,
        TextAreaComponent,
        SimpleDatePickerComponent,
        DateComponent,
        DynamicFormComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        ColorPickerModule
    ],
    entryComponents: [
        InputComponent,
        ColorPickerComponent,
        ButtonComponent,
        SelectComponent,
        CheckboxComponent,
        TextAreaComponent,
        SimpleDatePickerComponent,
        DateComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
