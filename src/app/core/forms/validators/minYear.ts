import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import * as moment from 'moment';

export function minYear(requiredYear: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => moment().diff(moment(control.value), 'years') < requiredYear
    ? { minYear: { requiredYear } }
    : null
}

