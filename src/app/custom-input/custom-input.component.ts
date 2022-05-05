import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

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
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor,Validator {
  customInput: any;
  valid = false;


  onChange: any = () => { };

  onTouch: any = () => { };

  writeValue(customInput: any) {
    this.customInput = customInput;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  onValidatorChange = () => {
  };

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
   }

  // Define what should happen in this component, if something changes outside

    validate(c: AbstractControl): ValidationErrors | null {
    return !this.customInput ? { invalidInput: true } : null;
  }

}
