import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogComponent } from '../../components/dialog/dialog.component'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { Provisioning } from '../../models/provisioning';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-provisioning-page',
  templateUrl: './provisioning-page.component.html',
  styleUrls: ['./provisioning-page.component.scss']
})
export class ProvisioningPageComponent implements OnInit {

  searchText;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(public dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // this.generateTest();
  }

  lsProvisioning = [];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Provisioning> = new MatTableDataSource<Provisioning>(this.lsProvisioning);

  ngOnInit() {
    this.generateTest();

    // prevent the error message ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    // this.changeDetectorRef.detectChanges();
    // this.dataSource.paginator = this.paginator;
    // this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
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
