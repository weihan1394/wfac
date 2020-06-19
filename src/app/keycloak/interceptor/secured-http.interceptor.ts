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

        //const started = Date.now();
        if (KeycloakService.auth.authz != null && KeycloakService.auth.loggedIn && KeycloakService.auth.authz.authenticated) {
            KeycloakService.getToken()
            let kcToken = KeycloakService.auth.authz.token;
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + kcToken
                }
            });
        }

        return next.handle(request)
            .pipe(tap(
                // event => console.log(event),
                // error => console.log(error)
            ), finalize(() => {
                this.count--;
                if (this.count == 0) {
                    this.spinner.hide()
                }
            })
            );
    }
}