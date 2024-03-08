import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  FormControl,
} from '@angular/forms';

@Directive({
  selector: '[wPasswordValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator {
  validate(control: FormControl): ValidationErrors | null {
    const v = control.value;

    let errors = {
      length: false,
      noUppercase: false,
      noLowercase: false,
      noSymbol: false,
    };

    // Check length
    if (v.length < 8 || v.length > 40) {
      errors['length'] = true;
    }

    // Check for uppercase, lowercase and symbol
    const hasUppercase = /[A-Z]/.test(v);
    const hasLowercase = /[a-z]/.test(v);
    const hasSymbol = /[!@#\$%\^&\*]/.test(v);

    if (!hasUppercase) {
      errors['noUppercase'] = true;
    }
    if (!hasLowercase) {
      errors['noLowercase'] = true;
    }
    if (!hasSymbol) {
      errors['noSymbol'] = true;
    }

    return Object.values(errors).some(error => error === true) ? errors : null;
  }
}
