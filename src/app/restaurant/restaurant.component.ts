import { Component, OnInit } from '@angular/core';
import { Store } from './store/store.model';
import {RestaurantService} from './restaurant.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {trigger, state, style, transition, animation, animate} from '@angular/animations';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'fd-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    trigger('toggleSearch', [
       state("hidden", style({
         opacity: 0,
         "max-height": "0px"
       })),
       state("visible", style({
         opacity: 1,
         "max-height": "70px",
         "margin-top": "20px"
       })),
       transition('* => *', animate('259ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantComponent implements OnInit {
  
  searchBarState = 'hidden';
  restaurants: Store[] = [];
  
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private restaurantService: RestaurantService,
              private fb: FormBuilder) { }
//inicialization of the component
ngOnInit() {

  this.searchControl = this.fb.control('')
  this.searchForm = this.fb.group({
    searchControl: this.searchControl
  })

  this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm =>
        this.restaurantService
          .restaurants(searchTerm)
          .catch(error=>Observable.from([])))
      .subscribe(restaurants => this.restaurants = restaurants)

  this.restaurantService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
}

toggleSearch(){
  this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
}
}
