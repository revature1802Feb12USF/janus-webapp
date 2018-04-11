import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

/**
 * this class intercepts each HTTP request, clones it,
 * and adds criteria before actually performing the
 * AJAX request
 */
@Injectable()
export class HydraInterceptor implements HttpInterceptor {

    private messages = "woohoo, you got the message";

    constructor() { }

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
                //do error handling
                console.log("This is an error yay");
                console.log("this is the error url:" + err.url);
                //do we want to put a variable in this ts to add the messages to and then send that variable?
                //or, like.... ugh... idk
            }
        });
    }

    getMessages() {
        return this.messages;
    }
}
