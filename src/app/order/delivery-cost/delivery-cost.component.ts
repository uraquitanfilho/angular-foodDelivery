import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fd-delivery-cost',
  templateUrl: './delivery-cost.component.html'
})
export class DeliveryCostComponent implements OnInit {

  @Input() delivery: number;
  @Input() itemsValue : number;
  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.delivery + this.itemsValue;
  }
}
