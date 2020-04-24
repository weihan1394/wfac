import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ProvisioningItem } from '../../models/provisioning-item';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  provisioningItem: ProvisioningItem;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.provisioningItem = data.provisioning;
  }

  onSubmit(submission) {
    console.log(submission.data);
  }
}
