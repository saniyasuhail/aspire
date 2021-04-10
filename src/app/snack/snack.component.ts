import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'success-snack.html',
  styleUrls: ['./snack.scss'],
})
export class SuccessSnackComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'error-snack.html',
  styleUrls: ['./snack.scss'],
})
export class ErrorSnackComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
