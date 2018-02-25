import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';

//another form to work with routes.
import {Router} from '@angular/router';
@Component({
  selector: 'fd-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  //fixed on the code. But it can be called by a RestAPI.
  //for this example our cost delivery = 8 always.
  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: "Cache", value: "MON"},
    {label: "Debit Card", value: "DEB"},
    {label: "Credit Card", value: "CRE"}

  ];
  constructor(private orderService: OrderService, private router: Router ) { }

  ngOnInit() {
  }
  itemsValue(): number {
    return this.orderService.itemsValue();
  }
  //to show the items
  cartItems (): CartItem[]{
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item:CartItem) {
    this.orderService.remove(item);
  }
 
  checkOrder(order: any) {
    order.OrderItem = this.cartItems()
      .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId)=> {
      this.router.navigate(['/order-summary']); //direct router call without routerLink
      console.log(`finished payment: ${orderId}`);
      this.orderService.clear();
    });  
    console.log(order);
  }
}
