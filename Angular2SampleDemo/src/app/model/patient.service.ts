import { Injectable } from '@angular/core';
import { Patient } from './patient.model'

@Injectable()
export class PatientService {

    patients: Patient[] = [
        {
            id:"1",
            name :"Rajesh",
            age: 25,
            address: "Bengaluru",
            doctor: 'Robin sharama',
            isnormal: "Normal",
            image:'1.jpg'

        },
        {
            id: "2",
            name: "Sara",
            age: 30,
            address: "Pune",
            doctor: 'Manish sharama',
            isnormal: "Abnormal",
            image: '2.jpg'
        },
        {
            id: "3",
            name: "Manasa",
            age: 28,
            address: "USA",
            doctor: 'Joseph Murphy',
            isnormal: "Abnormal",
            image: '3.jpg'

        },
        {
            id: "4",
            name: "Mahesh",
            age: 45,
            address: "Vijayavada",
            doctor: 'Robin ',
            isnormal: "Normal",
           image: '4.jpg'

        },
        {
            id: "5",
            name: "Rana",
            age: 38,
            address: "UK",
            doctor: 'sharama',
            isnormal: "Normal",
            image: '5.jpg'

        }
    ]

    passwordcheck(userid: string): boolean {
        return !!this.patients.find(u => u.id == userid);
    }

    getPatientiDetails(): Patient[]{
        return  this.patients;
    }

    getPatientiDetailsById(id: string): Patient {
        return this.patients.find(p => p.id == id);
    }
   

}