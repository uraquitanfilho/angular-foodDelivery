import {NgModule} from '@angular/core';
//cause we need FormsModule, ReactiveForms...
import {SharedModule} from '../shared/shared.module';

//Lazy Loading need import Routes too
import {RouterModule, Routes} from '@angular/router';

import {OrderComponent} from './order.component';
import {OrderItemsComponent} from './order-items/order-items.component';
import {DeliveryCostComponent} from './delivery-cost/delivery-cost.component';

import {LeaveOrderGuard} from './leave-order.guard';

const ROUTES: Routes = [
    {path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
]
@NgModule({
  declarations:[OrderComponent, OrderItemsComponent, DeliveryCostComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {}