import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string;
        
        if (error instanceof HttpErrorResponse) {
            const body = error.error;
            errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
        }else{
          errorMessage = error.message ? error.message : error.toString()
        }
        //sure, we are only show on the console. But you can to use other forms to alert the message to user.
        //Was just to you understand how to work.
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}