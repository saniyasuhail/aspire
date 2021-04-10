import { SuccessSnackComponent, ErrorSnackComponent } from '../snack/snack.component';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public snackBar: MatSnackBar) { }

  addAlert(message: string, alertType: string, duration = 3) {
    if (alertType == "success") {
      this.snackBar.openFromComponent(SuccessSnackComponent, {
        duration: 1000 * duration,
        data: message
      });
    }
    else {
      this.snackBar.openFromComponent(ErrorSnackComponent, {
        duration: 1000 * duration,
        data: message
      });
    }
  }

}
