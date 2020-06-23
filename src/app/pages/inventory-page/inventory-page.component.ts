import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { KeycloakService } from "../../keycloak/auth/keycloak.service";
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { InventoryService } from '../../service/inventory.service'
import { Inventory } from 'src/app/models/inventory';
import { InventoryItem } from 'src/app/models/inventory-item';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ViewDialogComponent, ViewDialogModel } from 'src/app/components/view-dialog/view-dialog.component';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  username: String;

  displayedColumns = ['inventory_Id', 'svc_type', 'name', 'submittedOn', 'createdOn', 'actions'];
  dataSource: MatTableDataSource<InventoryItem>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private inventoryService: InventoryService, public dialog: MatDialog, private toastr: ToastrService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('loggedUser');

    // prevent the error message ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    this.changeDetectorRef.detectChanges();
    // get requests
    this.inventoryService.getInventory().subscribe(
      response => {
        let inventory = new Inventory;
        // parse json to object
        inventory = response;
        this.dataSource = new MatTableDataSource(inventory.inventory);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
      }
    )
  }

  getKeycloakService() {
    return KeycloakService
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  refreshSource() {
    // get requests
    this.inventoryService.getInventory().subscribe(
      response => {
        let inventory = new Inventory;
        // parse json to object
        inventory = response;
        this.dataSource = new MatTableDataSource(inventory.inventory);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
      }
    )
  }

  clickMethod(name: string) {
    if (confirm("Are you sure to delete " + name)) {
    }
  }

  result: boolean;
  confirmDialog(element: InventoryItem): void {
    const message = 'Are you sure you want to delete ' + element.name + '?';
    const dialogData = new ConfirmDialogModel("Confirmation", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      // confirm delete
      if (this.result) {
        // delete from service
        this.inventoryService.deleteInventory(element.inventory_Id).subscribe(
          result => {
            this.toastr.success('', result.message, {
              progressBar: true,
              closeButton: true,
              progressAnimation: 'decreasing'
            });

            this.refreshSource();
          },
          err => {
            this.toastr.warning('', err, {
              progressBar: true,
              closeButton: true,
              progressAnimation: 'decreasing'
            });
          });
      }
    });
  }

  viewDialog(element: InventoryItem): void {
    const dialogData = new ViewDialogModel(element);
    const dialogRef = this.dialog.open(ViewDialogComponent, {
      minWidth: "180px",
      maxWidth: "400px",
      data: dialogData,
      disableClose: true
    });
  }
}
