import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';
//to work with reactive forms
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

//another form to work with routes.
import {Router} from '@angular/router';

import 'rxjs/add/operator/do';

@Component({
  selector: 'fd-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

   emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   numberPattern = /^[0-9]*$/;
   orderForm: FormGroup;

  //fixed on the code. But it can be called by a RestAPI.
  //for this example our cost delivery = 8 always.
  delivery: number = 8;
  orderId : string;

  paymentOptions: RadioOption[] = [
    {label: "Cache", value: "MON"},
    {label: "Debit Card", value: "DEB"},
    {label: "Credit Card", value: "CRE"}

  ];
  constructor(private orderService: OrderService, 
              private router: Router,
              private formBuilder: FormBuilder ) { }

  ngOnInit() {
    //Added to use reative forms
    this.orderForm = this.formBuilder.group({
        name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        email: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]),
        emailConfirmation: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]),
        address: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
        number: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPattern)]),
        optionalAddress: this.formBuilder.control(''),
        paymentOption: this.formBuilder.control('',[Validators.required])
    }, {validator: OrderComponent.equalsTo});
  }
//this is used to custom validations
  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    if(!email || !emailConfirmation) {
      return undefined;
    }
    if(email.value !== emailConfirmation.value) {
      return{emailsNotMatch: true} //emailsNotMatch can be any name
    }
    return undefined;
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
  isOrderCompleted(): boolean {
     return this.orderId !== undefined;
  }

  checkOrder(order: any) {
    order.OrderItem = this.cartItems()
      .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order)
      .do((orderId: string) => {
         this.orderId = orderId;
      })
      .subscribe((orderId)=> {
        this.router.navigate(['/order-summary']); //direct router call without routerLink
       // console.log(`finished payment: ${orderId}`);
        this.orderService.clear();
    });  
    //console.log(order);
  }
}
