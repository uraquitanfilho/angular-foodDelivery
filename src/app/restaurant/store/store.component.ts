import { Component, OnInit, Input } from '@angular/core';

import {Store} from './store.model';

@Component({
  selector: 'fd-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
 
  @Input() store: Store;
  constructor() { }

  ngOnInit() {
  }

}
