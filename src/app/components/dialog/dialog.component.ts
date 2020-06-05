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
  provisioningForm: String;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService, private provisioningService: ProvisioningService) {
    console.log("here");
    console.log(data);
    this.provisioningForm = data.provisioning.vm_form;
    this.provisioningItem = data.provisioning;
  }

  onSubmit(submission) {
    // add form id
    var formDetails = {"vm_form": this.provisioningForm};
    var moreDetails = submission.data;
    moreDetails.vm_form = this.provisioningForm;

    this.provisioningService.sendProvisioning(moreDetails).subscribe(
      result => {
        console.log(result);
      },
      err => {
        console.log(err)
      }
    );
    this.dialogRef.close();

    this.toastr.success('', 'Provisioned created!', {
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
      toastClass: 'toast-custom'
    });
  }
}
