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
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { DialogComponent } from './components/dialog/dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './root/main/main.component';
import { ProvisioningPageComponent } from './pages/provisioning-page/provisioning-page.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';

// keycloak
import { KeycloakService } from "./core/auth/keycloak.service";
import { AuthGuardService } from "./core/guard/auth-guard.service";
import { SecuredHttpInterceptor } from './core/interceptor/secured-http.interceptor';

// ngx-toastr
import { ToastrModule } from 'ngx-toastr';

// spinner
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    DialogComponent,
    FooterComponent,
    MainComponent,
    ProvisioningPageComponent,
    RequestPageComponent,
    InventoryPageComponent,
    HeaderComponent
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
    DialogComponent
  ]
})
export class AppModule { }
