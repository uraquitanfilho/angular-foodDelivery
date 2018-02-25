import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption} from './radio-option.model';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'fd-radio',
  templateUrl: './radio.component.html',

  providers: [
    {
      //this is necessary to register as a value accessor component
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];

  value: any;

  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value:any) {
    this.value = value;
    this.onChange(this.value);
  }

  /*ControlValueAccessor Interface */
  //used to send value to component
  writeValue(obj:any): void {
     this.value = obj;
  }
  //if interval value to changes, this method will be called
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }
}
