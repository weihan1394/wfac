import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DialogComponent } from '../../components/dialog/dialog.component'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { Provisioning } from '../../models/provisioning';

@Component({
  selector: 'app-provisioning-page',
  templateUrl: './provisioning-page.component.html',
  styleUrls: ['./provisioning-page.component.scss']
})
export class ProvisioningPageComponent implements OnInit {

  searchText;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // this.generateTest();
  }

  lsProvisioning = [];
  ngOnInit() {
    this.generateTest();
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      alert("response: " + result)
    });
  }

  // populate modal
  generateTest() {
    for (let index = 0; index < 12; index++) {
      let provisioning = new Provisioning;
      provisioning.icon = 'https://cdn0.iconfinder.com/data/icons/flat-round-system/512/ubuntu-512.png';
      provisioning.name = 'Ubuntu ' + index;
      provisioning.operatingSystem = "Linux";
      provisioning.info = 'info';

      this.lsProvisioning.push(provisioning);
    }
  }
}
