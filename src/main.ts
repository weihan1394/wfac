import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { KeycloakService } from "./app/core/auth/keycloak.service";

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

KeycloakService.init()
  .then(() => {
    console.log("1");
    const platform = platformBrowserDynamic();
    console.log("2");
    platform.bootstrapModule(AppModule);
    console.log("3");
  })
  .catch(function (error) {
    console.log('err');
    console.log(error)
    console.log(JSON.stringify(error)); 
    return;
  });