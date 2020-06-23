import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { KeycloakService } from "../../keycloak/auth/keycloak.service";
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { RequestsService } from '../../service/requests.service'
import { RequestsItem } from '../../models/requests-item'
import { Requests } from '../../models/requests';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.scss']
})
export class RequestPageComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  username: String;

  displayedColumns = ['request_Id', 'svc_type', 'submittedOn', 'request_Status', 'request_Progress'];
  dataSource: MatTableDataSource<RequestsItem>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private requestsService: RequestsService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // // Create 100 users
    // const users: UserData[] = [];
    // for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('loggedUser');

    // prevent the error message ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    this.changeDetectorRef.detectChanges();

    // get requests
    this.requestsService.getRequests().subscribe(
      response => {
        let requests = new Requests;
        // parse json to object
        requests = response;
        this.dataSource = new MatTableDataSource(requests.requests);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
      }
    )

  }

  getKeycloakService() {
    return KeycloakService
  }

  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  refreshSource() {
    // get requests
    this.requestsService.getRequests().subscribe(
      response => {
        let requests = new Requests;
        // parse json to object
        requests = response;
        this.dataSource = new MatTableDataSource(requests.requests);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
      }
    )
  }
}