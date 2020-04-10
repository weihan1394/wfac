import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import * as ubuntu from '../../../assets/ubuntu.json';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  modalTitle: string;
  customForm = ubuntu;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    console.log(data);
  }

  ngOnInit() {
    console.log("start")
  }

  onSubmit(submission) {
    console.log(submission);
  }

}
