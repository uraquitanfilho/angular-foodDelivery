
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from './login/login.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   //using injector its possible to get informations
    constructor(private injector: Injector){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService);
        if(loginService.isLoggedIn()) {
            //clone used to add new parameters to request.
            const authRequest = request.clone({setHeaders: {'Authorization':`Bearer ${loginService.user.accessToken}`}});
            return next.handle(authRequest)
        } else {
            return next.handle(request);
        }
        //console.log('intercept', ) 
    }
}