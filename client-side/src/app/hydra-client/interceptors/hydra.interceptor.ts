import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { ErrorAlertComponent } from '../ui/error-alert/error-alert.component';

/**
 * this class intercepts each HTTP request, clones it,
 * and adds criteria before actually performing the
 * AJAX request
 */
@Injectable()
export class HydraInterceptor implements HttpInterceptor {

    constructor(private alert: ErrorAlertComponent) { }

    /*
    * intercept each HTTP rquest and return a modified request
    */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        return next.handle(modifiedRequest).do((event: HttpEvent<any>) => {}, (err: any) => {
            if(err instanceof HttpErrorResponse) {
                console.log("this is the error url:" + err.url);
                this.alert.showError(err.url);
            }
        });
    }

}
