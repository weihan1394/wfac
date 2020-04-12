import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormioModule } from 'angular-material-formio';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
} from '@angular/material';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DialogComponent } from './components/dialog/dialog.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './root/main/main.component';
import { ProvisioningPageComponent } from './pages/provisioning-page/provisioning-page.component';


@NgModule({
  declarations: [
    DialogComponent,
    HomePageComponent,
    AboutPageComponent,
    FooterComponent,
    MainComponent,
    ProvisioningPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormioModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [MainComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
