import { Component, OnInit } from '@angular/core';
import * as ubuntu from '../../../assets/ubuntu.json';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor() { }
  customForm = ubuntu;

  ngOnInit() {
  }

  onSubmit(submission) {
    console.log(submission);
  }

}
