import { Component ,OnInit } from '@angular/core';
import { PatientService } from '../model/patient.service';
import { Patient } from '../model/patient.model';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector:'my-dashboard',
    templateUrl:'app/DashBoard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public imgPath: string = "1.jpg";

    patients: Patient[];
    patient: Patient;
    ID: string;
    constructor(private _patientservice: PatientService,
        private _router: Router, private _activatedroute: ActivatedRoute) {
    }

    ngOnInit() {
        this.patients = this._patientservice.getPatientiDetails();

        this._activatedroute.paramMap.subscribe(params => {
            this.ID=params.get('id');   
        })
        this.patient = this._patientservice.getPatientiDetailsById(this.ID);
       
    }

    passvalue(id: string): void {
        // this._router.navigate(['/Dashboard', this.ID]);
        
        this.patient = this._patientservice.getPatientiDetailsById(id);
    }
}