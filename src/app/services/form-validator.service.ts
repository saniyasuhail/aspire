import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class FormValidatorService {
  constructor() {}

  /**Method to evaluate form fields*/
  isFieldValid(field: string, formGroup: FormGroup, firstAttempt: boolean) {
    return (
      (!formGroup.get(field).valid && formGroup.get(field).touched) ||
      (!formGroup.get(field).valid &&
        formGroup.get(field).untouched &&
        firstAttempt)
    );
  }

  /**Method to find error in form fields*/
  getErrorMessage(
    field: string,
    formGroup: FormGroup,
    errorMessages: any,
    errorField?: string
  ) {
    const error = Object.keys(formGroup.get(field).errors);
    return error.length > 0
      ? errorMessages[errorField || field][error[0]]
        ? errorMessages[errorField || field][error[0]]
        : ""
      : "";
  }
}
