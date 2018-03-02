import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName} from '@angular/forms';

@Component({
  selector: 'fd-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  
  @Input() label: string;
  @Input() errorMessage: string;
  @Input() inputId: string;
  @Input() showTip: boolean = true;

  input: any;
  //using contentChild, the Angular can inject references to the component.
  //To make it, we need the interface AfterContentInit
  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName; //added to use Reactive Forms

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.input = this.model || this.control;
    if(this.input === undefined) {
      throw new Error("this componenet need to be used with a ngModel or FormControlName Directive");
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
