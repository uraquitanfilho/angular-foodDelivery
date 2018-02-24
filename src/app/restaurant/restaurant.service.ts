/*We will use another service "Http service" inside a service, so.. 
  VERY IMPORTANT: TO use service inside service you need to use the decorator @Injectable()
*/
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Store} from './store/store.model';

import { URL_API } from '../app.api'; //Was imported the CONST URL_API
//WE will to use OBSERVABLE. REMEMBER? To work with REST API need to use RXJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//to work with errors
import 'rxjs/add/operator/catch';
//our error class
import {ErrorHandler} from '../app.error-handler';

@Injectable()
export class RestaurantService {
     
    constructor(private http: Http) {

    }
    restaurants(): Observable<Store[]> {
      //.map convert the result in a list of JSON 
      //Response will return many informations but we need only the JSON.
      return this.http.get(`${URL_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Store> {
      return this.http.get(`${URL_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
}