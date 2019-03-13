import { Component } from '@angular/core';
import { PatientService } from '../model/patient.service';
import { Patient, Login } from '../model/patient.model';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { log } from 'util';
import { Router } from '@angular/router';
@Component({
    selector: 'my-login-page',
    templateUrl: `app/Login/login.component.html`,
    styleUrls: ['app/Login/login.component.css']
   
})
export class LoginComponent {

    login: Login = {
        username: null,
        password: null
    };

    loginMessage: string;

    constructor(private _patientservice: PatientService, private _router: Router) {

    }

    saveEmployee(_login: Login): void {
        if (this._patientservice.passwordcheck(_login.username)) {
            this._router.navigate(['/Dashboard']);
        } else {
            this.loginMessage = "Please Check Credentials";
        }
      
    }
}