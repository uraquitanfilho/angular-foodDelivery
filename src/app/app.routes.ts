import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
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
  } 
];