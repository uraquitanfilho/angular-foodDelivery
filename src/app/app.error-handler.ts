import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
    static handleError(error: Response | any) {
        let errorMessage: string;
        
        if (error instanceof Response) {
            errorMessage = `Error ${error.status} trying to access the URL ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error.toString();
        }
        //sure, we are only show on the console. But you can to use other forms to alert the message to user.
        //Was just to you understand how to work.
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}