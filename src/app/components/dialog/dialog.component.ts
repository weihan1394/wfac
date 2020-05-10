import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProvisioningItem } from '../../models/provisioning-item';
import { ToastrService } from 'ngx-toastr';

import { ProvisioningService } from '../../service/provisioning.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  provisioningItem: ProvisioningItem;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService, private provisioningService: ProvisioningService) {
    this.provisioningItem = data.provisioning;
  }

  onSubmit(submission) {
    console.log(submission.data);
    console.log(submission);

    this.provisioningService.sendProvisioning(submission.data).subscribe(
      result => {
        console.log(result);
      },
      err => {
        console.log(err)
      }
    );
    this.dialogRef.close();

    this.toastr.success('', 'Provisioned created!', {
      timeOut: 20000,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
      toastClass: 'toast-custom'
    });
  }
}
