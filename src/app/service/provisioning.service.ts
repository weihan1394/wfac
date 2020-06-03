import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProvisioningService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = '/api';
  getProvisioning(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/forms").pipe
      (
        catchError(this.handleError)
      )
  }

  sendProvisioning(result: any): Observable<any> {
    return this.httpClient.post<any>('/api2/provisioning-example', result, httpOptions).pipe
      (
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error.message;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
    }
    
    console.error(error);
    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
