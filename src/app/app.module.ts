import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { DynaformModule } from 'dynaform';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        ColorPickerModule,
        DynaformModule
    ],
    entryComponents: [
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
