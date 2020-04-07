import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormioModule } from 'angular-material-formio';

import {
  MatButtonModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import { HomeComponent } from './home/home.component';
import { DialogComponent } from './shared/dialog/dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormioModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
