import {CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, RouterState} from '@angular/router';
import {Injectable} from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) {

    }

    checkAuthentication(path: string) : boolean {
        const loggedIn = this.loginService.isLoggedIn();
        if(!loggedIn) {
            this.loginService.handleLogin(`/${path}`);
        }
        return loggedIn;        
    }
    //prevent lazy loading to run. Depends the login to access
    canLoad(route: Route): boolean  {
       return this.checkAuthentication(route.path);
    }
                //copia da rota ativada                //arvore. tem o caminho de todas as rotas q chegaram no destino da rota
    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) : boolean {
          
        return this.checkAuthentication(activatedRoute.routeConfig.path);
    }
}