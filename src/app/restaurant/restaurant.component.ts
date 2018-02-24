import { Component, OnInit } from '@angular/core';
import { Store } from './store/store.model';
import {RestaurantService} from './restaurant.service';

@Component({
  selector: 'fd-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  restaurants: Store[] = [];
  constructor(private restaurantService: RestaurantService) { }
//inicialization of the component
  ngOnInit() {
    this.restaurants = this.restaurantService.restaurants();
  }

}
