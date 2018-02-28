import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Order, OrderItem} from './order.model';
import {URL_API} from '../app.api';

@Injectable()
export class OrderService {
   
    constructor(private cartService: ShoppingCartService, private http: HttpClient) {}

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
     return this.http.post<Order>(`${URL_API}/orders`, order)

                           .map(order => order.id);
     }

    clear() {
        this.cartService.clear();
    }
}