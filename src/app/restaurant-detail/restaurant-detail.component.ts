import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Store } from '../restaurant/store/store.model';
import { ActivatedRoute } from '@angular/router'; //to have access to router parameters

@Component({
  selector: 'fd-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Store;
  constructor(
               private restaurantService: RestaurantService,
               private route: ActivatedRoute) { }

  ngOnInit() {
    //we will access using SNAPSHOT
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
       .subscribe(restaurant => this.restaurant = restaurant);
  }

}
