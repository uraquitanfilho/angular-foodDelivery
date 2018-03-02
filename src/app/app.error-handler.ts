import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import {NotificationService} from './shared/messages/notification.service';
import { LoginService } from './security/login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
    
    constructor(private ns: NotificationService, 
                private injector : Injector,
                private zone: NgZone) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {
       if(errorResponse instanceof HttpErrorResponse) {
           const message = errorResponse.error.message;
           //resolve problem about to run some code outside some zone.
           this.zone.run(() => {

            switch (errorResponse.status) {
               case 401:
                   this.injector.get(LoginService).handleLogin();
                   break;

               case 403:
                   this.ns.notify(message || 'Access Denied!');
                   break;
               case 404:
                   this.ns.notify(message || 'Page Not Found!');
                   break;
               
               default:
                   break;
                   
              }
          });    
       } 
       super.handleError(errorResponse);
    }
}