import { NgModule } from '@angular/core';
import { SuccessSnackComponent, ErrorSnackComponent } from './snack.component';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SuccessSnackComponent,
    ErrorSnackComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    SharedModule 
  ],
  exports: [],
  entryComponents: [
    SuccessSnackComponent,
    ErrorSnackComponent
  ]
})
export class SnackModule { }
