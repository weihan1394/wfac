import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { KeycloakService } from '../auth/keycloak.service';
import { finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class SecuredHttpInterceptor implements HttpInterceptor {

    count = 0;

    constructor(private spinner: NgxSpinnerService) { }

    /**
     * Intercepts the http request and add the bearer token of the currently logged user.
     * 
     * @param request http request
     * @param next http handler
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // spinner
        this.spinner.show()
        this.count++;
        
        console.log("trying to intercept..");
        console.log(KeycloakService.auth.authz);
        console.log(KeycloakService.auth.loggedIn);
        console.log(KeycloakService.auth.authz.authenticated)
        //const started = Date.now();
        if (KeycloakService.auth.authz != null && KeycloakService.auth.loggedIn && KeycloakService.auth.authz.authenticated) {
            KeycloakService.getToken()
            let kcToken = KeycloakService.auth.authz.token;
            console.log(kcToken);
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + kcToken
                }
            });
        } else {
            console.log("trying to logout at interceptor..")
            KeycloakService.logout();
        }
        return next.handle(request)
            .pipe(tap(
            ), finalize(() => {
                this.count--;
                if (this.count == 0) {
                    this.spinner.hide()
                }
            })
            );
    }
}