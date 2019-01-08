import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DynaformModule } from '../../projects/dynaform/src/lib/dynaform.module';
import { DynamicFormComponent } from '../app/components/dynamic-form/dynamic-form.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent
    ],
    imports: [
        BrowserModule,
        DynaformModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
