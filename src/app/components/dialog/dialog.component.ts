import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Provisioning } from '../../models/provisioning';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  provisioning: Provisioning;
  url: string;
  customForm: any = {
    components: [
      {
        type: 'textfield',
        label: 'First Name',
        key: 'firstName',
        validate: {
          required: true
        }
      },
      {
        type: 'textfield',
        label: 'Last Name',
        key: 'lastName',
        validate: {
          required: true
        }
      },
      {
        type: 'select',
        key: 'favoriteColor',
        label: 'Favorite Color',
        defaultValue: 'orange',
        dataSrc: 'values',
        data: {
          values: [
            {
              label: 'Apple',
              value: 'apple'
            },
            {
              label: 'Banana',
              value: 'banana'
            },
            {
              label: 'Orange',
              value: 'orange'
            }
          ]
        }
      },
      {
        type: 'email',
        label: 'Email',
        key: 'email'
      },
      {
        type: 'phoneNumber',
        label: 'Phone Number',
        key: 'phoneNumber'
      },
      {
        type: 'currency',
        label: 'Salary',
        key: 'salary'
      },
      {
        key: 'submit',
        type: 'button',
        disableOnInvalid: true,
        action: 'submit',
        label: 'Submit'
      }
    ]
  };

  test: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.provisioning = data.provisioning;
    // this.url = this.provisioning.url;
    // this.test = JSON.parse(this.provisioning.url);
  }

  onSubmit(submission) {
    console.log(submission);
  }
}
