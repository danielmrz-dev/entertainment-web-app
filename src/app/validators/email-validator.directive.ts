import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[emailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const emailPattern: RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    const IS_EMAIL_VALID = emailPattern.test(control.value);

    return IS_EMAIL_VALID ? null : { invalidEmailPattern: true }
  }

}
