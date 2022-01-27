import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';

import { DynamicFormComponent, Field } from 'dynaform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;

  fields: Field[] = [
    {
      id: 'street',
      type: 'input',
      label: 'Street:',
      inputType: 'text',
      value: '',
      placeholder: 'Geef een straat',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Street Required',
        },
      ],
    },
    {
      id: 'robot',
      label: 'I am not a robot',
      type: 'checkbox',
      inputType: 'checkbox',
      value: true,
    },
    {
      id: 'gender',
      type: 'radiobutton',
      label: 'Gender:',
      inputType: 'radio',
      options: [
        { value: 'Male', enabled: true, description: 'Male' },
        { value: 'Female', enabled: true, description: 'Female' },
      ],
      value: 'Male',
    },
    {
      id: 'colors',
      type: 'select',
      label: 'Select color',
      value: 'RED',
      options: [
        {
          value: 'BLUE',
          enabled: true,
          description: 'Blauw kleur',
        },
        {
          value: 'RED',
          enabled: true,
        },
        {
          value: 'YELLOW',
          enabled: false,
        },
        {
          value: 'GREEN',
          enabled: true,
        },
      ],
    },
    {
      id: 'fillColor',
      type: 'colorpicker',
      label: 'Fill color:',
      inputType: 'text',
      value: 'red',
    },
    {
      id: 'vraag',
      type: 'textarea',
      label: 'Uw vraag',
      rows: 5,
      value: 'Hallo',
    },
    {
      id: 'currentDate',
      type: 'date',
      label: 'Date value',
      inputType: 'text',
      //value: this.today,
      disabled: false,
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Datum is verplicht',
        },
        {
          name: 'pattern',
          validator: Validators.pattern(
            '(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}'
          ),
          message: 'Datum formaat niet juist (dd-mm-jjjj)',
        },
      ],
    },
  ];

  onSubmit() {
    console.log('model:', this.form.form.value);
  }
}
