import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { DynamicFieldDirective } from 'projects/dynaform/src/lib/directives/dynamic-field.directive';
import { InputComponent, ColorPickerComponent } from 'projects/dynaform/src/public_api';
import { ButtonComponent } from 'projects/dynaform/src/lib/controls/button/button.component';
import { SelectComponent } from 'projects/dynaform/src/lib/controls/select/select.component';
import { TextAreaComponent } from 'projects/dynaform/src/lib/controls/text-area/text-area.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DynamicFieldDirective,
        InputComponent,
        ColorPickerComponent,
        ButtonComponent,
        SelectComponent,
        TextAreaComponent
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
        TextAreaComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
