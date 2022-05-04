import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
    // Step 1: provide the control value accessor property in providers
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CustomInputComponent),
        multi: true,
      },
    ],
})
export class CustomInputComponent implements ControlValueAccessor {
  valid = false;
  onChange: any = () => {};
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // Define what should happen in this component, if something changes outside
  customInput: any;
  writeValue(customInput: any) {
    this.customInput = customInput;
  }
  validate(control: FormControl) {
    if (control.value) {
       this.valid=true;
    }
}

}
