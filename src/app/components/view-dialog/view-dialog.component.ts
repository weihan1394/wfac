import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { InventoryItem } from 'src/app/models/inventory-item';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss']
})
export class ViewDialogComponent implements OnInit {

  inventoryId: string;
  inventoryDetails: string;

  constructor(public dialogRef: MatDialogRef<ViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ViewDialogModel) { 
      console.log(data);
      console.log(data.element);
      this.inventoryId = data.element.name;
      this.inventoryDetails = data.element.details;
    }

  ngOnInit() {
  }

}

export class ViewDialogModel {

  constructor(public element: InventoryItem) {
  }
}
