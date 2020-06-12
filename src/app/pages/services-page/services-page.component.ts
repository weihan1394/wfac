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
import { KeycloakService } from "../../core/auth/keycloak.service";

import { ServicesService } from '../../service/services.service';
import { Services } from '../../models/services';
import { ServicesItem } from '../../models/services-item';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  searchText;
  mobileQuery: MediaQueryList;
  username: String;
  private _mobileQueryListener: () => void;
  constructor(public dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private httpClient: HttpClient, private servicesService: ServicesService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<ServicesItem> = new MatTableDataSource<ServicesItem>();

  // dataSource;

  ngOnInit() {
    // get the username
    KeycloakService.getUserDetails().then(
      userDetails => {
        // check if userDetails object has username
        if (userDetails.hasOwnProperty('username')) {
          sessionStorage.loggedUser = userDetails["username"];

          this.username = sessionStorage.loggedUser;
          // sessionStorage.setItem('loggedUser', userDetails["username"]);
        }
      }
    );

    // get provisioning
    this.servicesService.getProvisioning().subscribe(
      response => {
        let provisioningReader = new Services;
        // parse json to object
        provisioningReader = response;
        this.dataSource.data = provisioningReader.services;
      }, error => {
      }
    )

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
  }

  getKeycloakService() {
    return KeycloakService
  }
}
