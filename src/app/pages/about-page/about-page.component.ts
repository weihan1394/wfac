import { Component, OnInit } from '@angular/core';
import ubuntu from '../../../assets/ubuntu.json';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor() { }
  customForm = ubuntu;

  ngOnInit() {
    // this.customForm = ubuntu;
    console.log(this.customForm)
  }

  onSubmit(submission) {
    console.log(submission);
  }
}
