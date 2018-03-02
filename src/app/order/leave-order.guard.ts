import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import {OrderComponent} from './order.component';

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
 
  constructor() {}

  canDeactivate(orderComponent: OrderComponent, 
                activatedRoute: ActivatedRouteSnapshot, 
                routerState: RouterStateSnapshot) : boolean {
     if(!orderComponent.isOrderCompleted()) {
       return window.confirm('Do you want stop with this order?');
     }               
     return true;               
    
  }

}