import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Order, OrderItem} from './order.model';
import {URL_API} from '../app.api';
//import { LoginService } from '../security/login/login.service';


@Injectable()
export class OrderService {
   
    constructor(private cartService: ShoppingCartService, 
                private http: HttpClient//, 
                //private loginService: LoginService
               ) {}

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }
    
    decreaseQty(item: CartItem) {
        this.cartService.deCreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }
    itemsValue(): number {
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<string>{
    // const headers = new Headers();
    // headers.append('Content-Type','application/json');
     //To work with post method, need to send the header. So to work with headers need send an object by RequestOptions
     let headers = new HttpHeaders();
    /* if(this.loginService.isLoggedIn()) {
         //this is correct but not usual. Better work with interceptors to change the header
           //headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
     } */
     return this.http.post<Order>(`${URL_API}/orders`, order)//, {headers})

                           .map(order => order.id);
     }

    clear() {
        this.cartService.clear();
    }
}