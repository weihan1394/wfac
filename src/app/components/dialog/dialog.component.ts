import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Provisioning } from '../../models/provisioning';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  modalTitle: string;
  provisioning: Provisioning;
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
  submission: any = {
    data: {
      firstName: 'Joe',
      lastName: 'Smith',
      email: 'joe@example.com',
      favoriteColor: 'banana',
      phoneNumber: '(123) 456-7890',
      salary: 45000
    }
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.provisioning = data.provisioning;
    console.log(data);
  }

  ngOnInit() {
    console.log("start")
  }

  onSubmit(submission) {
    console.log(submission);
  }

}
