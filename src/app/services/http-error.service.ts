import { AlertService } from './alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private alerter: AlertService) {
  }

  handleError(errorResponse: HttpErrorResponse, msg: string = '') {
    // 1 - Create empty array to store errors
    const errors = [];

    // 2 - check if the error object is present in the response
    if (errorResponse.error) {

      // 3 - Push the main error message to the array of errors
      errors.push(errorResponse.error.message ? errorResponse.error.message : errorResponse.error?.error);

      // 4 - Check for Laravel form validation error messages object
      if (errorResponse.error.errors) {

        // 5 - For each error property (which is a form field)
        for (const property in errorResponse.error.errors) {

          if (errorResponse.error.errors.hasOwnProperty(property)) {

            // 6 - Extract it's array of errors
            const propertyErrors: Array<string> = errorResponse.error.errors[property];

            // 7 - Push all errors in the array to the errors array
            propertyErrors.forEach(error => errors.push(error));
          }

        }
      }
    }
    if (errors.length) {
      var errMessage = msg ? msg : errors[0];
      this.alerter.addAlert("Error: " + errMessage, "warning");
    }
  }

  getDynamicErrorFromAPI(errors: any, msg: string): string {
    try {
      return errors[Object.keys(errors)[0]][0];
    } catch (e) {
      return msg;
    }
  }
}
