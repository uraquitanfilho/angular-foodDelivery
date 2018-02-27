import { Component, OnInit, Input } from '@angular/core';

import {Store} from './store.model';
//to make screen animation transition
import {trigger, state, style, transition, animation, animate} from '@angular/animations';

@Component({
  selector: 'fd-store',
  templateUrl: './store.component.html',
  animations: [
    trigger('restaurantAppeared', [
       state('ready', style({opacity:1})),
       transition('void => ready',[
         style({opacity:0, transform: 'translate(-30px, -10px)'}),
         animate('300ms 0s ease-in-out')
       ])
    ])
  ]
})
export class StoreComponent implements OnInit {

  restaurantState = 'ready'; //added to make animation
  
  @Input() store: Store;
  constructor() { }

  ngOnInit() {
  }

}
