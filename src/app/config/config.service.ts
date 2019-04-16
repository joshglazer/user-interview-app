import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor(private http: HttpClient) { }
    
    private handleError(error: HttpErrorResponse) {
        // error handler here
    };

    getConfig(externalLink) {
        return this.http.get(externalLink);
    }
    
}
