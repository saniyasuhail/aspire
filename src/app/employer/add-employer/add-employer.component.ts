import { Component, Output, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { Router } from "@angular/router"
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpErrorService } from '../../services/http-error.service'
import { HttpService } from '../../services/http.service'
import { FormValidatorService } from '../../services/form-validator.service'
import { AlertService } from '../../services/alert.service'
const errorMessages: any = {
    hotel_name: {
        required: "Hotel name is required",
        
    },
    contact_person: {
        required: "Contact Prson is required",
        
    },
    phone: {
        required: "Phone is required",
    },
    password: {
        required: "Password is required",
    },
   
    email: {
        email: "Invalid email"
    }
};

 @Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.scss']
})
export class AddEmployerComponent implements OnInit {
    employerSignupForm: FormGroup;
    isWorking: boolean = false;
     constructor(
      private httpService: HttpService,
      private httpErrorService: HttpErrorService,
      private router: Router,
      private alerter: AlertService,
      private fb: FormBuilder,
      private formValidatorService: FormValidatorService,
      
    ) {}

    ngOnInit() {
        this. employerSignupForm = this.fb.group({
        hotel_name: new FormControl('', Validators.required),
        contact_person: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        email: new FormControl('', [
            Validators.required,
            Validators.email,
          ]),
        password: new FormControl('', Validators.required),
        confirm_password: new FormControl('', Validators.required),
        })       
      }

    signup() {
        if (!this.employerSignupForm.valid) {
            return;
        }
        this.isWorking = true;  

        this.httpService.POST("employer/add", this.employerSignupForm.value).subscribe(
            response => {
                this.isWorking = false;
                this.alerter.addAlert("Successfully added the employer. ", "success");
                //this.onSave.emit(response.item);
                //this.router.navigate(['/payroll/salaries/add/', response.item.id]);
            }, error => {
                this.isWorking = false;
                this.httpErrorService.handleError(error)
            }
        );
    }

//     /** Method to evaluate form fields*/
//     // isFieldValid(field: string) {
//     //     return this.formValidatorService.isFieldValid(field, this.employeeSignupForm);
//     // }

//     /** Method to find error in form fields*/
//     getErrorMessage(field: string) {
//         return this.formValidatorService.getErrorMessage(field, this.employerSignupForm, errorMessages);
//     }
 }                



// export class AddEmployerComponent implements OnInit {

//   constructor(
//           private httpService: HttpService,
//           private httpErrorService: HttpErrorService,
//           private router: Router,
//           private alerter: AlertService,
//           private fb: FormBuilder,
//           private formValidatorService: FormValidatorService,
//           ) { }

//   ngOnInit(): void {
//   }

// }
