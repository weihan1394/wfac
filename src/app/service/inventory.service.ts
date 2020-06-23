import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = environment.backend.baseURL;

  getInventory(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/inventory").pipe
      (
        catchError(this.handleError)
      )
  }

  deleteInventory(inventory: any): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + "/inventory/" + inventory).pipe
      (
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      // errorMessage = "An unknown error has occurred: " + error.error.message;
      errorMessage = error.error.message;
    }
    else {
      // errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
      errorMessage = error.error.message;
    }
    
    return throwError(errorMessage);
  }
}
