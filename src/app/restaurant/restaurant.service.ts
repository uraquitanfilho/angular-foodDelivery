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

@Injectable()
export class RestaurantService {
     
    constructor(private http: Http) {

    }
    restaurants(): Observable<Store[]> {
      //.map convert the result in a list of JSON 
      //Response will return many informations but we need only the JSON.
      return this.http.get(`${URL_API}/restaurants`)
        .map(response => response.json());
    }
}