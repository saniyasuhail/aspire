import { Component, Output, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { Router } from "@angular/router"
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpErrorService } from '../services/http-error.service'
import { HttpService } from '../services/http.service'
import { FormValidatorService } from '../services/form-validator.service'
import { AlertService } from '../services/alert.service'
const errorMessages: any = {
    email: {
        required: "Email is required",
        
    },
    
    password: {
        required: "Password is required",
    },
   
    
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    employerLoginForm: FormGroup;
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
        this. employerLoginForm = this.fb.group({
        
        email: new FormControl('', [
            Validators.required,
           // Validators.email,
          ]),
        password: new FormControl('', Validators.required),
        
        })       
      }

    login() {
        if (!this.employerLoginForm.valid) {
            return;
        }
        this.isWorking = true;  
        const data = {
           
            username: this.employerLoginForm.value.email,
            password: this.employerLoginForm.value.password,
          }
          console.log(data);
        this.httpService.POST("/user/login", data).subscribe(
            response => {
                console.log(data);
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
    getErrorMessage(field: string) {
        return this.formValidatorService.getErrorMessage(field, this.employerLoginForm, errorMessages);
    }
 }                




