
import {Injectable} from '@angular/core'

import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { NotificationService } from '../../shared/messages/notification.service';

@Injectable()
export class ShoppingCartService {
    
    items: CartItem[] = [];

    constructor(private notificationService: NotificationService) {

    }

    clear() {
      this.items = [];
    }
    
    addItem(item:MenuItem) {
       let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
       if(foundItem) {
         this.increaseQty(foundItem);  
       } else {
           this.items.push(new CartItem(item));
       }
       this.notificationService.notify(`${item.name} was added to your cart delivery`);
    }

    removeItem(item: CartItem) {
       this.items.splice(this.items.indexOf(item), 1);
       this.notificationService.notify(`${item.menuItem.name} was removed to your cart delivery`);
    }

    total(): number {
        return this.items
          .map(item => item.value())
          .reduce((prev, value) => prev + value, 0); // reduce will adds two parametes, prev + value and will start with 0
    }

    increaseQty(item: CartItem) {
      item.quantity = item.quantity + 1;
    }

    deCreaseQty(item: CartItem) {
      item.quantity = item.quantity - 1;
      if(item.quantity === 0) {
        this.removeItem(item);
      }
    }
}