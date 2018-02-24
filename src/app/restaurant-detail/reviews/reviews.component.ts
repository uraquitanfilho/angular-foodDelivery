import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../restaurant/restaurant.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'fd-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  
  reviews: Observable<any>;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //ATTENTION: was used parent.snapshot WHY?
    //because we are inside a children, so need to get the father route using parent.
    this.reviews = this.restaurantService
       .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
