import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormioModule } from 'angular-material-formio';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressBarModule
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';

// common component
import { DialogComponent } from './components/dialog/dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './root/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ViewDialogComponent } from './components/view-dialog/view-dialog.component';

// pages component
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

// keycloak
import { KeycloakService } from "./keycloak/auth/keycloak.service";
import { AuthGuardService } from "./keycloak/guard/auth-guard.service";
import { SecuredHttpInterceptor } from './keycloak/interceptor/secured-http.interceptor';

// ngx-toastr
import { ToastrModule } from 'ngx-toastr';

// spinner
import { NgxSpinnerModule } from 'ngx-spinner';

// common
import { SafeHtmlPipe } from './common/safe-html.pipe';

@NgModule({
  declarations: [
    DialogComponent,
    FooterComponent,
    MainComponent,
    ServicesPageComponent,
    RequestPageComponent,
    InventoryPageComponent,
    HeaderComponent,
    ConfirmDialogComponent,
    ViewDialogComponent,
    SafeHtmlPipe,
    Error404PageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormioModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatProgressBarModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule
  ],
  providers: [
    KeycloakService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecuredHttpInterceptor,
      multi: true
    },
  ],
  bootstrap: [MainComponent],
  entryComponents: [
    DialogComponent,
    ConfirmDialogComponent,
    ViewDialogComponent
  ]
})
export class AppModule { }
