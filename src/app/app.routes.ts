
import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    //loadChildren to work with lazy loading
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'restaurants', component: RestaurantComponent},
    //parameter
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
    //children
    children: [
      //case add any word after restaurants, will redirect to menu  
      {path: '', redirectTo: 'menu', pathMatch: 'full'},  
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent},
    ]
  },
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: '**', component: NotFoundComponent} 
];