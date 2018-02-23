import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'fd-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do foodDelivery App!'

  constructor() { }

  ngOnInit() {
  }

}