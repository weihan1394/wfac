import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProvisioningItem } from '../../models/provisioning-item';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  provisioningItem: ProvisioningItem;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.provisioningItem = data.provisioning;
  }

  onSubmit(submission) {
    console.log(submission.data);
    this.dialogRef.close();
  }
}
