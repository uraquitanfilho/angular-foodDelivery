import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';
import {trigger, state, style, transition, animation, animate} from '@angular/animations';

@Component({
  selector: 'fd-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
       state('ready', style({opacity:1})),
       transition('void => ready',[
         style({opacity:0, transform: 'translateY(-20px)'}),
         animate('300ms 0s ease-in-out')
       ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {
  
  menuItemState = 'ready' //to make animation
  
  @Input() menuItem: MenuItem;
  //All event need to be used the decorator @Output
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem);
  }
}
