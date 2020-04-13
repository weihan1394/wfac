import ubuntu from '../../../assets/provisioning/ubuntu.json';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
  } from '@angular/core';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
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
  constructor(public dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private httpClient: HttpClient) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  lsProvisioning = [];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Provisioning> = new MatTableDataSource<Provisioning>(this.lsProvisioning);

  ngOnInit() {
    this.generateTest();

    // prevent the error message ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openModal(provisioning) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "75%";
    
    dialogConfig.data = {
      provisioning: provisioning,
      url: provisioning.url,
    };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   alert("response: " + result)
    // });
  }

  // populate modal
  generateTest() {
    // console.log(ubuntu);
    console.log(JSON.stringify(ubuntu));
    for (let index = 0; index < 12; index++) {
      let provisioning = new Provisioning;
      provisioning.icon = 'https://cdn0.iconfinder.com/data/icons/flat-round-system/512/ubuntu-512.png';
      provisioning.name = 'Ubuntu ' + index;
      provisioning.operatingSystem = "Linux";
      provisioning.info = 'info';
      provisioning.url = JSON.stringify(ubuntu);

      this.lsProvisioning.push(provisioning);
    }
  }
}
