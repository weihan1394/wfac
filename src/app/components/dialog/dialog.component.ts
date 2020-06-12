import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServicesItem } from '../../models/services-item';
import { ToastrService } from 'ngx-toastr';

import { ServicesService } from '../../service/services.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  provisioningItem: ServicesItem;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService, private servicesService: ServicesService) {
    this.provisioningItem = data.provisioning;
  }

  onSubmit(submission) {
    var moreDetails = submission.data;
    // add form details
    moreDetails.svc_id = this.provisioningItem.svc_id;
    moreDetails.svc_icon = this.provisioningItem.svc_icon;
    moreDetails.svc_name = this.provisioningItem.svc_name;
    moreDetails.svc_type = this.provisioningItem.svc_type;
    moreDetails.svc_info = this.provisioningItem.svc_info

    this.servicesService.sendProvisioning(moreDetails).subscribe(
      result => {
      },
      err => {
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
