"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PatientService = /** @class */ (function () {
    function PatientService() {
        this.patients = [
            {
                id: "1",
                name: "Rajesh",
                age: 25,
                address: "Bengaluru",
                doctor: 'Robin sharama',
                isnormal: "Normal",
                image: '1.jpg'
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
        ];
    }
    PatientService.prototype.passwordcheck = function (userid) {
        return !!this.patients.find(function (u) { return u.id == userid; });
    };
    PatientService.prototype.getPatientiDetails = function () {
        return this.patients;
    };
    PatientService.prototype.getPatientiDetailsById = function (id) {
        return this.patients.find(function (p) { return p.id == id; });
    };
    PatientService = __decorate([
        core_1.Injectable()
    ], PatientService);
    return PatientService;
}());
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map